'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('q')

    return (
      
      <h1>Search: {search}</h1>
    );
  }
  