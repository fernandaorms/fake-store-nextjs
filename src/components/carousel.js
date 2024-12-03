import Link from 'next/link';
import { getProducts } from '@/api';
import { GridTileImage } from './grid/tile';

const { DEFAULT_CURRENCY_CODE } = process.env;

export async function Carousel() {
    const products = await getProducts({});

    if (!products?.length) return null;

    // Duplicando produtos para garantir que o carrossel tenha itens suficientes.
    const carouselProducts = [...products, ...products, ...products];

    return (
        <div className='w-full overflow-x-auto pb-6 pt-1'>
            <ul className='flex animate-carousel gap-4'>
                {carouselProducts.map((product, i) => (
                    <li
                        key={`${product.id}${i}`}
                        className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'
                    >
                        <Link href={`/product/${product.id}`} className='relative h-full w-full'>
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.price,
                                    currencyCode: DEFAULT_CURRENCY_CODE
                                }}
                                src={product.image}
                                fill
                                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
