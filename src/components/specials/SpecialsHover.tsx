import React from "react";

type Special = {
  id: string;
  title: string;
  image: string;
};

interface SpecialsHoverProps {
  items: Special[];
}

const SpecialsHover: React.FC<SpecialsHoverProps> = ({ items }) => {
  return (
    <section className="container py-12" aria-labelledby="specials">
      <h2 id="specials" className="font-heading text-3xl md:text-4xl mb-6">ALFBAKE Specials</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((sp) => (
          <article key={sp.id} className="group relative overflow-hidden rounded-xl border border-border/60">
            <img src={sp.image} alt={`${sp.title} special at ALFBAKE`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-full border border-accent/40 bg-background/50 px-4 py-2 inline-block shadow-elegant transition group-hover:shadow-glow">
                <span className="text-sm">{sp.title}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Hover over the cards to see them come alive.</p>
    </section>
  );
};

export default SpecialsHover;
