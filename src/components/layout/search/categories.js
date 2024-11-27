import { Suspense } from 'react';
import { getCategories } from '@/api';
import { FilterList } from './filter';

async function CategoriesList() {
    const categories = await getCategories();

    const list = [
        {
            title: 'All',
            slug: '',
            path: '/search',
        },
        ...categories.map((category) => ({
            title: category,
            slug: category,
            path: `/search/${category}`,
        }))
    ]

    return <FilterList list={list} title='Categories' />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export async function Categories() {
    return (
        <Suspense
            fallback={
                <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
                    <div className={`${skeleton} ${activeAndTitles}`} />
                    <div className={`${skeleton} ${activeAndTitles}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                    <div className={`${skeleton} ${items}`} />
                </div>
            }
        >
            <CategoriesList />
        </Suspense>
    );
}