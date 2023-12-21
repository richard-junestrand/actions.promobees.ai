import path from "path";

export const fileExtension = (name) => path.extname(name).toLowerCase();
export const fileName = (name, ext?: string) => path.basename(name, ext);

export function streamToBuffer(readableStream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on('data', (data) => {
            chunks.push(data instanceof Buffer ? data : Buffer.from(data));
        });
        readableStream.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
        readableStream.on('error', reject);
    });
}