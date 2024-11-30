import Image from 'next/image';
import Label from '../label';

export function GridTileImage({ isInteractive = true, active, label, ...props }) {
    const containerClasses = `
    group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black
    ${label ? 'relative' : ''}
    ${active ? 'border-2 border-blue-600' : 'border-neutral-200 dark:border-neutral-800'}
    `;

    const imageClasses = `
    relative h-full w-full object-contain
    ${isInteractive ? 'transition duration-300 ease-in-out group-hover:scale-105' : ''}
    `;

    return (
        <div className={containerClasses.trim()}>
            {props.src ? (
                <Image
                    className={imageClasses.trim()}
                    {...props}
                />
            ) : null}
            {label ? (
                <Label
                    title={label.title}
                    amount={label.amount}
                    currencyCode={label.currencyCode}
                    position={label.position}
                />
            ) : null}
        </div>
    );
}
