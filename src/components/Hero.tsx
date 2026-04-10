import heroImg from "@/assets/food-truck-banner.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Steaming Nepali Momos" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <p className="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-4">
          Authentic Nepali Cuisine • Fairfax, Virginia
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Tapari Momo<br />
          <span className="text-accent">Himalayan Dumpling</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-xl mx-auto">
           Hand-crafted dumplings & Himalayan flavors served fresh from our food truck
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            View Menu
          </a>
          <a href="#catering" className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 font-body font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
            Book Catering
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
