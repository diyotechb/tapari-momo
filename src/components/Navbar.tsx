import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Frozen Momo", href: "#frozen" },
    { label: "Catering", href: "#catering" },
    { label: "Order Online", href: "#order" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="MoMo Food Truck" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold text-primary">Tapari Momo</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
