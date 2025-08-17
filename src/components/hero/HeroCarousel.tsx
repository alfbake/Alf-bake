import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo-emblem.png";
import foodBurger from "@/assets/food-burger.jpg";
import foodCoffee from "@/assets/food-coffee.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodSteak from "@/assets/food-steak.jpg";
import ClubSandwich from "@/assets/clubSandwichDemo.png";

const slides = [
  {
    type: "image",
    src: foodBurger,
    heading: "Burgers, Reimagined",
    sub: "Stacked high with flavor, crafted our way",
  },
  {
    type: "image",
    src: foodSteak,
    heading: "From the Flames",
    sub: "Grills & kebabs with bold Middle Eastern soul",
  },
  {
    type: "image",
    src: foodDessert,
    heading: "A Sweet Pause",
    sub: "Indulgent bites to complete your feast",
  },
  {
    type: "image",
    src: foodSalad,
    heading: "Fresh Starts",
    sub: "Crisp, colorful sides made to share",
  },

  {
    type: "image",
    src: foodCoffee,
    heading: "Sip the Moment",
    sub: "Refreshing brews & cool blends to revive you",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative -mt-32 pt-32">
      <div className="relative h-screen w-full overflow-hidden">
        <Carousel
          className="h-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true })]}
        >
          <CarouselContent className="h-full">
            {slides.map((s, i) => (
              <CarouselItem key={i} className="h-screen">
                <div className="relative h-full w-full">
                  <img
                    src={(s as any).src}
                    alt={`ALF BAKE ${(s as any).heading}`}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                  {/* Slide caption */}
                  <div className="absolute inset-0 flex items-center p-6 md:p-10 lg:p-16">
                    <div className="max-w-4xl space-y-6 animate-fade-in">
                      <h2 className="font-roboto uppercase tracking-[0.1em] font-bold text-3xl md:text-6xl lg:text-8xl leading-tight drop-shadow-2xl shadow-black/50 text-white">
                        {(s as any).heading}
                      </h2>
                      <p className="font-script md:text-xl lg:text-4xl text-white font-medium drop-shadow-lg shadow-black/20">
                        {(s as any).sub}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="w-12 h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500 text-white hover:text-red-600" />
          </div>
          <div className="absolute right-16 top-1/2 -translate-y-1/2">
            <CarouselNext className="w-12 h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500 text-white hover:text-red-600" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;
