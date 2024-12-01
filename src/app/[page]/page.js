import { notFound } from 'next/navigation';

import { getPage } from '@/api';

export default async function Page(props) {
    const params = await props.params;
    const page = await getPage(params.page);
    
    if (!page) return notFound();

    return (
        <>
            <h1 className='mb-8 text-5xl font-bold'>
                {page.title}
            </h1>
        </>
    )
}