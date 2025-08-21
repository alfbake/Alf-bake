import React from "react";
import chef from "../../assets/chef.jpg";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  category?: string;
};

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <section
      className="container py-8 sm:py-12"
      aria-labelledby="discover-menu"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-xl border border-border/60 bg-card/60 transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={`${item.name} at ALF BAKE`}
                className="h-64 sm:h-80 md:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">
                {item.name}
              </h3>
              <p className="text-roboto text-gray-custom text-muted-foreground line-clamp-2 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;
