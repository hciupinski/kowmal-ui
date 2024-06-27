'use client';

import { Anton, Bilbo_Swash_Caps } from 'next/font/google'
import React from "react";
import {SocialIcon} from "react-social-icons";

const anton = Anton({ weight: "400", subsets: ['latin'] })
const bilbo = Bilbo_Swash_Caps({weight: "400", subsets: ['latin'] })

export default function HeaderCard() {  
    
    return <>
        <div className={`mx-auto mb-4 shadow-lg rounded-lg overflow-hidden header-card`}>
            <div className="relative">
                <div className="text-center px-6 py-4">
                    <div className={'py-4'}>
                        <h3 className={`text-[2rem] font-semibold text-kowmal-primary ${anton.className}`}>KOWMAL</h3>
                    </div>
                        <div>
                            <h3 className={`text-[1.5rem] text-kowmal-primary ${bilbo.className}`}>The handcrafted sabres for You.</h3>
                            <p id="description" className="text-sm font-medium"></p>
                        </div>
                    <div className={`flex justify-center mt-6 gap-8`}>
                        <div>
                            <p className="text-sm text-kowmal-primary">
                                <SocialIcon url="mailto:tomekdesa@gmail.com" target="_blank" bgColor="#E4C59E" fgColor="#322C2B" style={{ height: 25, width: 25 }} />
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <SocialIcon url="https://facebook.com/tomek.kowmal/" target="_blank" bgColor="#E4C59E" fgColor="#322C2B" style={{ height: 25, width: 25 }} />
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <SocialIcon url="https://instagram.com/tomekkowmal" target="_blank" bgColor="#E4C59E" fgColor="#322C2B" style={{ height: 25, width: 25 }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}