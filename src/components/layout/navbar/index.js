import Link from 'next/link';
import LogoSquare from '@/components/icons/logo-square';
import { getCategories } from '@/api';

const { SITE_NAME } = process.env;

export async function Navbar() {
    const categories = await getCategories();

    return (
        <nav className='relative flex items-center justify-between p-4 lg:px-6'>
            <div className='flex w-full items-center'>
                <div className='flex w-full md:w-1/3'>
                    <Link
                        href='/'
                        className='mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6'
                    >

                        <LogoSquare />

                        <div className='ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block'>
                            {SITE_NAME}
                        </div>
                    </Link>

                    {categories.length ? (
                        <ul className='hidden gap-6 text-sm md:flex md:items-center'>
                            <li key='all'>
                                <Link
                                    href='/search'
                                    className='capitalize text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                                >
                                    All
                                </Link>
                            </li>

                            {categories.slice(0, 2).map((category, index) => (
                                <li key={category}>
                                    <Link
                                        href={`/search/${category}`}
                                        className='capitalize text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    {/* <ul>
                        {categories.slice(0, 2).map((category, index) => (
                            <>
                                <li key={category}>{category}</li>
                            </>
                        ))}
                    </ul> */}
                </div>
            </div>
        </nav>
    )
}