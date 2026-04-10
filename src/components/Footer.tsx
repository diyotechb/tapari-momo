import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";


const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11 AM – 8:30 PM" },
  { day: "Wednesday", time: "11 AM – 8:30 PM" },
  { day: "Thursday", time: "11 AM – 8:30 PM" },
  { day: "Friday", time: "11 AM – 8:30 PM" },
  { day: "Saturday", time: "11 AM – 8:30 PM" },
  { day: "Sunday", time: "11 AM – 8:30 PM" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="MoMo" className="h-10 w-10" />
              <span className="font-heading text-2xl font-bold">Tapari Momo</span>
            </div>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-4">
              Authentic Nepali Himalayan Dumplings & more. Serving the Fairfax, Virginia area with love and spice.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/taparimomova/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.tiktok.com/@taparimomonova" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.23 8.23 0 0 0 4.76 1.51v-3.5a4.82 4.82 0 0 1-1-.01z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 font-body">
              <a href="#menu" className="block text-primary-foreground/70 hover:text-accent transition-colors">Menu</a>
              <a href="#frozen" className="block text-primary-foreground/70 hover:text-accent transition-colors">Frozen MoMo</a>
              <a href="#catering" className="block text-primary-foreground/70 hover:text-accent transition-colors">Catering</a>
              <a href="#order" className="block text-primary-foreground/70 hover:text-accent transition-colors">Order Online</a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 font-body">
              <a
                href="https://www.google.com/maps/place/Tapari+Momo/@38.854895,-77.3170964,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span>10800 Fairfax Blvd, Fairfax, VA 22030</span>
              </a>
              <a
                href="tel:+15716649153"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>(571) 664-9153</span>
              </a>
              <a
                href="mailto:taparimomova@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>taparimomova@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
              <Clock size={18} className="text-accent" />
              Opening Hours
            </h4>
            <div className="space-y-1.5 font-body text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span className="text-primary-foreground/70">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-destructive font-semibold" : "text-primary-foreground/90"}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden border border-primary-foreground/20">
          <iframe
            title="Tapari Momo Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-77.3170964!3d38.854895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64f94bcbd177d%3A0x53d6c2ed7630865!2sTapari%20Momo!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/50 text-sm font-body">
          © {new Date().getFullYear()} Tapari Momo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
