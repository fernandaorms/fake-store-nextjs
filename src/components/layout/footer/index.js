import Link from 'next/link';
import { Suspense } from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import LogoSquare from '@/components/icons/logo-square';
import FooterMenu from './footer-menu';

const { SITE_NAME, COMPANY_NAME } = process.env;

export default async function Footer() {
    const currentYear = new Date().getFullYear();
    const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : '');
    const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
    const copyrightName = COMPANY_NAME || '';
    const menu = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/terms-conditions', title: 'Terms & Conditions' },
        { path: '/privacy-policy', title: 'Privacy Policy' },
        { path: '/frequently-asked-questions', title: 'FAQ' },
    ];

    return (
        <footer className='text-sm text-neutral-500 dark:text-neutral-400'>
            <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700'>
                <div>
                    <Link className='flex items-center gap-2 text-black md:pt-1 dark:text-white' href='/'>
                        <LogoSquare size='sm' />
                        <span className='uppercase'>{SITE_NAME}</span>
                    </Link>
                </div>

                <Suspense
                    fallback={
                        <div className='flex h-[188px] w-[200px] flex-col gap-2'>
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                        </div>
                    }
                >
                    <FooterMenu menu={menu} />
                </Suspense>

                <div className='md:ml-auto'>
                    <Link
                        href='https://github.com/fernandaorms'
                        className='flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-sm text-black dark:border-neutral-700 dark:bg-black dark:text-white'
                        aria-label='View source on Github'
                        target='_blank'
                    >
                        <FaGithubAlt className='mx-3' />
                        <hr className='h-full border-r border-neutral-200 dark:border-neutral-700' />
                        <span className='px-3'>Github</span>
                    </Link>
                </div>
            </div>

            <div className='border-t border-neutral-200 py-6 text-sm dark:border-neutral-700'>
                <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0'>
                    <p>
                        &copy; {copyrightDate} {copyrightName}
                        {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
                    </p>

                    <p className='md:ml-auto'>
                        <a href='https://vercel.com' className='text-black dark:text-white'>
                            Adapted from ▲ Vercel
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}