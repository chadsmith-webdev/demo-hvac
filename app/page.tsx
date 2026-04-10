import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Star,
  ShieldCheck,
  Calendar,
  Zap,
  ChevronRight,
} from "lucide-react";
import AnimatedSection, {
  StaggerGroup,
  StaggerChild,
} from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { BUSINESS, SERVICES, TESTIMONIALS, FAQ_ITEMS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Ozark Air & Heat | HVAC Service Fayetteville AR | (479) 555-0187",
  description:
    "Fayetteville's highest-rated HVAC company. 4.9★ across 287 reviews. Spring AC tune-ups, fall heating checkups & 24/7 emergency repair. Serving NWA since 2009.",
  alternates: { canonical: "https://ozarkairandheat.com" },
};

const SERVICE_ICONS: Record<string, string> = {
  "cooling-season": "❄",
  "heating-season": "🔥",
  "annual-maintenance": "🛡",
};

export default function Home() {
  const previewFAQs = FAQ_ITEMS.slice(0, 4);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
          backgroundColor: "var(--bg)",
        }}
      >
        {/* Hero background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src='/images/hero-bg.jpg'
            alt='HVAC technician performing seasonal maintenance on an outdoor air conditioning unit at dusk, Fayetteville Arkansas'
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.32,
            }}
            sizes='100vw'
          />
          {/* Gradient overlay — dark at bottom for text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(14,12,11,0.3) 0%, rgba(14,12,11,0.6) 50%, rgba(14,12,11,0.98) 100%)",
            }}
          />
          {/* Left-side vertical accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 4,
              backgroundColor: "var(--accent)",
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className='max-w-7xl mx-auto px-6 w-full'
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: 96,
            paddingTop: 64,
          }}
        >
          {/* Season label */}
          <AnimatedSection delay={0.1}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
                padding: "6px 14px",
                border: "1px solid var(--accent)",
                backgroundColor: "var(--accent-dim)",
              }}
            >
              <div
                className='animate-pulse-orange'
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm)",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Spring Tune-Up Season — Slots Filling Fast
              </span>
            </div>
          </AnimatedSection>

          {/* H1 */}
          <AnimatedSection delay={0.2}>
            <h1
              style={{
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3.2rem, 9vw, 8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.93,
                color: "var(--text)",
                maxWidth: 900,
                marginBottom: 24,
              }}
            >
              Before
              <br />
              <span style={{ color: "var(--accent)" }}>The Season</span>
              <br />
              Turns.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--text-muted)",
                maxWidth: 520,
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              Fayetteville&apos;s highest-rated HVAC company. We book spring
              tune-ups before Arkansas heat arrives — and fall checkups before
              the first freeze. 4.9★ across {BUSINESS.reviewCount} reviews.
              Serving NWA since {BUSINESS.founded}.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={0.45}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Link
                href='/book'
                className='hover-accent-bg'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <Calendar size={17} />
                Book a Tune-Up
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className='hover-accent'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  border: "1px solid var(--border-strong)",
                  backgroundColor: "rgba(14,12,11,0.6)",
                  color: "var(--text)",
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Phone size={16} />
                {BUSINESS.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: "var(--border)",
            zIndex: 1,
          }}
        />
      </section>

      {/* ─── TRUST BAR ─── */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className='max-w-7xl mx-auto px-6'
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            justifyContent: "space-between",
          }}
        >
          {[
            {
              icon: <Star size={15} fill='currentColor' />,
              label: `${BUSINESS.rating}★ Rating`,
              sub: `${BUSINESS.reviewCount} Google reviews`,
            },
            {
              icon: <ShieldCheck size={15} />,
              label: "AR Licensed",
              sub: "HVAC License #H-12847",
            },
            {
              icon: <Zap size={15} />,
              label: "24/7 Emergency",
              sub: "Same-day dispatch",
            },
            {
              icon: <Calendar size={15} />,
              label: `Since ${BUSINESS.founded}`,
              sub: "Serving NWA 15+ years",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 24px",
                borderRight: "1px solid var(--border)",
                flex: "1 1 180px",
              }}
              className='trust-bar-item'
            >
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    marginBottom: 3,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SEASONAL ALERT TICKER ─── */}
      <div
        style={{
          backgroundColor: "var(--accent)",
          overflow: "hidden",
          height: 40,
          display: "flex",
          alignItems: "center",
        }}
        aria-hidden='true'
      >
        <div
          className='animate-ticker'
          style={{
            display: "flex",
            gap: 0,
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--bg)",
                paddingInline: 40,
              }}
            >
              Spring Tune-Up Season Is Here — Don&apos;t Wait For The Heatwave —
              Arkansas AC Tune-Ups From $89 — Book Now Before May Fills ·
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section
        className='py-16 md:py-24'
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <AnimatedSection>
            <div className='label-tag' style={{ marginBottom: 16 }}>
              Our Services
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 48,
              }}
            >
              <h2
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  maxWidth: 560,
                }}
              >
                HVAC Done Right. Before You Need It Done Urgently.
              </h2>
              <Link
                href='/services'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                All Services <ChevronRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <StaggerGroup
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 1,
              backgroundColor: "var(--border)",
            }}
          >
            {SERVICES.map((service) => (
              <StaggerChild key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--bg)",
                      padding: "36px 32px",
                      height: "100%",
                      borderLeft: "3px solid transparent",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.2rem",
                        marginBottom: 20,
                        lineHeight: 1,
                      }}
                    >
                      {SERVICE_ICONS[service.slug]}
                    </div>
                    <div className='label-tag' style={{ marginBottom: 8 }}>
                      {service.subtitle}
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-barlow), 'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        letterSpacing: "-0.02em",
                        color: "var(--text)",
                        marginBottom: 12,
                        lineHeight: 1,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      {service.summary}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 20,
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:
                            "var(--font-barlow), 'Barlow Condensed', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.4rem",
                          color: "var(--accent)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {service.price}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          fontWeight: 600,
                        }}
                      >
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── WHY OZARK ─── */}
      <section
        className='py-16 md:py-24'
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
            {/* Left: image placeholder */
            <AnimatedSection direction='left'>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src='/images/technician.jpg'
                  alt='Ozark Air & Heat certified technician in company uniform performing an HVAC inspection in Fayetteville, Arkansas'
                  fill
                  style={{ objectFit: "cover" }}
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
                {/* Accent corner */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 24px",
                    background:
                      "linear-gradient(to top, rgba(14,12,11,0.95), transparent)",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "var(--text)",
                    }}
                  >
                    Locally Owned & Operated
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Fayetteville, AR — Since {BUSINESS.founded}
                  </div>
                </div>
                {/* Orange border accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "40%",
                    backgroundColor: "var(--accent)",
                  }}
                />
              </div>
            </AnimatedSection>

            {/* Right: copy */}
            <AnimatedSection direction='right'>
              <div className='label-tag' style={{ marginBottom: 16 }}>
                Why Ozark Air & Heat
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                We Don&apos;t Upsell.
                <br />
                We Don&apos;t Oversell.
                <br />
                <span style={{ color: "var(--accent)" }}>We Fix It.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  maxWidth: 440,
                }}
              >
                Ozark Air &amp; Heat is Fayetteville&apos;s highest-rated HVAC
                company with a 4.9-star rating across 287 Google reviews. We
                built that reputation by being honest about what equipment you
                actually need and not recommending repairs that can wait.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  backgroundColor: "var(--border)",
                  border: "1px solid var(--border)",
                }}
              >
                {[
                  { stat: "4.9★", label: "Google Rating" },
                  { stat: "287", label: "Reviews" },
                  { stat: "15+", label: "Years Serving NWA" },
                  { stat: "24/7", label: "Emergency Service" },
                ].map((item) => (
                  <div
                    key={item.stat}
                    style={{
                      backgroundColor: "var(--surface)",
                      padding: "24px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily:
                          "var(--font-barlow), 'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "2rem",
                        color: "var(--accent)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {item.stat}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        className='py-16 md:py-24'
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <AnimatedSection>
            <div className='label-tag' style={{ marginBottom: 16 }}>
              Real Customers. Real Reviews.
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: 48,
              }}
            >
              {BUSINESS.rating}★ — {BUSINESS.reviewCount} Reasons to Call Us
              First.
            </h2>
          </AnimatedSection>

          <StaggerGroup
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1px",
              backgroundColor: "var(--border)",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <StaggerChild key={t.author}>
                <div
                  style={{
                    backgroundColor: "var(--bg)",
                    padding: "32px 28px",
                    borderTop: "3px solid var(--accent)",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        style={{ color: "var(--accent)" }}
                        fill='var(--accent)'
                      />
                    ))}
                  </div>
                  <blockquote
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      lineHeight: 1.75,
                      marginBottom: 24,
                      fontStyle: "normal",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: 16,
                    }}
                  >
                    <div
                      style={{
                        fontFamily:
                          "var(--font-barlow), 'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text)",
                      }}
                    >
                      — {t.author}, {t.location}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "0.7rem",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: 4,
                        fontWeight: 600,
                      }}
                    >
                      {t.context}
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── FINANCING ─── */}
      <section
        className='py-16 md:py-24'
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div
            className='grid grid-cols-1 md:grid-cols-2'
            style={{
              gap: 1,
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Left */}
            <AnimatedSection
              className='panel-pad'
              style={{
                backgroundColor: "var(--surface)",
              }}
              direction='left'
            >
              <div className='label-tag' style={{ marginBottom: 16 }}>
                Financing Available
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 20,
                  lineHeight: 1.05,
                }}
              >
                A New System
                <br />
                Doesn&apos;t Have to Be a
                <br />
                <span style={{ color: "var(--accent)" }}>
                  $5,000 Emergency.
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  maxWidth: 400,
                }}
              >
                We offer GreenSky financing with approved credit — 0% interest
                for 12 months on qualifying purchases over $1,500. Spread a
                $5,000 install across 60 months and it becomes a $95/month
                decision. We&apos;ll walk you through the numbers honestly, not
                with pressure tactics.
              </p>
            </AnimatedSection>

            {/* Right */}
            <AnimatedSection
              className='panel-pad'
              style={{
                backgroundColor: "var(--accent-dim)",
              }}
              direction='right'
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {[
                  {
                    label: "0% Interest",
                    sub: "12-month deferred interest plan (with approved credit)",
                  },
                  {
                    label: "$0 Down",
                    sub: "No down payment required on qualifying equipment",
                  },
                  {
                    label: "60-Month Terms",
                    sub: "Extended payment plans for larger system replacements",
                  },
                  {
                    label: "Same-Day Approval",
                    sub: "Know your options before we install anything",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      paddingBottom: 20,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 40,
                        backgroundColor: "var(--accent)",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily:
                            "var(--font-barlow), 'Barlow Condensed', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.2rem",
                          color: "var(--accent)",
                          letterSpacing: "-0.01em",
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: "0.82rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
                <Link
                  href='/book'
                  className='hover-accent-bg'
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    alignSelf: "flex-start",
                    marginTop: 4,
                  }}
                >
                  Ask About Financing →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section
        className='py-16 md:py-24'
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid-faq'>
            <AnimatedSection direction='left'>
              <div className='label-tag' style={{ marginBottom: 16 }}>
                FAQ
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 20,
                  lineHeight: 1.05,
                }}
              >
                Questions
                <br />
                People
                <br />
                Actually
                <br />
                <span style={{ color: "var(--accent)" }}>Google.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Straight answers on costs, timing, and what to do when your
                system acts up.
              </p>
              <Link
                href='/faq'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                All {FAQ_ITEMS.length} Questions <ChevronRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction='right' delay={0.1}>
              <FAQAccordion items={previewFAQs} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-6'>
          <div
            className='panel-pad grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center'
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--accent)",
            }}
          >
            <div>
              <div className='label-tag' style={{ marginBottom: 12 }}>
                Ready to Book?
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                Don&apos;t Wait For the Heatwave.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  maxWidth: 440,
                  lineHeight: 1.7,
                }}
              >
                Spring slots are filling. Book your tune-up now — or call for
                same-day emergency service.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <Link
                href='/book'
                className='hover-accent-bg'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Calendar size={16} />
                Book a Tune-Up
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className='hover-accent'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text)",
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Phone size={15} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Service areas */}
          <div
            style={{
              marginTop: 24,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              alignItems: "center",
            }}
          >
            <span className='label-tag'>Service Areas:</span>
            {BUSINESS.serviceAreas.map((area, i) => (
              <span
                key={area}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                {area}
                {i < BUSINESS.serviceAreas.length - 1 ? " ·" : ""}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
