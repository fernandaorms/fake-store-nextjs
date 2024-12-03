import { Categories } from '@/components/layout/search/categories';
import { FilterList } from '@/components/layout/search/filter';
import { sorting } from '@/lib/constants';
import Wrapper from './wrapper';

export default function SearchLayout({ children }) {
    return (
        <>
            <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white'>
                <div className='capitalize order-first w-full flex-none md:max-w-[125px]'>
                    <Categories />
                </div>

                <div className='order-last min-h-screen w-full md:order-none'>
                    <Wrapper>
                        {children}
                    </Wrapper>
                </div>

                <div className='capitalize order-none flex-none md:order-last md:w-[125px]'>
                    <FilterList list={sorting} title='Sort by' />
                </div>
            </div>
        </>
    )
}