import Link from 'next/link';

import Grid from '@/components/grid';
import { GridTileImage } from '@/components/grid/tile';

const { DEFAULT_CURRENCY_CODE } = process.env;

export default function ProductGridItems({ products }) {
    return (
        <>
            {products.map((product) => (
                <Grid.Item key={product.id} className='animate-fadeIn'>
                    <Link href={`/product/${product.id}`} className='relative inline-block h-full w-full'>
                        <GridTileImage
                            alt={product.title}
                            label={{
                                title: product.title,
                                amount: product.price,
                                currencyCode: DEFAULT_CURRENCY_CODE
                            }}
                            src={product.image}
                            fill
                            sizes='(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}