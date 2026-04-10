

const CateringSection = () => {
  return (
    <section id="catering" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img src="/catering.jpg" alt="Catering Setup" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Events & Parties</p>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Catering Services
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Bring the flavors of the Himalayas to your next event! We cater weddings, corporate events, birthday parties, and private gatherings throughout the Fairfax, Virginia area.
            </p>
            <ul className="space-y-3 text-foreground font-body mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Custom menus tailored to your event
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Serving 20 to 500+ guests
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Full setup and service available
              </li>
            </ul>
            <a href="#catering-form" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
