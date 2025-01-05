'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isOverBlog, setIsOverBlog] = useState(false);
    const [isOverMain, setIsOverMain] = useState(false);
    const isSlug = pathname.includes('/blogs/');
    const logoRef = useRef<HTMLHeadingElement>(null);

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (isHomePage) {
            const blogSection = document.getElementById('blog');
            const mainSection = document.querySelector('.h-screen'); // Targeting the main section
            const logoElement = logoRef.current;

            const checkOverlap = () => {
                if (logoElement) {
                    const logoRect = logoElement.getBoundingClientRect();

                    // Check blog section overlap
                    if (blogSection) {
                        const blogRect = blogSection.getBoundingClientRect();
                        const isOverlappingBlog = !(
                            logoRect.bottom < blogRect.top ||
                            logoRect.top > blogRect.bottom
                        );
                        setIsOverBlog(isOverlappingBlog);
                    }

                    // Check main section overlap
                    if (mainSection) {
                        const mainRect = mainSection.getBoundingClientRect();
                        const isOverlappingMain = !(
                            logoRect.bottom < mainRect.top ||
                            logoRect.top > mainRect.bottom
                        );
                        setIsOverMain(isOverlappingMain);
                    }
                }
            };

            checkOverlap();
            window.addEventListener('scroll', checkOverlap);

            return () => {
                window.removeEventListener('scroll', checkOverlap);
            };
        } else {
            setIsOverBlog(false);
            setIsOverMain(false);
        }
    }, [isHomePage]);

    return (
        <div className='lg:sticky grid grid-cols-2 md:grid-cols-12 gap-5 w-full top-0 z-50 px-5 py-5 w-full'>
            <div className='col-start-1 flex items-center space-x-5 justify-start lg:justify-center'>
                <Link href="/" onClick={handleLogoClick} className={`${isOverMain ? 'pointer-events-none' : ''}`}>
                    <h1 
                        ref={logoRef}
                        className={`text-base font-abril select-none ${
                            isOverMain ? 'opacity-0' : 'opacity-100'
                        } ${
                            isOverBlog || isSlug ? 'text-accent' : 'text-main'
                        } transition-all duration-200`}
                    >
                        remus
                    </h1>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
