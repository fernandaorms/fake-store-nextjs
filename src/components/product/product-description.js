import { PlusIcon } from '@heroicons/react/24/outline';

import Price from '@/components/price';
import Prose from '@/components/prose';

const { DEFAULT_CURRENCY_CODE } = process.env;

export function ProductDescription({ product }) {
    const buttonClasses = 'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';

    return (
        <>
            <div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
                <h1 className='mb-2 text-5xl font-medium'>
                    {product.title}
                </h1>

                <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
                    <Price
                        amount={product.price}
                        currencyCode={DEFAULT_CURRENCY_CODE}
                    />
                </div>
            </div>

            {product.description ? (
                <Prose
                    className='mb-6 text-sm leading-tight dark:text-white/[60%]'
                    html={product.description}
                />
            ) : null}

            <button
                aria-label='Add to cart'
                className={`${buttonClasses} hover:opacity-90`}
            >
                <div className='absolute left-0 ml-4'>
                    <PlusIcon className='h-5' />
                </div>
                Add To Cart
            </button>
        </>
    )
}