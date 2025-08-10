import React from "react";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <section className="container py-12" aria-labelledby="discover-menu">
      <h2 id="discover-menu" className="font-heading text-3xl md:text-4xl mb-6">Discover our menu</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-xl border border-border/60 bg-card/60">
            <div className="relative">
              <img src={item.image} alt={`${item.name} at ALFBAKE`} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <span className="text-accent font-semibold">{item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;
