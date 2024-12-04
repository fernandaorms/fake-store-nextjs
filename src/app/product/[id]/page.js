import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getProductById, getProducts } from '@/api';
import { GridTileImage } from '@/components/grid/tile';
import Footer from '@/components/layout/footer';
import { ProductDescription } from '@/components/product/product-description';

const { DEFAULT_CURRENCY_CODE } = process.env;

export default async function Page({ params }) {
    const paramsLoad = await params;
    const { id } = paramsLoad || null;
    const product = await getProductById({ id });


    return (
        <>
            <div className='mx-auto max-w-screen-2xl px-4'>
                <div className='flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black'>
                    <div className='h-full w-full basis-full lg:basis-4/6'>
                        <Suspense fallback={<div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden' />}>
                            <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
                                <Image
                                    className='h-full w-full object-contain'
                                    fill
                                    sizes='(min-width: 1024px) 66vw, 100vw'
                                    alt={product.title}
                                    src={product.image}
                                />
                            </div>
                        </Suspense>
                    </div>

                    <div className='basis-full lg:basis-2/6'>
                        <Suspense fallback={null}>
                            <ProductDescription product={product} />
                        </Suspense>
                    </div>
                </div>

                <Recommendations />
            </div>

            <Footer />
        </>
    )
}


async function Recommendations() {
    const products = await getProducts({});

    if (!products.length) return null;

    return (
        <div className='py-8'>
            <h2 className='mb-4 text-2xl font-bold'>Recommendations</h2>
            
            <ul className='flex w-full gap-4 overflow-x-auto pt-1'>
                {products.slice(0, 6).map((product) => (
                    <li
                        key={product.id}
                        className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'
                    >
                        <Link
                            className='relative h-full w-full'
                            href={`/product/${product.id}`}
                            prefetch={true}
                        >
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.price,
                                    currencyCode: DEFAULT_CURRENCY_CODE
                                }}
                                src={product.image}
                                fill
                                sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}