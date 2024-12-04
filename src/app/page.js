import { ThreeItemGrid } from "@/components/grid/three-items";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/layout/footer";
import OfferCarousel from "@/components/offer-carousel";

export default function Home() {
    return (
        <>
            <OfferCarousel />
            <ThreeItemGrid />
            <Carousel />
            <Footer />
        </>
    );
}
