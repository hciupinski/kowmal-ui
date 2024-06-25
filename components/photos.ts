import photosSrc from "../public/photos.json";
import {PhotosStoreModel} from "@/models/photos-store.model";

const breakpoints = [1200, 1080, 640, 384, 256, 128, 96, 64, 48];

const store: PhotosStoreModel = Object.assign({} as PhotosStoreModel, photosSrc);

export type PhotoGenImage = {
    key: string,
    src: string
    width: number
    height: number
    desc: string
    srcSet: {
        src: string
        width: number
        height: number
    }[]
}

const photos = store.posts.map((post ) => ({
    src: `/${post.photos[0].path}`,
    key: post.identifier,
    width: post.photos[0].width,
    height: post.photos[0].height,
    desc: post.description,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((post.photos[0].width / post.photos[0].height) * breakpoint);
        return {
            src: `/${post.photos[0].path}`,
            width: breakpoint,
            height,
        };
    }),
})) as PhotoGenImage[];

export default photos;

export function postPhotos( identifier: string){
    const post = store.posts.find(post => post.identifier === identifier)!;
    return post?.photos.map((photo ) => ({
        src: `/${photo.path}`,
        key: identifier,
        width: photo.width,
        height: photo.height,
        title: post.name,
        description: post.description,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.width / photo.height) * breakpoint);
            return {
                src: `/${photo.path}`,
                width: breakpoint,
                height,
            };
        }),
    }));
}