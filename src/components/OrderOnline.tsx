import { ShoppingCart, ExternalLink } from "lucide-react";

const ONLINE_ORDERING_ENABLED = import.meta.env.VITE_ENABLE_ONLINE_ORDERING === "true";
const DOORDASH_URL = import.meta.env.VITE_DOORDASH_URL || "#";
const UBEREATS_URL = import.meta.env.VITE_UBEREATS_URL || "#";

const OrderOnline = () => {
  return (
    <section id="order" className="py-20 bg-primary">
      <div className="container text-center">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Order Now</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Get Your MoMo Fix
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
          Order through our delivery partners or directly from us
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg px-8 py-4 font-body font-semibold text-foreground hover:shadow-lg transition-shadow min-w-[220px] justify-center"
          >
            <ExternalLink size={20} className="text-accent" />
            DoorDash
          </a>
          <a
            href={UBEREATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg px-8 py-4 font-body font-semibold text-foreground hover:shadow-lg transition-shadow min-w-[220px] justify-center"
          >
            <ExternalLink size={20} className="text-accent" />
            Uber Eats
          </a>
        </div>

        {ONLINE_ORDERING_ENABLED && (
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-accent rounded-lg px-10 py-4 font-body font-bold text-accent-foreground hover:opacity-90 transition-opacity text-lg"
            >
              <ShoppingCart size={22} />
              Order Directly From Us
            </a>
          </div>
        )}

        {!ONLINE_ORDERING_ENABLED && (
          <p className="mt-8 text-primary-foreground/60 text-sm">
            Direct online ordering coming soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default OrderOnline;
