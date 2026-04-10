"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          backgroundColor: scrolled ? "rgba(14,12,11,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition:
            "background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between h-16'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-3 group'
            aria-label='Ozark Air & Heat home'
          >
            <div
              style={{
                width: 36,
                height: 36,
                backgroundColor: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background-color 0.2s",
              }}
              className='group-hover:bg-[var(--accent-hover)]'
            >
              {/* Flame icon inline SVG */}
              <svg
                width='18'
                height='20'
                viewBox='0 0 18 20'
                fill='none'
                aria-hidden='true'
              >
                <path
                  d='M9 0C9 0 14.5 5.5 14.5 10C14.5 12.5 13.5 14 12 15C13 13 11.5 11.5 10.5 10.5C10.8 12 10 13.5 9 14.5C9.5 13 8.5 11.5 7 10.5C7.5 12 7 13.5 6 14.5C5 13.5 3.5 11.5 3.5 10C3.5 5.5 9 0 9 0Z'
                  fill='var(--bg)'
                />
                <path
                  d='M9 8C9 8 11.5 11 11.5 14C11.5 16.5 10.5 18.5 9 20C7.5 18.5 6.5 16.5 6.5 14C6.5 11 9 8 9 8Z'
                  fill='var(--bg)'
                  opacity='0.6'
                />
              </svg>
            </div>
            <div>
              <span
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                OZARK AIR & HEAT
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm)",
                  display: "block",
                  marginTop: 1,
                }}
              >
                Fayetteville, AR
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className='hidden md:flex items-center gap-8'
            aria-label='Main navigation'
          >
            {NAV_LINKS.filter((l) => l.label !== "Book Now").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color:
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-muted)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className='hidden md:flex items-center gap-4'>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.02em",
                color: "var(--text)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              <Phone size={14} style={{ color: "var(--accent)" }} />
              {BUSINESS.phone}
            </a>
            <Link
              href='/book'
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 18px",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              color: "var(--text)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 49,
              backgroundColor: "var(--surface)",
              borderBottom: "1px solid var(--border)",
              padding: "24px 24px",
            }}
          >
            <nav
              aria-label='Mobile navigation'
              style={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "14px 0",
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      letterSpacing: "-0.01em",
                      color:
                        pathname === link.href
                          ? "var(--accent)"
                          : "var(--text)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                style={{ paddingTop: 20 }}
              >
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--accent)" }} />
                  {BUSINESS.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed header */}
      <div style={{ height: 64 }} aria-hidden='true' />
    </>
  );
}
