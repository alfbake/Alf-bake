import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/hero/HeroCarousel";
import MenuGrid from "@/components/menu/MenuGrid";
import SpecialsHover from "@/components/specials/SpecialsHover";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import steak from "@/assets/food-steak.jpg";
import pasta from "@/assets/food-pasta.jpg";
import burger from "@/assets/food-burger.jpg";
import dessert from "@/assets/food-dessert.jpg";
import coffee from "@/assets/food-coffee.jpg";
import salad from "@/assets/food-salad.jpg";

const menuItems = [
  { id: "1", name: "Heritage Steak", price: "₹899", image: steak },
  { id: "2", name: "Truffle Pasta", price: "₹699", image: pasta },
  { id: "3", name: "Signature Burger", price: "₹499", image: burger },
  { id: "4", name: "Lava Dessert", price: "₹399", image: dessert },
  { id: "5", name: "Artisan Coffee", price: "₹249", image: coffee },
  { id: "6", name: "Heirloom Salad", price: "₹349", image: salad },
];

const specials = [
  { id: "s1", title: "Chef's Tasting Plate", image: steak },
  { id: "s2", title: "Truffle Indulgence", image: pasta },
  { id: "s3", title: "Molten Chocolate", image: dessert },
];

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>ALFBAKE Resto Cafe | Luxury Dining & Heritage</title>
        <meta name="description" content="Experience ALFBAKE: a premium resto cafe with a rich story. Explore our menu, specials, and authentic heritage." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero */}
      <HeroCarousel />

      {/* Authenticity / Our Story CTA */}
      <section className="container py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Authenticity you can taste</h2>
          <p className="text-muted-foreground mb-6">From the first sizzle to the final garnish, we honor tradition with modern technique.</p>
          <Link to="/alfbake/ourstory" className="inline-flex items-center gap-2 underline hover:text-accent">Our Story →</Link>
        </div>
        <img src={hero1} alt="Authentic ambience at ALFBAKE" className="rounded-xl border border-border/60 shadow-elegant" />
      </section>

      {/* Chosen amount highly demanded rest cafe */}
      <section className="relative">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <img src={hero1} alt="Highly demanded resto cafe" className="h-[360px] md:h-screen w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-heading text-3xl md:text-4xl text-center tracking-wide">Choosen amount highly demanded rest cafe</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <MenuGrid items={menuItems} />

      {/* Legacy banner linking to story */}
      <section className="container py-16">
        <div className="relative overflow-hidden rounded-2xl border border-border/60">
          <img src={coffee} alt="Legacy and features of ALFBAKE" className="h-[360px] md:h-screen w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <p className="font-script text-accent text-3xl">A legacy of excellence</p>
            <Link to="/alfbake/ourstory" className="underline hover:text-accent">Discover our story</Link>
          </div>
        </div>
      </section>

      {/* Specials */}
      <SpecialsHover items={specials} />
    </div>
  );
};

export default Index;
