import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import { getProductsByCategory } from '@/api';

export default async function Page({ params, searchParams }) {
    const paramsLoad = await params;
    const searchParamsLoad = await searchParams;

    const { slug } = paramsLoad || null;
    const { sort } = searchParamsLoad || null;
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = await getProductsByCategory({ sortKey: sort, category: slug })

    return (
        <section>
            {products.length === 0 ? (
                <p className='py-3 text-lg'>{`No products found in this collection`}</p>
            ) : (
                <Grid className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <ProductGridItems products={products} />
                </Grid>
            )}
        </section>
    );
}
