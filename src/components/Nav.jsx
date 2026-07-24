import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import markLogo from "../assets/brand/mark-logo.webp";

const SERVICES = [
  {
    name: "Influencer Marketing",
    desc: "Creator partnerships that build trust & reach",
  },
  {
    name: "Website Development",
    desc: "Responsive, SEO-ready, conversion-first builds",
  },
  {
    name: "Performance Marketing",
    desc: "ROI-focused media across Meta, Google & LinkedIn",
  },
  {
    name: "CRM Systems",
    desc: "Automated lead & customer workflows",
  },
  {
    name: "Social Media Marketing",
    desc: "Content, strategy & community that converts",
  },
];

const LINKS = [
  {
    href: "#work",
    label: "Work",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-black/10 shadow-sm"
          : "bg-cream/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-[88px] px-6 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#top"
          className="flex items-center gap-2"
        >
          <img
            src={markLogo}
            alt="Nirmora"
            className="h-[72px] w-auto object-contain"
          />

          <div className="leading-tight">

            <p className="font-display text-[30px] font-bold text-ink leading-none">
              Nirmora
            </p>

            <p className="uppercase tracking-[0.38em] text-[10px] text-gold-deep mt-1">
              Creative
            </p>

          </div>

        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-9">

          <div className="group relative">

            <button className="flex items-center gap-1 text-[14px] font-semibold hover:text-gold-deep transition">

              Services

              <ChevronDown
                size={15}
                className="transition duration-300 group-hover:rotate-180"
              />

            </button>

            <div
              className="
              absolute
              top-full
              left-1/2
              -translate-x-1/2
              pt-5
              opacity-0
              invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
              "
            >

              <div className="w-[320px] rounded-2xl bg-white border border-black/10 shadow-xl p-3">

                {SERVICES.map((service) => (

                  <a
                    key={service.name}
                    href="#services"
                    className="block rounded-xl p-4 hover:bg-[#faf5ec] transition"
                  >
                    <h3 className="font-semibold">
                      {service.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {service.desc}
                    </p>

                  </a>

                ))}

              </div>

            </div>

          </div>

          {LINKS.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className="
              relative
              text-[14px]
              font-semibold
              text-ink-soft
              hover:text-gold-deep
              transition-all

              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-gold-deep
              after:transition-all
              after:duration-300

              hover:after:w-full
              "
            >
              {link.label}
            </a>

          ))}

          <a
            href="#contact"
            className="
            ml-4
            hidden
            lg:flex
            items-center
            gap-2
            bg-black
            text-white
            px-7
            py-3.5
            rounded-full
            text-[13px]
            font-semibold
            hover:bg-[#8C6435]
            transition-all
            duration-300
            "
          >
            Start Project

            <ArrowRight size={15} />
          </a>

        </nav>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-300
        bg-[#FFFDF9]
        border-t
        border-black/10

        ${
          mobileOpen
            ? "max-h-[500px] py-6"
            : "max-h-0 py-0"
        }
        `}
      >

        <div className="px-6 flex flex-col gap-2">

          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="
            py-4
            border-b
            border-black/10
            font-semibold
            text-[16px]
            text-ink
            "
          >
            Services
          </a>

          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="
              py-4
              border-b
              border-black/10
              font-semibold
              text-[16px]
              text-ink
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            bg-black
            text-white
            rounded-full
            py-4
            text-[13px]
            font-semibold
            hover:bg-[#8C6435]
            transition-all
            duration-300
            "
          >
            Start Project
            <ArrowRight size={16} />
          </a>

        </div>

      </div>

    </header>
  );
}
