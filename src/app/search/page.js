
import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/api';

export default async function Page({ searchParams }) {
    const searchParamsLoad = await searchParams;
    const { sort, q: searchValue } = searchParamsLoad || {};
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = await getProducts({sortKey: sort, query: searchValue});
    const resultsText = products.length > 1 ? 'results' : 'result';

    console.log(sort, searchValue, sortKey, reverse);
    return (
        <>
            {searchValue ? (
                <p className='mb-4'>
                    {products.length === 0
                        ? 'There are no products that match '
                        : `Showing ${products.length} ${resultsText} for `}
                    <span className='font-bold'>&quot;{searchValue}&quot;</span>
                </p>
            ) : null}
            {products.length > 0 ? (
                <Grid className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <ProductGridItems products={products} />
                </Grid>
            ) : null}
        </>
    );
}
