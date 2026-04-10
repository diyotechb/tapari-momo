

const FrozenMomo = () => {
  return (
    <section id="frozen" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Take Home</p>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Frozen MoMo Packs
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Enjoy our handmade momos at home! Our frozen packs are perfect for a quick, delicious meal anytime.
              Simply steam or fry and serve with our signature dipping sauce.
            </p>
            <ul className="space-y-3 text-foreground font-body">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Available in Chicken, Buff & Veg varieties
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Handmade with fresh ingredients daily
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Ask at the truck or contact us to order
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/frozen-momo.jpg" alt="Frozen Momo Packs" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrozenMomo;
