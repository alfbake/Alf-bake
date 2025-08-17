import { Helmet } from "react-helmet-async";
// Images are now served from public folder for better performance
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            style={{ backgroundImage: "url(/mainbanner.png)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-red-800/15 to-red-900/20 blur-3xl"></div>
            <div className="relative z-10 container text-center">
              <h1
                className={`mt-8 text-black font-roboto font-bold text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] ${ourStoryAnimationClasses.headerSlideDown}`}
              >
                OUR STORY
              </h1>
              <p
                className={`text-black font-script text-2xl md:text-3xl font-bold ${ourStoryAnimationClasses.headerFadeIn}`}
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
              <div className="grid md:grid-cols-5 gap-12 items-center">
                {/* Image */}
                <div className="md:col-span-2">
                  <div
                    className={`relative overflow-hidden rounded-2xl ${ourStoryAnimationClasses.imageFloat}`}
                  >
                    <img
                      src="/logo/logo.png"
                      alt="ALF BAKE logo"
                      className="w-full h-[600px] object-contain"
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
                      className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                    >
                      Our Heritage
                    </h2>
                    <p
                      className={`font-script text-2xl md:text-3xl text-red-600 text-center md:text-left ${globalAnimationClasses.headingImmediate}`}
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
                      className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                      style={{ animationDelay: "0.8s" }}
                    >
                      "We wanted to bring Middle Eastern food in a way that had
                      never been presented before." — these words from our
                      founder capture the soul of ALF BAKE.
                    </p>
                    <p
                      className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
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
                src="/lovable-uploads/e2b3d303-abbd-4747-854a-7ff864a60f4b.png"
                alt="Background texture"
                className="w-full h-full object-cover"
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
                    className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
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

          {/* Culinary Composer Section */}
          <section className="relative w-full min-h-screen md:h-screen py-18">
            <div className="absolute inset-0">
              <img
                src="/lovable-uploads/e2b3d303-abbd-4747-854a-7ff864a60f4b.png"
                alt="Textured dark background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            <div className="relative min-h-screen md:h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 py-20 md:py-0">
                <div
                  className={`text-center mb-12 ${ourStoryAnimationClasses.fadeInUp}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <h2
                    className={`font-roboto font-bold text-gray-300 text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] ${globalAnimationClasses.sectionHeaderGlow}`}
                  >
                    OUR CULINERY COMPOSER
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 items-center">
                  {/* Founder image */}
                  <div
                    className={`flex justify-center ${ourStoryAnimationClasses.fadeInLeft}`}
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="relative">
                      <img
                        src="/founder2.png"
                        alt="Muhthar Palathumannil - Founder"
                        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-gray-500/30 shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 rounded-2xl border-4 border-gray-500/20 shadow-inner" />
                    </div>
                  </div>

                  {/* Founder description */}
                  <div
                    className={`text-center md:text-left space-y-8 ${ourStoryAnimationClasses.fadeInRight}`}
                    style={{ animationDelay: "0.8s" }}
                  >
                    <div
                      className={`space-y-4 ${ourStoryAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "1.0s" }}
                    >
                      <p
                        className={`text-xl md:text-4xl font-script text-red-600 ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.2s" }}
                      >
                        Muhthar Palathumannil
                      </p>
                      <p
                        className={`text-lg md:text-xl text-custom-gray-450 [text-shadow:0_0_10px_rgba(239,68,68,0.8)] ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.4s" }}
                      >
                        Founder & Culinary Visionary
                      </p>
                    </div>

                    <div
                      className={`space-y-6 ${ourStoryAnimationClasses.fadeInUp}`}
                      style={{ animationDelay: "1.6s" }}
                    >
                      <p
                        className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "1.8s" }}
                      >
                        Every great restaurant has a story — and ALF BAKE's
                        begins with the journey of Muhthar Palathumannil.
                      </p>
                      <p
                        className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "2.0s" }}
                      >
                        Born and raised in India, Muthhar's earliest memories
                        are filled with the aromas of home-cooked meals and the
                        joy of feeding others. He began cooking for his family
                        at a young age, unknowingly planting the seeds for a
                        lifelong passion.
                      </p>
                      <p
                        className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "2.2s" }}
                      >
                        In 2004, he moved to Saudi Arabia, working various jobs
                        before life led him back to his true calling — food.
                        Defying family expectations, he followed his heart into
                        the restaurant world, where his talent and creativity
                        flourished.
                      </p>
                      <p
                        className={`text-base md:text-lg lg:text-xl text-custom-gray-450 leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                        style={{ animationDelay: "2.4s" }}
                      >
                        ALF BAKE is the result of that journey — a place where
                        his heritage meets his vision, where Middle Eastern
                        flavors are celebrated, reimagined, and served with
                        genuine warmth. It's a reflection not just of his skill,
                        but of his belief that food is an experience to be
                        savored and shared.
                      </p>

                      <div
                        className={`border-l-4 border-red-600 pl-6 py-4 ${ourStoryAnimationClasses.fadeInUp}`}
                        style={{ animationDelay: "2.6s" }}
                      >
                        <p
                          className={`text-base md:text-lg lg:text-xl text-red-600 italic leading-relaxed ${globalAnimationClasses.headingImmediate}`}
                          style={{ animationDelay: "2.8s" }}
                        >
                          "Cooking is an art. The more joy one takes in
                          preparing the food, the tastier it will be on the
                          table."
                        </p>
                        <p
                          className={`text-sm md:text-base text-red-600 italic mt-2 ${globalAnimationClasses.headingImmediate}`}
                          style={{ animationDelay: "3.0s" }}
                        >
                          — Muhthar Palathumannil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </OurStoryAnimations>
    </GlobalAnimations>
  );
};

export default OurStory;
