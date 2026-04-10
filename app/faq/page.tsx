import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { BUSINESS, FAQ_ITEMS } from "@/lib/business";

export const metadata: Metadata = {
  title: "HVAC FAQ — Common Questions Answered",
  description:
    "Honest answers to HVAC questions Fayetteville homeowners actually ask. AC service frequency, costs, heat pumps vs. furnaces, emergency repair, and more.",
  alternates: { canonical: "https://ozarkairandheat.com/faq" },
  openGraph: {
    title: "HVAC FAQ | Ozark Air & Heat Fayetteville AR",
    description:
      "Straight answers on HVAC costs, timing, equipment, and what to do when your system acts up.",
  },
};

// Group into categories
const CATEGORIES = Array.from(new Set(FAQ_ITEMS.map((f) => f.category)));

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ozarkairandheat.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://ozarkairandheat.com/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── PAGE HEADER ─── */}
      <section
        className='page-header-pad'
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--border) 0, var(--border) 1px, transparent 0, transparent 64px)",
            opacity: 0.3,
          }}
          aria-hidden='true'
        />
        <div
          className='max-w-7xl mx-auto px-6'
          style={{ position: "relative" }}
        >
          <div className='label-tag' style={{ marginBottom: 16 }}>
            FAQ
          </div>
          <h1
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              lineHeight: 0.95,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            Questions People
            <br />
            <span style={{ color: "var(--accent)" }}>Actually Google</span>
            <br />
            About HVAC.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: 520,
              lineHeight: 1.75,
            }}
          >
            Straight answers on HVAC costs, timing, equipment choices, and what
            to do when your system acts up — from Fayetteville&apos;s
            highest-rated HVAC company.
          </p>
        </div>
      </section>

      {/* ─── BREADCRUMB ─── */}
      <nav
        aria-label='Breadcrumb'
        style={{ padding: "12px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/faq", label: "FAQ" },
          ].map((crumb, i, arr) => (
            <span
              key={crumb.href}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {i < arr.length - 1 ? (
                <Link
                  href={crumb.href}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                  }}
                >
                  {crumb.label}
                </span>
              )}
              {i < arr.length - 1 && (
                <span
                  style={{ color: "var(--text-subtle)", fontSize: "0.65rem" }}
                >
                  ›
                </span>
              )}
            </span>
          ))}
        </div>
      </nav>

      {/* ─── QUICK ANSWER CARDS ─── */}
      <section
        style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <AnimatedSection>
            <div className='label-tag' style={{ marginBottom: 20 }}>
              Quick Reference
            </div>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: 1,
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {[
              {
                q: "How often should I service my AC?",
                a: "Once per year, in spring.",
              },
              {
                q: "What does an AC tune-up cost?",
                a: "$89 at Ozark Air & Heat.",
              },
              {
                q: "What does a new HVAC system cost?",
                a: "$4,200 – $7,500 installed.",
              },
              { q: "Is financing available?", a: "Yes — 0% for 12 months." },
              {
                q: "Do you offer 24/7 emergency service?",
                a: "Yes, 24/7 real technicians.",
              },
              {
                q: "What areas do you serve?",
                a: "Fayetteville & all of NWA.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "22px 20px",
                  borderLeft: "3px solid var(--border)",
                }}
                className='hover-surface-bg'
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.73rem",
                    color: "var(--text-muted)",
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "var(--accent)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL FAQ BY CATEGORY ─── */}
      <section style={{ padding: "80px 0" }}>
        <div
          className='max-w-7xl mx-auto px-6'
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Sidebar nav */}
          <AnimatedSection
            direction='left'
            style={{ position: "sticky", top: 96 }}
          >
            <div className='label-tag' style={{ marginBottom: 16 }}>
              Categories
            </div>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
              aria-label='FAQ categories'
            >
              {CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat?.toLowerCase()}`}
                  style={{
                    display: "block",
                    padding: "10px 14px",
                    fontFamily: "var(--font-dm)",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    borderLeft: "2px solid var(--border)",
                  }}
                >
                  {cat}
                </a>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div
              style={{
                marginTop: 32,
                padding: "20px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--text)",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                Still Have Questions?
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                Call us — we&apos;ll give you a straight answer in under 5
                minutes.
              </p>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
            </div>
          </AnimatedSection>

          {/* Accordion sections */}
          <div>
            {CATEGORIES.map((cat) => {
              const items = FAQ_ITEMS.filter((f) => f.category === cat);
              return (
                <AnimatedSection
                  key={cat}
                  style={{ marginBottom: 56, scrollMarginTop: 96 }}
                  id={cat?.toLowerCase()}
                >
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      letterSpacing: "-0.02em",
                      color: "var(--text)",
                      marginBottom: 4,
                      paddingBottom: 16,
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>—</span>
                    {cat}
                  </h2>
                  <FAQAccordion items={items} />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BOOK CTA ─── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{
            textAlign: "center",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className='label-tag'
            style={{
              marginBottom: 12,
              justifyContent: "center",
              display: "flex",
            }}
          >
            Skip The Guesswork
          </div>
          <h2
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 16,
              lineHeight: 1,
            }}
          >
            Book a Tune-Up.
            <br />
            <span style={{ color: "var(--accent)" }}>
              We&apos;ll Tell You Exactly
            </span>
            <br />
            What&apos;s Going On.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            Every visit includes a written inspection report. No mystery
            charges, no vague estimates.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href='/book'
              className='hover-accent-bg'
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 30px",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Calendar size={15} />
              Book Service
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 30px",
                border: "1px solid var(--border-strong)",
                color: "var(--text)",
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
