import { ThreeItemGrid } from "@/components/grid/three-items";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/layout/footer";
import OfferCarousel from "@/components/offer-carousel";

export default function Home() {
    return (
        <>
            <div className='mb-10'>
                <OfferCarousel />
            </div>
            
            <ThreeItemGrid />
            <Carousel />
            <Footer />
        </>
    );
}
