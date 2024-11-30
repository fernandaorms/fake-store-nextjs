import Link from 'next/link';
import { GridTileImage } from './tile';
import { getProducts } from '@/api';

const { DEFAULT_CURRENCY_CODE } = process.env;

function ThreeItemGridItem({ item, size, priority }) {
    const containerClasses =
        size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1';

    const sizesAttribute =
        size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw';

    const labelPosition = size === 'full' ? 'center' : 'bottom';

    return (
        <div className={containerClasses}>
            <Link
                className='relative block aspect-square h-full w-full'
                href={`/product/${item.id}`}
                prefetch={true}
            >
                <GridTileImage
                    src={item.image}
                    fill
                    sizes={sizesAttribute}
                    priority={priority}
                    alt={item.title}
                    label={{
                        position: labelPosition,
                        title: item.title,
                        amount: item.price,
                        currencyCode: DEFAULT_CURRENCY_CODE
                    }}
                />
            </Link>
        </div>
    );
}

export async function ThreeItemGrid() {
    const products = await getProducts();

    if (!products[0] || !products[1] || !products[2]) return null;

    const [firstProduct, secondProduct, thirdProduct] = products;

    return (
        <section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
            <ThreeItemGridItem size='full' item={firstProduct} priority={true} />
            <ThreeItemGridItem size='half' item={secondProduct} priority={true} />
            <ThreeItemGridItem size='half' item={thirdProduct} />
        </section>
    );
}

export default ThreeItemGrid;
