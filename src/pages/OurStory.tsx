import { Helmet } from "react-helmet-async";
import founder from "@/assets/founder.jpg";
import chef from "@/assets/chef.jpg";
import exterior from "@/assets/exterior.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <div>
      <Helmet>
        <title>Our Story | ALFBAKE Resto Cafe</title>
        <meta name="description" content="Discover ALFBAKE's heritage and culinary excellence. Meet our founder and chef, and explore the story behind our premium resto cafe." />
        <link rel="canonical" href="/alfbake/ourstory" />
      </Helmet>

      <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
        <img src={founder} alt="ALFBAKE founder portrait" className="rounded-xl border border-border/60 shadow-elegant" />
        <div>
          <h1 className="font-heading text-4xl mb-4">Our Story</h1>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a passion for culinary heritage, ALFBAKE blends tradition and modern sophistication. Our story is one of authenticity, craftsmanship, and a relentless pursuit of excellence.
          </p>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-3xl mb-4">A Space that Inspires</h2>
          <p className="text-muted-foreground leading-relaxed">
            Step into a moody, warm atmosphere where every detail is designed for comfort and delight. From ingredients to interiors, our commitment to quality is uncompromising.
          </p>
        </div>
        <img src={exterior} alt="ALFBAKE cafe exterior" className="order-1 md:order-2 rounded-xl border border-border/60 shadow-elegant" />
      </section>

      <section className="relative w-full" aria-labelledby="culinary-composer">
        {/* Background image + dark overlay */}
        <div className="absolute inset-0 -z-10">
          <img src="/lovable-uploads/e2b3d303-abbd-4747-854a-7ff864a60f4b.png" alt="Textured dark background" className="h-full w-full object-cover blur-[2px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="container py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
          {/* Left: Chef portrait with decorative shape */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_30%,hsl(var(--accent)/0.35),transparent_70%)]" />
            <div className="rounded-[2rem] overflow-hidden border border-border/60 shadow-elegant">
              <img src={chef} alt="ALFBAKE culinary composer portrait" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 id="culinary-composer" className="font-heading text-transparent [-webkit-text-stroke:1.5px_hsl(var(--foreground))] uppercase tracking-widest text-3xl md:text-5xl mb-4">Our Culinary Composer</h2>
            <p className="text-lg font-semibold mb-1 text-[hsl(var(--gold))]">Sumesh Govind</p>
            <p className="text-muted-foreground mb-6">CEO &amp; Culinary Composer</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>is the present proprietor of Paragon Group of Restaurants and continues the tradition set by his Grandfather Mr. P. M. Govindan who founded Paragon Restaurant, after he retired from the Railways, and his son Mr. P. M. Vaisan. Though Mr Govindan was a government official, his passion for food that set him apart.</p>
              <p>As the CEO of Paragon Group of Restaurants, he has taken the group to new heights and introduced the world to many new flavours. His artistic approach, where he involves himself in every process, has made him a wizard at growing the business and a mad, flavour-genius in the kitchen.</p>
            </div>
            <div className="mt-8">
              <Link to="#composer-details" className="inline-flex items-center gap-2">
                <Button variant="outline" className="rounded-full px-6">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
