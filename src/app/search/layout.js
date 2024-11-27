export default function SearchLayout({children}) {
    return (
        <>
            <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white'>
                <div className='order-first w-full flex-none md:max-w-[125px]'>
                    Coleções
                </div>

                <div className='order-last min-h-screen w-full md:order-none'>
                    {children}
                </div>
                
                <div className='order-none flex-none md:order-last md:w-[125px]'>
                    Lista de Filtros
                </div>
            </div>
        </>
    )
}