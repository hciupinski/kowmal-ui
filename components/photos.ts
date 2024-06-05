import photosSrc from "../public/photos.json";
import {PhotosStoreModel} from "@/models/photos-store.model";

const breakpoints = [1200, 1080, 640, 384, 256, 128, 96, 64, 48];

const store: PhotosStoreModel = Object.assign({} as PhotosStoreModel, photosSrc);

const photos = store.posts.map((post ) => ({
    src: `/${post.photos[0].path}`,
    key: post.identifier,
    width: post.photos[0].width,
    height: post.photos[0].height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((post.photos[0].width / post.photos[0].height) * breakpoint);
        return {
            src: `/${post.photos[0].path}`,
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;

export function postPhotos( identifier: string){
    console.log(store.posts.find(p => p.identifier === identifier))
    return store.posts.find(p => p.identifier === identifier)?.photos.map((photo ) => ({
        src: `/${photo.path}`,
        key: identifier,
        width: photo.width,
        height: photo.height,
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