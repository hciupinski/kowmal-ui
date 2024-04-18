import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function GenImage({
                                        photo,
                                        imageProps: { alt, title, sizes, className, onClick },
                                        wrapperStyle,
                                    }: RenderPhotoProps) {
    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <Image
                fill
                src={photo}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, sizes, onClick }}
                className={className + ' rounded-md'}
            />
        </div>
    );
}