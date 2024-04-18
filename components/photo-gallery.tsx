"use client";

import {useState} from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import GenImage from "@/components/gen-image";

import {Fullscreen, Slideshow, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "@/components/photos";

export default function PhotoGallery() {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <PhotoAlbum
                photos={photos}
                layout="columns"
                renderPhoto={GenImage}
                defaultContainerWidth={1200}
                onClick={({index}) => setIndex(index)}
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
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}