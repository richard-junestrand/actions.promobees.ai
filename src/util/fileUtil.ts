import path from "path";
import { v4 as uuidv4 } from 'uuid';

export const fileExtension = (name) => path.extname(name).toLowerCase();
export const fileName = (name, ext?: string) => path.basename(name, ext);

export const randomFileName = (originalName=null) => {
    const ext = originalName?fileExtension(originalName):'';
    return `${uuidv4()}${ext}`;
};

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