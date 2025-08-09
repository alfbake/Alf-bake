import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo-emblem.png";

const slides = [
  { type: "video", src: "/media/hero.mp4", poster: hero1 },
  { type: "image", src: hero2 },
  { type: "image", src: hero3 },
];

const HeroCarousel = () => {
  return (
    <section className="relative">
      <div className="relative h-[68vh] w-full overflow-hidden rounded-b-2xl border-b border-border/60">
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {slides.map((s, i) => (
              <CarouselItem key={i} className="h-[68vh]">
                <div className="relative h-full w-full">
                  {s.type === "video" ? (
                    <video className="h-full w-full object-cover" src={(s as any).src} poster={(s as any).poster} autoPlay muted loop playsInline />
                  ) : (
                    <img src={(s as any).src} alt={`ALFBAKE ambience ${i}`} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-accent/40" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-accent/40" />
        </Carousel>

        {/* Centered emblem */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <img src={logo} alt="ALFBAKE emblem" className="h-24 w-24 drop-shadow-[0_0_30px_hsl(var(--gold)/0.35)]" />
            <h1 className="font-heading text-4xl md:text-6xl tracking-[0.25em] uppercase">
              ALFBAKE
            </h1>
            <p className="font-script text-accent text-2xl md:text-3xl">Luxury. Heritage. Authenticity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
