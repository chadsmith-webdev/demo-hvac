import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Check, Phone } from "lucide-react";
import AnimatedSection, {
  StaggerGroup,
  StaggerChild,
} from "@/components/AnimatedSection";
import { BUSINESS, SERVICES } from "@/lib/business";

export const metadata: Metadata = {
  title: "HVAC Services — Cooling, Heating & Maintenance",
  description:
    "Seasonal AC tune-ups ($89), fall heating checkups ($89), and annual maintenance plans ($149/yr) for Fayetteville and Northwest Arkansas. Honest pricing, expert work.",
  alternates: { canonical: "https://ozarkairandheat.com/services" },
  openGraph: {
    title: "HVAC Services | Ozark Air & Heat Fayetteville AR",
    description:
      "Spring AC tune-ups, fall heating checkups, and annual maintenance plans. Serving NWA since 2009.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HVAC Services — Ozark Air & Heat",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: `${s.title} — ${s.subtitle}`,
      description: s.summary,
      provider: {
        "@type": "HVACBusiness",
        name: "Ozark Air & Heat",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fayetteville",
          addressRegion: "AR",
          addressCountry: "US",
        },
      },
      offers: {
        "@type": "Offer",
        price: s.price.replace(/[^0-9]/g, ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      areaServed: "Northwest Arkansas",
    },
  })),
};

const SEASON_COLORS: Record<string, string> = {
  "cooling-season": "❄",
  "heating-season": "🔥",
  "annual-maintenance": "🛡",
};

const ADDITIONAL_SERVICES = [
  {
    title: "Emergency Repair",
    price: "From $129",
    desc: "24/7 dispatch for AC or heating failures. We'll tell you whether it's worth repairing or time to replace — before we start the work.",
  },
  {
    title: "New System Installation",
    price: "From $4,200",
    desc: "We install Trane and Carrier systems — equipment with strong warranty programs and parts availability across NWA. Itemized quotes, no bundled pricing.",
  },
  {
    title: "Duct Inspection & Sealing",
    price: "Call for quote",
    desc: "Leaky ductwork can waste 20–30% of your conditioned air. We test, locate, and seal — and only recommend it when we can prove the leak.",
  },
  {
    title: "Thermostat Upgrade",
    price: "From $189 installed",
    desc: "Smart thermostat installation including wiring, configuration, and app setup. Works with most existing HVAC systems.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--border) 0, var(--border) 1px, transparent 0, transparent 50%)",
            backgroundSize: "80px 80px",
            opacity: 0.4,
          }}
          aria-hidden='true'
        />
        <div
          className='max-w-7xl mx-auto px-6'
          style={{ position: "relative" }}
        >
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Our Services
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
              marginBottom: 24,
            }}
          >
            HVAC Done Right.
            <br />
            <span style={{ color: "var(--accent)" }}>Before You Need It</span>
            <br />
            Done Urgently.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: 480,
              lineHeight: 1.75,
            }}
          >
            Seasonal tune-ups, annual maintenance plans, emergency repair, and
            new installation — for Fayetteville and all of Northwest Arkansas.
          </p>
        </div>
      </section>

      {/* ─── BREADCRUMB ─── */}
      <nav
        aria-label='Breadcrumb'
        style={{
          padding: "12px 0",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg)",
        }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
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

      {/* ─── MAIN SERVICES ─── */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.slug}
          id={service.slug}
          className='py-16 md:py-24'
          style={{
            borderBottom: "1px solid var(--border)",
            backgroundColor: idx % 2 === 0 ? "var(--bg)" : "var(--surface)",
            scrollMarginTop: 80,
          }}
        >
          <div className='max-w-7xl mx-auto px-6'>
            <div className={idx % 2 === 0 ? "grid-svc-even" : "grid-svc-odd"}>
              {/* Content */}
              <AnimatedSection
                direction={idx % 2 === 0 ? "left" : "right"}
                className={idx % 2 !== 0 ? "md:order-last" : undefined}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {SEASON_COLORS[service.slug]}
                </div>
                <div className='label-tag' style={{ marginBottom: 12 }}>
                  {service.subtitle}
                </div>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2.2rem, 5vw, 4rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                    lineHeight: 0.95,
                    marginBottom: 20,
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginBottom: 32,
                    maxWidth: 480,
                  }}
                >
                  {service.summary}
                </p>

                {/* Urgency callout */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    border: "1px solid var(--accent)",
                    backgroundColor: "var(--accent-dim)",
                    marginBottom: 32,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: "100%",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                      minHeight: 20,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.82rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.urgency}
                  </p>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    href='/book'
                    className='hover-accent-bg'
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 28px",
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
                    Book for {service.price}
                  </Link>
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 28px",
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
              </AnimatedSection>

              {/* Checklist */}
              <AnimatedSection
                direction={idx % 2 === 0 ? "right" : "left"}
                delay={0.1}
                className={idx % 2 !== 0 ? "md:order-first" : undefined}
              >
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderTop: "3px solid var(--accent)",
                    padding: "32px 28px",
                    backgroundColor:
                      idx % 2 === 0 ? "var(--surface)" : "var(--bg)",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                      marginBottom: 20,
                      paddingBottom: 16,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    What&apos;s Included — {service.price}
                  </div>
                  <StaggerGroup
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {service.items.map((item) => (
                      <StaggerChild key={item}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12,
                          }}
                        >
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              backgroundColor: "var(--accent-dim)",
                              border: "1px solid var(--accent)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: 1,
                            }}
                          >
                            <Check
                              size={11}
                              style={{ color: "var(--accent)" }}
                            />
                          </div>
                          <span
                            style={{
                              fontFamily: "var(--font-dm)",
                              fontSize: "0.85rem",
                              color: "var(--text)",
                              lineHeight: 1.6,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      </StaggerChild>
                    ))}
                  </StaggerGroup>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* ─── ADDITIONAL SERVICES ─── */}
      <section
        className='py-16 md:py-24'
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <AnimatedSection>
            <div className='label-tag' style={{ marginBottom: 16 }}>
              Also Available
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: 48,
              }}
            >
              More HVAC Services
            </h2>
          </AnimatedSection>
          <StaggerGroup
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: 1,
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {ADDITIONAL_SERVICES.map((s) => (
              <StaggerChild key={s.title}>
                <div
                  style={{
                    backgroundColor: "var(--surface)",
                    padding: "28px 24px",
                    borderLeft: "3px solid transparent",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--accent)",
                      marginBottom: 12,
                    }}
                  >
                    {s.price}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── BOOK CTA ─── */}
      <section
        className='py-12 md:py-20'
        style={{ backgroundColor: "var(--accent)" }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
                color: "var(--bg)",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              Ready to Schedule?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "0.9rem",
                color: "rgba(14,12,11,0.7)",
              }}
            >
              Book online in 60 seconds — or call for same-day emergency
              service.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href='/book'
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                backgroundColor: "var(--bg)",
                color: "var(--accent)",
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
                padding: "14px 28px",
                border: "2px solid rgba(14,12,11,0.3)",
                color: "var(--bg)",
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
