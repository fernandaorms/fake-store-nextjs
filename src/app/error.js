'use client';

import Link from 'next/link';

export default function Error({reset}) {
    return (
        <div className='mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black'>
            <h2 className='text-xl font-bold text-center'>Oh no!</h2>
            <p className='my-2'>
                There was an issue with our storefront. This could be a temporary issue, please navigate to the Homepage.
            </p>
            {/* <button
                className='mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90'
                onClick={() => reset()}
            >
                Try Again
            </button> */}

            <Link
                href='/'
                className='mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-green-600 p-4 tracking-wide text-white hover:opacity-90'
            >
                Go Home
            </Link>
        </div>
    );
}
