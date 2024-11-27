import LogoIcon from '@/components/icons/logo';

export default function LogoSquare({ size }) {
    // Classes dinâmicas baseadas na prop `size`
    const containerClasses = [
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        size === 'sm' ? 'h-[30px] w-[30px] rounded-lg' : 'h-[40px] w-[40px] rounded-xl',
    ].join(' ');

    const iconClasses = size === 'sm' ? 'h-[10px] w-[10px]' : 'h-[16px] w-[16px]';

    return (
        <div className={containerClasses}>
            <LogoIcon className={iconClasses} />
        </div>
    );
}