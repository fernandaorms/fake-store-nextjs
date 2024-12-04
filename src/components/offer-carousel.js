'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Importação correta do CSS do Swiper

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
        <div className="py-8">
            <Swiper
                spaceBetween={16}  // Espaçamento entre os slides
                slidesPerView="auto"  // Mostra vários slides dependendo da largura da tela
                navigation={{
                    nextEl: '#slider-button-right',  // Botão de navegação para a direita
                    prevEl: '#slider-button-left',  // Botão de navegação para a esquerda
                }}
                loop={true}  // Habilita a navegação infinita
            >
                {offers.map((offer) => (
                    <SwiperSlide key={offer.id} className="flex-none w-full min-w-[300px] sm:w-1/2 lg:w-1/4">
                        <div
                            className="relative h-96 bg-cover bg-center rounded-2xl"
                            style={{ backgroundImage: `url(${offer.image})` }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-2xl">
                                <h3 className="text-white text-lg font-semibold">{offer.title}</h3>
                                <p className="text-white text-xl font-bold">${offer.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center items-center gap-8 mt-4">
                <button
                    id="slider-button-left"
                    className="swiper-button-prev p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M10 12L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    id="slider-button-right"
                    className="swiper-button-next p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M6 4L10 8L6 12"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
