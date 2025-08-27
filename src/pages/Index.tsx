import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/hero/HeroCarousel";
import MenuGrid from "@/components/menu/MenuGrid";
import SpecialsHover from "@/components/specials/SpecialsHover";
import { Link } from "react-router-dom";
import HomeAnimations, {
  homeAnimationClasses,
} from "@/components/ui/HomeAnimations";
import GlobalAnimations, {
  globalAnimationClasses,
} from "@/components/ui/GlobalAnimations";
import { ourStoryAnimationClasses } from "@/components/ui/OurStoryAnimations";
import { IMAGEKIT_URLS } from "@/utils/constants";
// Images are now served from ImageKit for better performance

const menuItems = [
  {
    id: "1",
    name: "Zinger Burger",
    price: "₹319",
    image: IMAGEKIT_URLS.homeMenu.zingerBurger,
    category: "Burgers",
    description:
      "Spicy crispy chicken with hot sauce, fresh lettuce, and our signature mayo",
  },
  {
    id: "2",
    name: "Special Club",
    price: "₹449",
    image: IMAGEKIT_URLS.homeMenu.specialClub,
    category: "Club Sandwiches",
    description:
      "Chef's special club sandwich with premium ingredients and triple-decker bread",
  },
  {
    id: "3",
    name: "ALF BAKE Special Falooda",
    price: "₹199",
    image: IMAGEKIT_URLS.homeMenu.alfbakeSpecialFalooda,
    category: "Desserts",
    description:
      "House special falooda with rose syrup, vermicelli, and vanilla ice cream",
  },
  {
    id: "4",
    name: "Passion Fruit Mojito",
    price: "₹219",
    image: IMAGEKIT_URLS.homeMenu.passionFruitMojito,
    category: "Mojitos",
    description:
      "Tropical passion fruit mojito with fresh mint and a hint of lime",
  },
];

// Home page menu items (only 4 items for 2 rows)
const homeMenuItems = menuItems.slice(0, 4);

// ALF BAKE Specials data
const specials = [
  {
    id: "1",
    name: "ALF BAKE ZINGER BURGER",
    description:
      "A crunchy, golden-fried chicken fillet stacked with fresh lettuce, tangy mayo, and melted cheese, all inside a soft toasted bun. Served with crispy fries for the perfect bite.",
    image: IMAGEKIT_URLS.specials.burgerWithoutBg,
    category: "burger",
  },
  {
    id: "6",
    name: "BROASTED CHICKEN CRUNCH",
    description:
      "Crispy on the outside, juicy on the inside—our broasted chicken is marinated in spices and pressure-fried to perfection. Served with coleslaw, fries, and a touch of ALFBAKE magic.",
    image: IMAGEKIT_URLS.specials.friedChickenWithoutBg,
    category: "chicken",
  },
  {
    id: "2",
    name: "TIKKA & BBQ PLATTER",
    description:
      "Juicy, marinated chicken tikka and smoky BBQ cuts grilled to perfection. Paired with flavorful dips, fresh salad, and warm pita for an authentic Middle Eastern touch.",
    image: IMAGEKIT_URLS.specials.tikkaWithoutBg,
    category: "main",
  },
  {
    id: "3",
    name: "ALF BAKE SIGNATURE GRILLS",
    description:
      "A chef's special mix of tender grilled meats, seasoned with our secret spice blend. Served with roasted vegetables, hummus, and fresh bread straight from the oven.",
    image: IMAGEKIT_URLS.specials.grillChickenWithoutBg,
    category: "grill",
  },
  {
    id: "4",
    name: "CLASSIC SHAWARMA WRAP",
    description:
      "Soft, warm pita wrapped around juicy marinated chicken, fresh veggies, and our creamy garlic sauce. Served with golden fries and pickled sides for a true street-food favorite.",
    image: IMAGEKIT_URLS.heroCarousel.shawarmaWithoutBg,
    category: "wrap",
  },
  {
    id: "5",
    name: "ALF BAKE SPECIAL KARAK TEA",
    description:
      "Rich, creamy Karak brewed with strong black tea, cardamom, and a hint of saffron. A comforting cup that brings the authentic taste of the Middle East to your table.",
    image: "/chaiWIthoutBg.png",
    category: "beverage",
  },
];

const Index = () => {
  return (
    <GlobalAnimations>
      <HomeAnimations>
        <div className="space-y-20 sm:space-y-24 md:space-y-32 overflow-x-hidden">
          <Helmet>
            <title>ALF BAKE | Luxury Dining & Heritage</title>
            <meta
              name="description"
              content="Experience ALF BAKE: a premium resto cafe with a rich story. Explore our menu, specials, and authentic heritage."
            />
            <link rel="canonical" href="/" />
          </Helmet>

          {/* Hero */}
          <HeroCarousel />

          {/* Authenticity / Our Story CTA */}
          <section className="bg-black py-24 relative">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.backgrounds.backgroundTexture}
                alt="Background texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative z-10">
              <div className="container">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  {/* Image - 40% of space */}
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={IMAGEKIT_URLS.other.friedchicken}
                        alt="Authentic ambience at ALF BAKE"
                        className="w-full h-[700px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>

                  {/* Text content - 60% of space */}
                  <div className="md:col-span-3 space-y-8">
                    <div
                      className={`space-y-4 ${homeAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h2
                        className={`font-roboto font-bold text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                      >
                        ABOUT ALF BAKE
                      </h2>
                      <p
                        className={`font-script text-2xl md:text-3xl text-red-600 text-center md:text-left ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "0.4s" }}
                      >
                        Crafting Flavors, Creating Memories
                      </p>
                    </div>

                    <div
                      className={`space-y-6 ${homeAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "0.6s" }}
                    >
                      <p
                        className={`text-roboto md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "0.8s" }}
                      >
                        At ALF BAKE, we bring together decades of culinary
                        heritage and a passion for innovation. Rooted in the
                        kitchens of Afain Restaurant, Kerala, and presented in
                        Bahrain by Bangaluru House, our story blends tradition
                        with creativity.
                      </p>
                      <p
                        className={`text-roboto md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.0s" }}
                      >
                        Our mission is simple — to honor authentic Middle
                        Eastern flavors while reimagining them for today's food
                        lovers. Every dish is crafted with heart, spices, and a
                        touch of modern flair — offering an experience that
                        feels both comfortingly familiar and excitingly new
                      </p>
                    </div>

                    <div
                      className={`text-center mt-12 ${homeAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "1.2s" }}
                    >
                      <Link
                        to="alfbake/ourstory"
                        className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] ${globalAnimationClasses.buttonBreathing}`}
                        style={{ animationDelay: "1.4s" }}
                      >
                        <span className="text-sm uppercase tracking-wider">
                          Our story
                        </span>
                        <div className="relative w-8 h-8 rounded-full border border-gray-600 group-hover:border-red-500 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* A Journey of Bold Flavor Section */}
          <section className="bg-black py-24 relative">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.backgrounds.backgroundTexture}
                alt="Background texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative z-10">
              <div className="container">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  {/* Text content - 60% of space */}
                  <div className="md:col-span-3 space-y-8">
                    <div
                      className={`space-y-4 ${ourStoryAnimationClasses.headingSlideUp}`}
                    >
                      <h2
                        className={`font-roboto font-bold text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                      >
                        A Journey of Bold Flavor
                      </h2>
                      <p
                        className={`font-script text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 text-center md:text-left ${globalAnimationClasses.headingImmediate}`}
                      >
                        From Kerala's Heritage to Bahrain's Future
                      </p>
                    </div>

                    <div
                      className={`space-y-6 ${homeAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <p
                        className={`text-roboto md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.0s" }}
                      >
                        At ALF BAKE, every dish is a celebration of taste,
                        quality, and authenticity. We believe great food starts
                        with great ingredients — fresh, carefully chosen, and
                        prepared with passion. From the first bite to the last,
                        our flavors are bold yet balanced, bringing you the true
                        essence of Middle Eastern cuisine
                      </p>
                      <p
                        className={`text-roboto md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.0s" }}
                      >
                        {" "}
                        Our recipes are crafted to delight every sense — the
                        aroma that welcomes you, the flavors that melt in your
                        mouth, and the satisfaction that lingers long after.
                        With uncompromised standards, warm hospitality, and a
                        touch of creativity
                      </p>
                    </div>
                  </div>

                  {/* Image - 40% of space */}
                  <div
                    className={`md:col-span-2 ${homeAnimationClasses.fadeInRight}`}
                    style={{ animationDelay: "1.2s" }}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={IMAGEKIT_URLS.mobileViewBoldFlavor.image}
                        alt="Highly demanded resto cafe"
                        className="w-full h-[800px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-contain sm:object-cover transform group-hover:scale-105 transition-all duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fresh Service Section */}
          <section className="relative w-full min-h-screen md:min-h-screen lg:h-screen overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.backgrounds.backgroundTexture}
                alt="Textured dark background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative min-h-screen md:min-h-screen lg:h-full flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-6 py-20 md:py-12 lg:py-8 xl:py-0">
                <div
                  className={`text-center mb-16 mt-8 md:mt-8 lg:mt-0 ${homeAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] text-gray-300 mb-6 ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    HERE WE SERVE YOU FRESH
                  </h2>
                  <p
                    className={`font-script text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 mb-8 ${globalAnimationClasses.headingImmediate}`}
                  >
                    At ALF BAKE, every bite is crafted with care using
                    handpicked ingredients and recipes made to please every
                    craving
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Feature 1 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "100ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500">
                      <svg
                        className="w-20 h-20 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      Always Fresh, Never Compromised
                    </h3>
                  </div>

                  {/* Feature 2 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500">
                      <svg
                        className="w-20 h-20 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      No Reuse of Oil — Only Clean Cooking Every Time
                    </h3>
                  </div>

                  {/* Feature 3 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "300ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500 p-2">
                      <svg
                        className="w-16 h-16 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      Soft, House-Baked Buns & Breads
                    </h3>
                  </div>

                  {/* Feature 4 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "400ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500">
                      <svg
                        className="w-20 h-20 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      We Cook on Orders
                    </h3>
                  </div>

                  {/* Feature 5 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "500ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500">
                      <svg
                        className="w-20 h-20 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      Never Frozen Meat
                    </h3>
                  </div>

                  {/* Feature 6 */}
                  <div
                    className={`text-center p-8 rounded-lg group ${homeAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "600ms" }}
                  >
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-transparent border border-gray-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-red-500">
                      <svg
                        className="w-20 h-20 text-custom-grey group-hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`font-script text-xl md:text-2xl lg:text-3xl text-custom-grey mb-2 ${globalAnimationClasses.headingImmediate}`}
                    >
                      100% Halal Meat
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Menu */}
          <section className="py-24 relative">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.backgrounds.backgroundTexture}
                alt="Background texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative z-10">
              <div className="container">
                <div
                  className={`text-center mb-6 ${homeAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto text-center font-bold text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] text-gray-300 mb-6 ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    OUR MENU
                  </h2>
                </div>
                <MenuGrid items={homeMenuItems} />
                <div
                  className={`text-center mt-12 ${homeAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "400ms" }}
                >
                  <Link
                    to="/menu"
                    className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] ${globalAnimationClasses.buttonBreathing}`}
                  >
                    <span className="text-sm uppercase tracking-wider">
                      view full menu
                    </span>
                    <div className="relative w-8 h-8 rounded-full border border-gray-600 group-hover:border-red-500 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ALF BAKE Specials - Redesigned */}
          <section className="bg-black py-20 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-red-700/6 via-red-800/15 to-red-900/20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                  className={`text-center mb-16 ${homeAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto font-bold text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] mb-4 ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    ALF BAKE'S SPECIALS
                  </h2>
                  <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                {/* Menu Items - Vertical Stack */}
                <div className="space-y-16 sm:space-y-20 md:space-y-24">
                  {specials.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex flex-col lg:flex-row ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      } gap-8 sm:gap-10 lg:gap-12 items-center group ${
                        homeAnimationClasses.specialSlideUp
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Image Container */}
                      <div
                        className={`relative flex-shrink-0 ${
                          item.id === "1"
                            ? "w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px]"
                            : item.id === "5"
                            ? "w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px]"
                            : item.id === "2"
                            ? "w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
                            : item.id === "6"
                            ? "w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
                            : "w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
                        }`}
                      >
                        <div className="relative w-full h-full overflow-hidden rounded-2xl transition-all duration-300">
                          <img
                            src={item.image}
                            alt={item.name}
                            className={`w-full h-full object-contain transform group-hover:scale-105 transition-all duration-700 ease-out ${homeAnimationClasses.fadeInScale}`}
                            style={{ animationDelay: `${index * 200 + 100}ms` }}
                            loading="lazy"
                          />
                        </div>

                        {/* Decorative spice/herb elements */}
                        <div className="absolute -top-4 -right-4 w-3 h-3 bg-red-600/60 rounded-full z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-red-600/40 rounded-full z-10"></div>
                        <div className="absolute top-8 -left-8 w-2 h-2 bg-red-600/50 rounded-full z-10"></div>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 flex flex-col items-center justify-center ${
                          index % 2 === 1 ? "lg:items-end" : "lg:items-start"
                        }`}
                      >
                        <div className="w-full max-w-lg lg:w-[91%] text-center">
                          <h3
                            className={`font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-6 sm:mb-8 tracking-wider uppercase ${globalAnimationClasses.headingImmediate}`}
                            style={{ animationDelay: `${index * 200 + 300}ms` }}
                          >
                            {item.name}
                          </h3>

                          <p
                            className={`text-custom-grey leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 font-script ${homeAnimationClasses.fadeInUp}`}
                            style={{ animationDelay: `${index * 200 + 500}ms` }}
                          >
                            {item.description}
                          </p>

                          {/* Decorative Line */}
                          <div className="flex items-center gap-4 justify-center">
                            <div className="w-12 h-px bg-red-600"></div>
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <div className="w-8 h-px bg-red-600/60"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Decorative Text */}
                <div className="text-center mt-20">
                  <Link
                    to="/menu"
                    className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] ${globalAnimationClasses.buttonBreathing}`}
                  >
                    <span className="text-sm uppercase tracking-wider">
                      explore full menu
                    </span>
                    <div className="relative w-8 h-8 rounded-full border border-gray-600 group-hover:border-red-500 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-red-600/30 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-red-600/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-600/20 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-red-600/50 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </section>

          {/* The Heart Behind ALF BAKE Section - TEMPORARILY COMMENTED OUT */}
          {/* 
          <section className="relative w-full min-h-screen py-24">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.backgrounds.backgroundTexture}
                alt="Textured dark background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative min-h-screen flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div
                  className={`text-center mb-12 ${ourStoryAnimationClasses.headingSlideUp}`}
                >
                  <h2
                    className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    OUR CULINARY LEADERS
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div
                      className={`flex justify-center ${ourStoryAnimationClasses.fadeInLeft}`}
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="relative">
                        <img
                          src={IMAGEKIT_URLS.profile.founder1}
                          alt="Muhthar Palathumannil - Founder & Culinary Visionary"
                          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-gray-500/30 shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out"
                          style={{ objectPosition: "top center" }}
                        />
                        <div className="absolute inset-0 rounded-2xl border-4 border-gray-500/20 shadow-inner" />
                      </div>
                    </div>

                    <div
                      className={`text-center space-y-4 ${ourStoryAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <p
                        className={`text-xl md:text-2xl font-script text-red-600 ${globalAnimationClasses.headingImmediate}`}
                      >
                        Muhthar Palathumannil
                      </p>
                      <p
                        className={`text-lg md:text-xl text-custom-gray-450 [text-shadow:0_0_10px_rgba(239,68,68,0.8)] ${globalAnimationClasses.headingImmediate}`}
                      >
                        Founder & Culinary Visionary
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        Born and raised in India, Muhthar's journey began in the
                        kitchens of his childhood home. His passion for food led
                        him from Saudi Arabia to Bahrain, where he brings
                        authentic Middle Eastern flavors to life at ALF BAKE.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        In 2004, he moved to Saudi Arabia, working various jobs
                        before life led him back to his true calling — food.
                        Defying family expectations, he followed his heart into
                        the restaurant world, where his talent and creativity
                        flourished.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        ALF BAKE is the result of that journey — a place where
                        his heritage meets his vision, where Middle Eastern
                        flavors are celebrated, reimagined, and served with
                        genuine warmth. It's a reflection not just of his skill,
                        but of his belief that food is an experience to be
                        savored and shared.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        His dedication to authentic flavors and innovative
                        culinary techniques has made him a respected figure in
                        the restaurant industry, bringing the true essence of
                        Middle Eastern cuisine to every dish he creates.
                      </p>
                      <div
                        className={`border-l-4 border-red-600 pl-4 py-2 ${ourStoryAnimationClasses.fadeInUp}`}
                      >
                        <p
                          className={`text-sm md:text-base text-red-600 italic leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        >
                          "Cooking is an art. The more joy one takes in
                          preparing the food, the tastier it will be on the
                          table."
                        </p>
                        <p
                          className={`text-xs md:text-sm text-red-600 italic mt-1 ${globalAnimationClasses.headingImmediate}`}
                        >
                          — Muhthar Palathumannil
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className={`flex justify-center ${ourStoryAnimationClasses.fadeInRight}`}
                      style={{ animationDelay: "1.0s" }}
                    >
                      <div className="relative">
                        <img
                          src={IMAGEKIT_URLS.profile.founder2}
                          alt="Noushad Noor Mohammed - Founder & Business Visionary"
                          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-gray-500/30 shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out"
                          style={{ objectPosition: "top center" }}
                        />
                        <div className="absolute inset-0 rounded-2xl border-4 border-gray-500/20 shadow-inner" />
                      </div>
                    </div>

                    <div
                      className={`text-center space-y-4 ${ourStoryAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "1.2s" }}
                    >
                      <p
                        className={`text-xl md:text-2xl font-script text-red-600 ${globalAnimationClasses.headingImmediate}`}
                      >
                        Noushad Noor Mohammed
                      </p>
                      <p
                        className={`text-lg md:text-xl text-custom-gray-450 [text-shadow:0_0_10px_rgba(239,68,68,0.8)] ${globalAnimationClasses.headingImmediate}`}
                      >
                        Founder & Business Visionary
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        From Bangalore's jewelry business to restaurant industry
                        expertise, Noushad brings years of entrepreneurial
                        experience. As a founder of Bangalore House, he combines
                        business acumen with a passion for exceptional dining
                        experiences.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        His journey from the jewelry trade to the restaurant
                        industry showcases his adaptability and commitment to
                        excellence. Together with Muhthar, he's bringing ALF
                        BAKE's vision to life in Bahrain.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        With his deep understanding of both traditional business
                        practices and modern restaurant management, Noushad
                        brings a unique perspective to ALF BAKE. His strategic
                        vision ensures that every aspect of the dining
                        experience is carefully crafted for excellence.
                      </p>
                      <p
                        className={`text-sm md:text-base text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      >
                        His commitment to quality service and innovative
                        business solutions has made him a trusted partner in the
                        culinary world, bringing the perfect balance of
                        tradition and innovation to ALF BAKE's success story.
                      </p>
                      <div
                        className={`border-l-4 border-red-600 pl-4 py-2 ${ourStoryAnimationClasses.fadeInUp}`}
                      >
                        <p
                          className={`text-sm md:text-base text-red-600 italic leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        >
                          "Success comes when passion meets opportunity, and
                          we're creating both at ALF BAKE."
                        </p>
                        <p
                          className={`text-xs md:text-sm text-red-600 italic mt-1 ${globalAnimationClasses.headingImmediate}`}
                        >
                          — Noushad Noor Mohammed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-16 text-center ${ourStoryAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "1.6s" }}
                >
                  <Link
                    to="/alfbake/ourstory"
                    className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] ${globalAnimationClasses.buttonBreathing}`}
                  >
                    <span className="text-sm uppercase tracking-wider">
                      Read More
                    </span>
                    <div className="relative w-8 h-8 rounded-full border border-gray-600 group-hover:border-red-500 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          */}
        </div>
      </HomeAnimations>
    </GlobalAnimations>
  );
};

export default Index;
