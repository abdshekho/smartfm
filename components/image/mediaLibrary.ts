export interface IMediaLibrary {
    id: string;
    description: string;
    type: string;
    s3Key: string;
    dir: string;
    createdAt?: number;
    updatedAt?: number;
}
