import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/hero/HeroCarousel";
import MenuGrid from "@/components/menu/MenuGrid";
import SpecialsHover from "@/components/specials/SpecialsHover";
import { Link } from "react-router-dom";
import hero1 from "@/assets/chickenfry.jpeg";
import steak from "@/assets/food-steak.jpg";
import hero2 from "@/assets/burger2.png";
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
    <div className="space-y-32">
      <Helmet>
        <title>ALFBAKE Resto Cafe | Luxury Dining & Heritage</title>
        <meta
          name="description"
          content="Experience ALFBAKE: a premium resto cafe with a rich story. Explore our menu, specials, and authentic heritage."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero */}
      <HeroCarousel />

      {/* Authenticity / Our Story CTA */}
      <section className="bg-black py-18">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image - 40% of space */}
            <div className="md:col-span-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={hero1}
                  alt="Authentic ambience at ALFBAKE"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Text content - 60% of space */}
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <h2 className="font-roboto font-bold text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em]">
                  About
                </h2>
                <h2 className="font-roboto font-bold text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em]">
                  Alf-baik
                </h2>
                <p className="font-script text-2xl md:text-3xl text-gold text-center md:text-left">
                  Decades of Delivering Delights
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                  From the first ̰ˇ sizzle to the final garnish, we honor
                  tradition with modern technique. Established in 1939, ALFBAKE
                  has been crafting innovative fusions of multinational cuisines
                  while preserving the authentic flavors that define our
                  heritage.
                </p>
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                  Our commitment to excellence spans generations, bringing you
                  the perfect blend of time-honored recipes and contemporary
                  culinary artistry.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/alfbake/ourstory"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-medium text-lg underline transition-colors"
                >
                  Our Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full width image section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src={hero2}
            alt="Highly demanded resto cafe"
            className=" object-contain md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-end">
          <div className="max-w-2xl mr-8 lg:mr-16 xl:mr-24 space-y-8 text-center">
            <h2 className="font-roboto font-bold text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em]">
              A Journey of Bold Flavor
            </h2>

            <div className="space-y-4">
              <p className="font-mozilla text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed font-light">
                From the culinary roots of Alfain Restaurant in Calicut, Kerala,
                comes a fresh chapter in Bahrain’s dining scene — Alfbake. Born
                from a vision to present Middle Eastern food in a way never
                experienced before, Alfbake pairs time-honored recipes with
                creative craftsmanship, offering an experience that is as warm
                and welcoming as it is exciting and new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-18">
        <div className="container">
          <h2 className="font-graphik [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#fff] text-6xl md:text-8xl lg:text-9xl xl:text-[120px] leading-[120px] text-center mb-16 tracking-[0.1em] font-normal">
            OUR MENU
          </h2>
          <MenuGrid items={menuItems} />
        </div>
      </section>

      {/* Legacy banner linking to story */}
      <section className="py-18">
        <div className="container">
          <h2 className="font-graphik [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#fff] text-6xl md:text-8xl lg:text-9xl xl:text-[120px] leading-[120px] text-center mb-16 tracking-[0.1em] font-normal">
            A LEGACY OF EXCELLENCE
          </h2>
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <img
              src={coffee}
              alt="Legacy and features of ALFBAKE"
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <p className="font-script text-accent text-3xl md:text-4xl">
                A legacy of excellence
              </p>
              <Link
                to="/alfbake/ourstory"
                className="underline hover:text-accent text-lg font-medium"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-18">
        <div className="container">
          <h2 className="font-culinary [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#fff] text-6xl md:text-8xl lg:text-9xl xl:text-[120px] leading-[120px] text-center mb-16 tracking-[0.1em] font-normal">
            CHEF'S SPECIALS
          </h2>
          <SpecialsHover items={specials} />
        </div>
      </section>
    </div>
  );
};

export default Index;
