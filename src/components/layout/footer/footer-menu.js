'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function FooterMenuItem({ item }) {
    const pathname = usePathname();
    const [active, setActive] = useState(pathname === item.path);

    useEffect(() => {
        setActive(pathname === item.path);
    }, [pathname, item.path]);

    return (
        <li>
            <Link
                href={item.path}
                className={`block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 ${active ? 'text-black dark:text-neutral-300' : ''}`}
            >
                {item.title}
            </Link>
        </li>
    );
}

export default function FooterMenu({ menu }) {
    if (!menu.length) return null;

    return (
        <nav>
            <ul>
                {menu.map((item) => (
                    <FooterMenuItem key={item.title} item={item} />
                ))}
            </ul>
        </nav>
    );
}
