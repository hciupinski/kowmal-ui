'use client';

import HeaderCard from "@/components/header-card";
import PhotoGallery from "@/components/photo-gallery";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import {Anton} from "next/font/google";

const anton = Anton({ weight: "400", subsets: ['latin'] })

export default function Home() {
    return (
        <NextUIProvider>
            <div className={`bg-kowmal-bg flex flex-col min-h-screen`}>
                <div className={`min-w-screen mx-auto header-row `}>
                    <div className={"flex items-center"}>
                        <div className="">
                            <HeaderCard />
                        </div>
                    </div>
                </div>
    
                <div className={'flex-grow'}>
                    <PhotoGallery />
                </div>
    
                <div className={`justify-center mx-auto my-6 text-kowmal-primary ${anton.className}`}>
                    created by <a href={"https://github.com/hciupinski"} target="_blank">hciupinski</a> 2024
                </div>
            </div>
        </NextUIProvider>
    );
}