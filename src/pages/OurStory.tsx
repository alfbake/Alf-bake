import { Helmet } from "react-helmet-async";
import founder from "@/assets/founder.jpg";
import chef from "@/assets/chef.jpg";
import exterior from "@/assets/exterior.jpg";
import { Link } from "react-router-dom";

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

      <section className="container py-12">
        <h2 className="font-heading text-3xl mb-6">About the Culinary Composer</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={chef} alt="ALFBAKE chef portrait" className="rounded-xl border border-border/60 shadow-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our head chef orchestrates flavors with precision and heart, crafting menus that celebrate seasonality and local produce, while honoring classic techniques.
          </p>
        </div>
        <div className="mt-8">
          <Link to="/alfbake/contact-us" className="underline hover:text-accent">Get in touch</Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
