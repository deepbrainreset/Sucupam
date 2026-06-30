import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Catálogo", href: "/souvenirs" },
    { name: "Casamientos", href: "/souvenirs-casamientos" },
    { name: "15 Años", href: "/souvenirs-xv-anos" },
    { name: "Blog", href: "/blog" }
  ];

  const socialItems = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sucupam",
      icon: (
        <img
          src="https://i.ibb.co/DHWJ4ZQw/instagram.png"
          alt="Instagram"
          className="h-5 w-5 object-contain"
        />
      )
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@sucupam",
      icon: (
        <img
          src="https://i.ibb.co/wrWPjMJv/tiktok-1.png"
          alt="TikTok"
          className="h-5 w-5 object-contain"
        />
      )
    }
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-paper/90 backdrop-blur-md border-b border-brand-accent/20">
      <div className="container mx-auto px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img
                src="https://i.ibb.co/DH3hNbmN/logo-2.png"
                alt="Logotipo oficial de Sucupam: Souvenirs premium hechos a mano"
                width={120}
                height={56}
                className="h-14 w-auto group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          <nav className="flex items-center justify-center space-x-12 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-ink hover:text-brand-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6 flex-shrink-0">
            {socialItems.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink hover:text-brand-primary transition-colors hover:scale-110 duration-200"
              >
                {social.icon}
              </a>
            ))}
            <Link
              to="/contacto"
              className="bg-brand-dark text-white text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-xl hover:bg-brand-primary hover:text-brand-dark transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="md:hidden flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/DH3hNbmN/logo-2.png"
                alt="Atelier Sucupam - Souvenirs y Papelería Artesanal en Buenos Aires, Argentina"
                width={100}
                height={48}
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-brand-dark z-50 px-2 py-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-paper z-40 px-6 pt-24 animate-fadeIn">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeMobile}
                className="font-serif text-3xl text-brand-dark py-2 border-b border-brand-accent/20 last:border-0 hover:text-brand-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-10 flex space-x-6">
              {socialItems.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  onClick={closeMobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ink hover:text-brand-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-10">
              <Link
                to="/contacto"
                onClick={closeMobile}
                className="inline-block w-full text-center bg-brand-dark text-white py-5 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors"
              >
                Contacto Directo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
