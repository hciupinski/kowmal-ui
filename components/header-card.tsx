'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HeaderCard() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isSticky && window.scrollY > 0) {
                return;
            }
            else if(!isSticky && window.scrollY === 0) {
                setIsSticky(false);
            }
            else if(!isSticky && window.scrollY > 90) {
                setIsSticky(true)
            }            
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return <>
        <div className={`mx-auto mb-4 shadow-lg rounded-lg overflow-hidden header-card ${isSticky ? 'sticky' : ''}`}>
            <div className="relative">
                <div className="text-center px-6 py-4">
                    <div className={`${isSticky ? 'pb-1' : 'py-4'}`}>
                        <h3 className="text-xl font-semibold text-kowmal-primary">KOWMAL</h3>
                    </div>
                    {!isSticky && 
                        <div>
                            <h3 className="text-sm text-kowmal-primary">The handcrafted sabres for You.</h3>
                            <p id="description" className="text-sm font-medium"></p>
                        </div>
                    }
                    <div className={`flex justify-center ${isSticky ? 'mt-1 gap-4' : 'mt-6 gap-8'}`}>
                        <div>
                            <p className="text-sm text-kowmal-primary">
                                <EnvelopeIcon width={22} height={22}/>
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <Image src={'/fb.png'} alt={'fb'} width={22} height={22} className={'mb-1'}/>
                            </p>
                        </div>
                        <div className="ml-6">
                            <p className="text-sm text-kowmal-primary">
                                <Image src={'/insta.svg'} alt={'insta'} width={22} height={22} className={'mb-1'}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}