'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { createUrl } from '@/lib/utils';

function PathFilterItem({ item }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const active = pathname === item.path;
    const newParams = new URLSearchParams(searchParams.toString());
    const DynamicTag = active ? 'p' : Link;

    newParams.delete('q');

    return (
        <li className='mt-2 flex text-black dark:text-white'>
            <DynamicTag
                href={createUrl(item.path, newParams)}
                className={`w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 ${active ? 'underline underline-offset-4' : ''
                    }`}
            >
                {item.title}
            </DynamicTag>
        </li>
    );
}

function SortFilterItem({ item }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const active = searchParams.get('sort') === item.slug;
    const q = searchParams.get('q');
    const href = createUrl(
        pathname,
        new URLSearchParams({
            ...(q && { q }),
            ...(item.slug && item.slug.length && { sort: item.slug }),
        })
    );
    const DynamicTag = active ? 'p' : Link;

    return (
        <li className='mt-2 flex text-sm text-black dark:text-white'>
            <DynamicTag
                prefetch={!active ? false : undefined}
                href={href}
                className={`w-full hover:underline hover:underline-offset-4 ${active ? 'underline underline-offset-4' : ''
                    }`}
            >
                {item.title}
            </DynamicTag>
        </li>
    );
}

export function FilterItem({ item }) {
    return 'path' in item ? (
        <PathFilterItem item={item} />
    ) : (
        <SortFilterItem item={item} />
    );
}
