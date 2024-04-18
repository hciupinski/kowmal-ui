import * as React from "react";

import "@/app/globals.css";
import {Metadata} from "next";
import HeaderCard from "@/components/header-card";

export const metadata: Metadata = {
    title: 'Kowmal - gallery',
}

export default function RootLayout({children}: React.PropsWithChildren) {
    return (
        <html lang="en">
        <body>
        <React.StrictMode>
            <main>
                {children}
            </main>
        </React.StrictMode>
        </body>
        </html>
    );
}