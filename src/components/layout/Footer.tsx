import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="container grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
        <section aria-labelledby="order-on">
          <h3 id="order-on" className="font-heading text-lg tracking-wide mb-4">Order on</h3>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border px-4 py-2 text-sm bg-secondary/30">Zomato</span>
            <span className="rounded-full border px-4 py-2 text-sm bg-secondary/30">Swiggy</span>
            <span className="rounded-full border px-4 py-2 text-sm bg-secondary/30">Uber Eats</span>
          </div>
        </section>

        <section aria-labelledby="address">
          <h3 id="address" className="font-heading text-lg tracking-wide mb-4">Address</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            ALFBAKE Resto Cafe<br />
            123 Heritage Lane, Culinary District<br />
            Chennai, Tamil Nadu 600001, India
          </p>
        </section>

        <section aria-labelledby="contact">
          <h3 id="contact" className="font-heading text-lg tracking-wide mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@alfbake.co</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Open 11:00–23:00 daily</li>
          </ul>
        </section>

        <section aria-labelledby="socials">
          <h3 id="socials" className="font-heading text-lg tracking-wide mb-4">Follow us</h3>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram/></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook/></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter/></a>
          </div>
        </section>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ALFBAKE Resto Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
