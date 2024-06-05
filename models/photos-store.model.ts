export interface PhotosStoreModel 
{
    updatedAt: string;
    posts: PostModel[];
}

export interface PostModel {
    identifier: string;
    name: string;
    description: string;
    photos: PhotoModel[];
    thumbnails: PhotoModel[];
}

export interface PhotoModel {
    path: string;
    width: number;
    height: number;
}