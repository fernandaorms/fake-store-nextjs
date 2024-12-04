'use client';

import { useEffect, useState } from 'react';
import { Carousel, Typography, Button } from '@material-tailwind/react';

async function fetchOffers() {
    const response = await fetch('/api/offers');
    return response.json();
}

export default function OfferCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetchOffers().then((data) => setOffers(data.offers || []));
    }, []);

    if (!offers.length) return null;

    return (
        <Carousel className='rounded-xl overflow-x-auto'>
            {offers.map((offer) => (
                <div key={offer.id} className='relative w-full'>
                    <img
                        src={offer.image}
                        alt={offer.title}
                        className='h-96 w-full object-cover'
                    />

                    <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
                        <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
                            <Typography
                                variant='h1'
                                color='white'
                                className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                            >
                                {offer.title}
                            </Typography>
                            <Typography
                                variant='h2'
                                color='white'
                                className='mb-12 opacity-80'
                            >
                                {offer.price.toFixed(2)}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
