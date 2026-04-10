import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book HVAC Service — Fayetteville AR",
  description:
    "Book HVAC service from Ozark Air & Heat online in 60 seconds. Spring AC tune-ups, fall heating checkups, emergency repair. We respond within 2 business hours.",
  alternates: { canonical: "https://ozarkairandheat.com/book" },
  openGraph: {
    title: "Book HVAC Service | Ozark Air & Heat Fayetteville AR",
    description:
      "Book your HVAC tune-up or repair online. We respond within 2 hours.",
  },
};

export default function BookPage() {
  return (
    <>
      {/* ─── PAGE HEADER ─── */}
      <section
        className='page-header-pad'
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Book Service
          </div>
          <h1
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              lineHeight: 0.95,
              marginBottom: 16,
            }}
          >
            Schedule in
            <br />
            <span style={{ color: "var(--accent)" }}>60 Seconds.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: 420,
              lineHeight: 1.75,
            }}
          >
            Fill out the form — we respond within 2 business hours to confirm.
            For emergencies, call directly.
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
            { href: "/book", label: "Book Service" },
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

      {/* ─── FORM + TRUST ─── */}
      <section className='py-16 md:py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid-book-form'>
            {/* Form */}
            <AnimatedSection direction='left'>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--accent)",
                  backgroundColor: "var(--surface)",
                  padding: "36px 32px",
                }}
              >
                <h2
                  style={{
                    fontFamily:
                      "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  Request an Appointment
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: 28,
                  }}
                >
                  One form, one phone call from us. No runaround.
                </p>
                <BookingForm />
              </div>
            </AnimatedSection>

            {/* Trust sidebar */}
            <AnimatedSection direction='right' delay={0.15}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                {/* Emergency call box */}
                <div
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(14,12,11,0.7)",
                      marginBottom: 8,
                    }}
                  >
                    Emergency? Call Now.
                  </div>
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "var(--bg)",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                      marginBottom: 8,
                    }}
                  >
                    <Phone size={20} />
                    {BUSINESS.phone}
                  </a>
                  <div
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.78rem",
                      color: "rgba(14,12,11,0.65)",
                      lineHeight: 1.5,
                    }}
                  >
                    24/7 emergency dispatch available. We answer — not a call
                    center.
                  </div>
                </div>

                {/* What to expect */}
                <div
                  style={{
                    border: "1px solid var(--border)",
                    padding: "24px",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div className='label-tag' style={{ marginBottom: 16 }}>
                    What Happens Next
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {[
                      {
                        step: "01",
                        title: "You submit the form",
                        desc: "Takes under 60 seconds. No account required.",
                      },
                      {
                        step: "02",
                        title: "We call to confirm",
                        desc: "Within 2 hours during business hours.",
                      },
                      {
                        step: "03",
                        title: "Technician arrives",
                        desc: "On the agreed date with parts ready when possible.",
                      },
                      {
                        step: "04",
                        title: "Written report",
                        desc: "We leave a full inspection report on every visit.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        style={{
                          display: "flex",
                          gap: 14,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            fontFamily:
                              "var(--font-barlow), 'Barlow Condensed', sans-serif",
                            fontWeight: 800,
                            fontSize: "0.8rem",
                            color: "var(--accent)",
                            letterSpacing: "0.04em",
                            flexShrink: 0,
                            paddingTop: 2,
                          }}
                        >
                          {item.step}
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-dm)",
                              fontWeight: 600,
                              fontSize: "0.85rem",
                              color: "var(--text)",
                              marginBottom: 2,
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-dm)",
                              fontSize: "0.78rem",
                              color: "var(--text-muted)",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust signals */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                    backgroundColor: "var(--border)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {[
                    {
                      icon: <Star size={14} fill='currentColor' />,
                      label: "4.9★ Rating",
                      sub: "287 Google reviews",
                    },
                    {
                      icon: <ShieldCheck size={14} />,
                      label: "AR Licensed",
                      sub: "HVAC #H-12847",
                    },
                    {
                      icon: <Clock size={14} />,
                      label: "2-hr Response",
                      sub: "Business hours",
                    },
                    {
                      icon: <Phone size={14} />,
                      label: "24/7 Emergency",
                      sub: "Real technicians",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        backgroundColor: "var(--surface)",
                        padding: "16px 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div style={{ color: "var(--accent)" }}>{item.icon}</div>
                      <div
                        style={{
                          fontFamily:
                            "var(--font-barlow), 'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "var(--text)",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hours */}
                <div
                  style={{
                    border: "1px solid var(--border)",
                    padding: "20px",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div className='label-tag' style={{ marginBottom: 12 }}>
                    Hours
                  </div>
                  {[
                    BUSINESS.hours.weekdays,
                    BUSINESS.hours.saturday,
                    BUSINESS.hours.sunday,
                  ].map((h) => (
                    <div
                      key={h}
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        paddingBlock: 4,
                        borderBottom: "1px solid var(--border)",
                        lineHeight: 1.5,
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section
        style={{
          padding: "48px 0",
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <span className='label-tag'>We Service:</span>
          {BUSINESS.serviceAreas.map((area) => (
            <span
              key={area}
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                padding: "4px 12px",
                border: "1px solid var(--border)",
              }}
            >
              {area}, AR
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
