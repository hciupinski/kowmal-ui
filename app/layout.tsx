import * as React from "react";

import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Kowmal - gallery',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}