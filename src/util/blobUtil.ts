import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { streamToBuffer } from "./fileUtil";

const blobService = BlobServiceClient.fromConnectionString(process.env.STORAGE_CONNECTION);

export const uploadBlob = (stream, container: string, blobName: string) => {
    return blobContainer(container).then(containerClient => {
        return containerClient.getBlockBlobClient(blobName).uploadStream(stream).then(r => {
            return blobUrl(container, blobName);
        });
    });
}

export const uploadBlobBuffer = (buff, container: string, blobName: string) => {
    return blobContainer(container).then(containerClient => {
        return containerClient.getBlockBlobClient(blobName).uploadData(buff).then(r => {
            return blobUrl(container, blobName);
        });
    });
}

export const moveBlob = async (container: string, newBlobName: string, oldBlobName: string, label?: string) => {
    return downloadBlobBuffer(container, oldBlobName).then(buff => {
        return uploadBlobBuffer(buff, container, newBlobName);
    });
}

export async function downloadBlobBuffer(container: string, blobName: string) {
    return blobContainer(container).then(async containerClient => {
        const blobClient = containerClient.getBlockBlobClient(blobName);
        return blobClient.download().then(downloadResponse => {
            return streamToBuffer(downloadResponse.readableStreamBody);
        });
    });
}

const blobContainer = (container: string): Promise<ContainerClient> => {
    const containerClient = blobService.getContainerClient(container);
    return containerClient.createIfNotExists().then(r => {
        return containerClient;
    });
}

export const blobUrl = (container: string, blobName: string) => {
    return `${process.env.STORAGE_URL}/${container}/${blobName}`;
}

export const ContainerAttachment = 'attachment'
export const ContainerDocument = 'document'
export const ContainerBackup = 'backup'