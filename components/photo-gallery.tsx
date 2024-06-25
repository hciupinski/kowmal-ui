"use client";

import React, {useState} from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox, {SlotStyles} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import GenImage from "@/components/gen-image";

import {Captions, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import photos, {postPhotos} from "@/components/photos";

export default function PhotoGallery() {
    const [index, setIndex] = useState<string | undefined>(undefined);
    return (
        <>
            <PhotoAlbum
                photos={photos}
                layout="columns"
                renderPhoto={GenImage}
                defaultContainerWidth={1200}
                onClick={item => setIndex(item.photo.key)}
                sizes={{
                    size: "calc(100vw - 40px)",
                    sizes: [
                        {viewport: "(max-width: 299px)", size: "calc(100vw - 10px)"},
                        {viewport: "(max-width: 599px)", size: "calc(100vw - 20px)"},
                        {viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)"},
                    ],
                }}
            />

            <Lightbox
                styles={{container: {slide: {captionSide: "bottom"}}} as SlotStyles}
                slides={postPhotos(index!)}
                open={index !== undefined}
                index={0}
                close={() => setIndex(undefined)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Captions, Thumbnails, Zoom]}
            />
        </>
    );
}