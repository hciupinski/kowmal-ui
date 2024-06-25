'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from "next/image";

import { Anton, Bilbo_Swash_Caps } from 'next/font/google'

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
                                <a href={"mailto:tomekdesa@gmail.com"} target={'_blank'}>
                                    <EnvelopeIcon width={22} height={22}/>
                                </a>
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <a href={"https://www.facebook.com/tomek.kowmal/"} target={'_blank'}>
                                    <Image src={'/fb.png'} alt={'fb'} width={22} height={22} className={'mb-1'}/>
                                </a>
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <a href={"https://www.instagram.com/tomekkowmal/"} target={'_blank'}>
                                    <Image src={'/insta.svg'} alt={'insta'} width={22} height={22} className={'mb-1'}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}