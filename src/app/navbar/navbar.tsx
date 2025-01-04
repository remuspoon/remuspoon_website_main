'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className='lg:sticky grid grid-cols-2 md:grid-cols-12 gap-5 w-full top-0 z-50 px-5 py-5 w-full'>
            <div className='col-start-1 flex items-center space-x-5 justify-start lg:justify-center'>
                <Link href="/" onClick={handleLogoClick}>
                    <h1 className='text-base font-abril text-main'>Logo</h1>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
