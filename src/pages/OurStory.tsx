import { Helmet } from "react-helmet-async";
// Images are now served from ImageKit for better performance
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGEKIT_URLS } from "@/utils/constants";
import OurStoryAnimations, {
  ourStoryAnimationClasses,
} from "@/components/ui/OurStoryAnimations";
import GlobalAnimations, {
  globalAnimationClasses,
} from "@/components/ui/GlobalAnimations";

const OurStory = () => {
  return (
    <GlobalAnimations>
      <OurStoryAnimations>
        <div className="space-y-32">
          <Helmet>
            <title>Our Story | ALF BAKE</title>
            <meta
              name="description"
              content="Discover ALF BAKE's heritage and culinary excellence. Meet our founder and chef, and explore the story behind our premium resto cafe."
            />
            <link rel="canonical" href="/alfbake/ourstory" />
          </Helmet>

          {/* Big Red Header */}
          <section
            className="relative py-16 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${IMAGEKIT_URLS.backgrounds.mainBanner})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-red-800/15 to-red-900/20 blur-3xl"></div>
            <div className="relative z-10 container text-center">
              <h1
                className={`mt-8 md:mt-16 text-black font-roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] transition-all duration-1000 ease-out ${ourStoryAnimationClasses.headerSlideDown}`}
              >
                OUR STORY
              </h1>
              <p
                className={`text-black font-script text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${ourStoryAnimationClasses.headerFadeIn}`}
                style={{ animationDelay: "300ms" }}
              >
                Crafting Flavors, Creating Memories
              </p>
            </div>
          </section>

          {/* Our Heritage Section */}
          <section className="bg-black py-24 relative">
            {/* Light Red Blur Effect throughout content section */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-800/8 via-red-700/6 to-red-600/10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-800/5 via-transparent to-red-700/8"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-800/10 via-red-700/8 to-red-600/12 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-red-700/8 via-red-600/6 to-red-800/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 container">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className="md:col-span-2">
                  <div
                    className={`relative overflow-hidden rounded-2xl ${ourStoryAnimationClasses.imageFloat}`}
                  >
                    <img
                      src={IMAGEKIT_URLS.logo}
                      alt="ALF BAKE logo"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <div className="md:col-span-3 space-y-8">
                  <div
                    className={`space-y-4 ${ourStoryAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "0.2s" }}
                  >
                    <h2
                      className={`font-roboto font-bold text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-[0.05em] md:tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                    >
                      Our Heritage
                    </h2>
                    <p
                      className={`font-script text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600 text-center md:text-left ${globalAnimationClasses.headingImmediate}`}
                      style={{ animationDelay: "0.4s" }}
                    >
                      Where tradition meets bold new flavors
                    </p>
                  </div>

                  <div
                    className={`space-y-6 ${ourStoryAnimationClasses.fadeInUp}`}
                    style={{ animationDelay: "0.6s" }}
                  >
                    <p
                      className={`text-sm sm:text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      style={{ animationDelay: "0.8s" }}
                    >
                      "We wanted to bring Middle Eastern food in a way that had
                      never been presented before." — these words from our
                      founder capture the soul of ALF BAKE.
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      style={{ animationDelay: "1.0s" }}
                    >
                      While ALF BAKE is a new venture set to open its doors in
                      2025, its story begins much earlier. Our roots run deep in
                      the kitchens of Afain Restaurant in Kerala's Koduvally — a
                      name celebrated for its authentic flavors, heartfelt
                      service, and commitment to quality. Over the years, Afain
                      has become a trusted culinary destination, earning the
                      love of countless guests.
                    </p>
                    <p
                      className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      style={{ animationDelay: "1.2s" }}
                    >
                      Now, Bangaluru House proudly presents ALF BAKE in Bahrain,
                      carrying forward this legacy while introducing a fresh
                      chapter. Our mission is simple yet bold — to honor the
                      authenticity of Middle Eastern cuisine while reimagining
                      it for a new generation of food lovers. From the fragrant
                      spices of tradition to the creativity of modern
                      gastronomy, every dish is crafted to surprise, delight,
                      and tell a story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legacy Section */}
          <section className="bg-black py-24 relative">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.ourStory.backgroundTexture}
                alt="Background texture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>
            <div className="relative z-10 container">
              <div className="max-w-6xl mx-auto text-center space-y-8">
                <div
                  className={`space-y-4 ${ourStoryAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    Rooted in Legacy
                  </h2>
                  <p
                    className={`font-script text-2xl md:text-3xl text-red-600 ${globalAnimationClasses.headingImmediate}`}
                    style={{ animationDelay: "0.4s" }}
                  >
                    From Kerala's heritage kitchens to Bahrain's vibrant dining
                    scene
                  </p>
                </div>

                <div
                  className={`space-y-6 ${ourStoryAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <p
                    className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                    style={{ animationDelay: "0.8s" }}
                  >
                    ALF BAKE proudly stands as a part of a distinguished
                    culinary family. Its roots trace back to Afain Restaurant, a
                    beloved culinary landmark in Kerala, India, renowned for its
                    authentic flavors and heartfelt service.
                  </p>
                  <p
                    className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                    style={{ animationDelay: "1.0s" }}
                  >
                    Expanding this legacy, ALF BAKE in Bahrain is presented by
                    Bangaluru House, bringing decades of expertise, hospitality,
                    and a shared passion for exceptional food to the heart of
                    the Middle East.
                  </p>
                  <p
                    className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                    style={{ animationDelay: "1.2s" }}
                  >
                    Together, we unite cultures, flavors, and traditions,
                    offering guests an experience that feels both warmly
                    familiar and excitingly new.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Culinary Composer Section - TEMPORARILY COMMENTED OUT */}
          {/* 
          <section className="relative w-full min-h-screen md:min-h-screen lg:min-h-screen py-18 md:py-32 lg:py-40 md:pb-48 lg:pb-64">
            <div className="absolute inset-0">
              <img
                src={IMAGEKIT_URLS.ourStory.backgroundTexture}
                alt="Textured dark background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            <div className="relative min-h-screen md:min-h-screen lg:min-h-screen flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 py-20 md:py-20 lg:py-20">
                <div
                  className={`text-center mb-12 ${ourStoryAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
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
                          loading="lazy"
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
                          loading="lazy"
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
              </div>
            </div>
          </section>
          */}
        </div>
      </OurStoryAnimations>
    </GlobalAnimations>
  );
};

export default OurStory;
