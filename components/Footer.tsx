"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        marginTop: "auto",
      }}
    >
      {/* Emergency Banner */}
      <div
        style={{
          backgroundColor: "var(--accent)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--bg)",
          }}
        >
          24/7 Emergency HVAC Service
        </span>
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.15rem",
            color: "var(--bg)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Phone size={16} />
          {BUSINESS.phone}
        </a>
      </div>

      {/* Main Footer Grid */}
      <div
        className='max-w-7xl mx-auto px-6 py-14'
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand Column */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
              letterSpacing: "-0.01em",
              color: "var(--text)",
              marginBottom: 8,
            }}
          >
            OZARK AIR & HEAT
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 220,
              marginBottom: 16,
            }}
          >
            Northwest Arkansas&apos; trusted HVAC specialists. Honest pricing,
            expert work, no panic calls.
          </p>
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontFamily: "var(--font-dm)",
              fontWeight: 600,
            }}
          >
            {BUSINESS.license}
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className='hover-accent'
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-dm)",
              }}
            >
              <Phone
                size={14}
                style={{ color: "var(--accent)", flexShrink: 0 }}
              />
              {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontFamily: "var(--font-dm)",
              }}
            >
              <Mail
                size={14}
                style={{ color: "var(--accent)", flexShrink: 0 }}
              />
              {BUSINESS.email}
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm)",
              }}
            >
              <MapPin
                size={14}
                style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}
              />
              {BUSINESS.address.full}
            </div>
          </div>
        </div>

        {/* Hours Column */}
        <div>
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Hours
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              BUSINESS.hours.weekdays,
              BUSINESS.hours.saturday,
              BUSINESS.hours.sunday,
            ].map((h) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm)",
                  lineHeight: 1.5,
                }}
              >
                <Clock
                  size={13}
                  style={{
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                {h}
              </div>
            ))}
            <div
              style={{
                marginTop: 8,
                padding: "6px 10px",
                border: "1px solid var(--accent)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              24/7 Emergency Available
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Quick Links
          </div>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
            aria-label='Footer navigation'
          >
            {[
              { href: "/services", label: "All Services" },
              { href: "/services#cooling-season", label: "Cooling Season" },
              { href: "/services#heating-season", label: "Heating Season" },
              {
                href: "/services#annual-maintenance",
                label: "Maintenance Plan",
              },
              { href: "/faq", label: "FAQ" },
              { href: "/book", label: "Book Service" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='hover-accent'
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Service Areas Column */}
        <div>
          <div className='label-tag' style={{ marginBottom: 16 }}>
            Service Areas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {BUSINESS.serviceAreas.map((area) => (
              <div
                key={area}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm)",
                }}
              >
                {area}, AR
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-subtle)",
            fontFamily: "var(--font-dm)",
          }}
        >
          © {year} {BUSINESS.name}. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-subtle)",
            fontFamily: "var(--font-dm)",
          }}
        >
          Serving Northwest Arkansas since {BUSINESS.founded} ·{" "}
          {BUSINESS.license}
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-subtle)",
            fontFamily: "var(--font-dm)",
          }}
        >
          Built by{" "}
          <a
            href='https://localsearchally.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "#f8f9fa" }}>Local Search</span>{" "}
            <span style={{ color: "#7bafd4" }}>Ally</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
