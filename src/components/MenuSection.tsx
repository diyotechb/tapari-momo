import { menuData } from "@/data/menu";

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Our Menu</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Taste the Himalayas
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((category) => (
            <div key={category.title} className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 border-b pb-3">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="font-body font-semibold text-foreground">{item.name}</h4>
                      <span className="text-accent font-bold font-body whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
