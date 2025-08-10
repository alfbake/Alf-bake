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

const slides = [
  {
    type: "video",
    src: "/media/hero.mp4",
    poster: hero1,
    heading: "Awaken Your Senses",
    sub: "Signature brews & baked artistry",
  },
  {
    type: "image",
    src: foodSteak,
    heading: "Fire & Flavor",
    sub: "Prime cuts seared to perfection",
  },
  {
    type: "image",
    src: foodPasta,
    heading: "Handcrafted Comfort",
    sub: "Silky pastas, rich sauces",
  },
  {
    type: "image",
    src: foodDessert,
    heading: "Sweet Finish",
    sub: "Decadent desserts, artfully plated",
  },
  {
    type: "image",
    src: foodSalad,
    heading: "Garden Fresh",
    sub: "Vibrant, seasonal produce",
  },
  {
    type: "image",
    src: foodBurger,
    heading: "Stacked & Savory",
    sub: "Gourmet burgers, towering taste",
  },
  {
    type: "image",
    src: foodCoffee,
    heading: "Pouring Perfection",
    sub: "Third-wave coffee rituals",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative -mt-32 pt-32">
      <div className="relative h-screen w-full overflow-hidden">
        <Carousel
          className="h-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4500, stopOnMouseEnter: true })]}
        >
          <CarouselContent className="h-full">
            {slides.map((s, i) => (
              <CarouselItem key={i} className="h-screen">
                <div className="relative h-full w-full">
                  {s.type === "video" ? (
                    <video
                      className="h-full w-full object-cover"
                      src={(s as any).src}
                      poster={(s as any).poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={(s as any).src}
                      alt={`ALFBAKE ambience ${i}`}
                      className="h-full w-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                  {/* Slide caption */}
                  <div className="absolute inset-0 flex items-center p-6 md:p-10 lg:p-16">
                    <div className="max-w-4xl space-y-6 animate-fade-in">
                      <h2 className="font-poppins  uppercase tracking-[0.1em] font-bold  text-3xl md:text-6xl lg:text-8xl leading-tight drop-shadow-2xl shadow-black/50">
                        {(s as any).heading}
                      </h2>
                      <p className="font-poppins md:text-xl lg:text-2xl text-foreground/90 font-medium drop-shadow-lg shadow-black/50">
                        {(s as any).sub}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-accent/40" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-accent/40" />
        </Carousel>

        {/* Centered emblem */}
      </div>
    </section>
  );
};

export default HeroCarousel;
