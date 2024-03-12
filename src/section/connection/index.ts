export type ConnectionInput = {
  credentials: any
  info?: any
  ad_account_id: string
}

export enum ConnectionType {
  Meta=10,
  Google=20
}

export type ConnectionIdInput={
  connection_id: number
}