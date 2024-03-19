import express from 'express';
import { SecretClient } from "@azure/keyvault-secrets"
import { DefaultAzureCredential } from "@azure/identity"

async function readKeyVault() {
  let others = process.env.OTHERS
  if (process.env.READ_VAULT) {
    const credential = new DefaultAzureCredential();
    const url = `https://promobees.vault.azure.net`;
    const client = new SecretClient(url, credential);
    //
    process.env.SECRET_KEY = (await client.getSecret("Secret")).value
    //
    others = (await client.getSecret("Others")).value;
  }
  const obj=JSON.parse(others)
  for (var key in obj) {
    process.env[key] = obj[key]
  }
}

const app = express();
function authorizationMiddleware(req, res, next) {
  const providedSecret = req.headers['ACTION_SECRET'] || req.headers['action_secret'];
  if (process.env.ACTION_SECRET == providedSecret) {
    next();
  }
  else {
    const err = new Error('Forbidden');
    err['status'] = 403;
    next(err);
  }
}

const isDev = app.get('env') === 'development';
// Request Handler
const handlers = [
  'campaignInsert', 'campaignUpdate', 'campaignDelete', 'campaignPreview',
  'templateInsert', 'templateUpdate', 'templateDelete',
  'userUpdate', 'userResetPassword',
  'organizationInsert', 'organizationUpdate',
  'organizationUserInsert', 'organizationUserUpdate', 'organizationUserDelete',
  'connectionInsert', 'connectionUpdate', 'connectionDelete',
  'metaLocationSearch', 'metaInterestSearch'
];
app.post(`/:route(${handlers.join('|')})`, express.json({ limit: '40mb' }), authorizationMiddleware,
  async (req: express.Request, res: express.Response, next) => {
    const { handler } = await import(`./handler/${req.params.route}`);
    await handler().handleHasura(req, res, isDev);
  });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err['status'] = 404;
  next(err);
});

// error handlers

app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  res.status(err['status'] || 500).json({
    message: isDev ? err.message : (err.status === 500 ? 'Unexpected error.' : err.message),
    error: err
  });
});

const port = process.env.PORT || 3003;
readKeyVault().then(r => {
  app.listen(port, async () => {
    console.log(`--up`, port);
  });
}).catch((error) => {
  console.error("---Failed to read key vault:", error);
});

export default app;