import { Suspense } from 'react';
import Link from 'next/link';

import LogoSquare from '@/components/icons/logo-square';
import CartModal from '@/components/cart/modal';
import { getCategories, getCartById, getProductById } from '@/api';
import Search, { SearchSkeleton } from './search';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export async function Navbar() {
    const categories = await getCategories();
    const cart = await getCartById({ id: 1 });

    const newCart = await cartFetchProductDetails(cart);

    return (
        <nav className='relative flex items-center justify-between p-4 lg:px-6'>
            <div className='block flex-none md:hidden'>
                <Suspense fallback={null}>
                    <MobileMenu menu={categories} />
                </Suspense>
            </div>

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
                        <ul className='capitalize hidden gap-6 text-sm md:flex md:items-center'>
                            <li key='all'>
                                <Link
                                    href='/search'
                                    className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                                >
                                    All
                                </Link>
                            </li>

                            {categories.slice(0, 2).map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`/search/${category}`}
                                        className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <div className='hidden justify-center md:flex md:w-1/3'>
                    <Suspense fallback={<SearchSkeleton />}>
                        <Search />
                    </Suspense>
                </div>

                <div className='flex justify-end md:w-1/3'>
                    <CartModal cart={newCart} />
                </div>
            </div>
        </nav>
    )
}

async function cartFetchProductDetails(cart) {
    const productsWithDetails = [];
    let total = 0;

    for (const product of cart.products) {
        const productDetails = await getProductById({id: product.productId});
        productsWithDetails.push({
            ...product,
            product: productDetails
        });

        total += product.quantity * productDetails.price;
    }

    return { ...cart, products: productsWithDetails, total: total.toFixed(2)};
}