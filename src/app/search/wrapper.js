'use client';

import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';

export default function Wrapper({ children }) {
    const searchParams = useSearchParams();

    return <Fragment key={searchParams.get('q')}>{children}</Fragment>;
}