'use client';

import HeaderCard from "@/components/header-card";
import PhotoGallery from "@/components/photo-gallery";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
    return (
        <NextUIProvider>
            <div className={`mx-auto header-row `}>
                <div className={"flex items-center"}>
                    <div className="mx-auto">
                        <HeaderCard />
                    </div>
                </div>
            </div>

            <PhotoGallery />

            <div className={'flex justify-center mx-auto my-4 text-kowmal-primary'}>
                created by ItHubertCiupinski 2024
            </div>
        </NextUIProvider>
    );
}