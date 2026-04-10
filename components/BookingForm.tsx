"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SERVICE_OPTIONS = [
  "Spring AC Tune-Up — $89",
  "Fall Heating Tune-Up — $89",
  "Annual Maintenance Plan — $149/yr",
  "Emergency Repair",
  "New System Installation",
  "Other / Not Sure",
];

const TIMING_OPTIONS = [
  { value: "asap", label: "ASAP", sub: "Emergency or urgent" },
  { value: "this-week", label: "This Week", sub: "Within 7 days" },
  { value: "this-month", label: "This Month", sub: "Flexible timing" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [timing, setTiming] = useState("this-week");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission delay (demo — replace with real API)
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "var(--surface-2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-dm)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm)",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    fontWeight: 600,
    display: "block",
    marginBottom: 8,
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          padding: "48px 32px",
          border: "1px solid var(--accent)",
          backgroundColor: "var(--accent-dim)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: "var(--accent)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <Check size={26} style={{ color: "var(--bg)" }} />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.8rem",
            color: "var(--text)",
            marginBottom: 12,
          }}
        >
          Request Received.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          We&apos;ll call you within 2 business hours to confirm your
          appointment. For same-day service, call us directly at{" "}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            {BUSINESS.phone}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        {/* Name */}
        <div style={{ gridColumn: "1/3" }}>
          <label htmlFor='name' style={labelStyle}>
            Full Name *
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            placeholder='Jane Smith'
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor='phone' style={labelStyle}>
            Phone *
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            required
            placeholder='(479) 555-0100'
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          />
        </div>

        {/* ZIP */}
        <div>
          <label htmlFor='zip' style={labelStyle}>
            ZIP Code *
          </label>
          <input
            id='zip'
            name='zip'
            type='text'
            required
            inputMode='numeric'
            pattern='[0-9]{5}'
            maxLength={5}
            placeholder='72703'
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          />
        </div>

        {/* Service */}
        <div style={{ gridColumn: "1/3" }}>
          <label htmlFor='service' style={labelStyle}>
            Service Needed *
          </label>
          <select
            id='service'
            name='service'
            required
            style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <option value=''>Select a service...</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timing */}
      <div style={{ marginBottom: 24 }}>
        <div style={labelStyle}>When Do You Need Service?</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 8,
          }}
        >
          {TIMING_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type='button'
              onClick={() => setTiming(opt.value)}
              style={{
                padding: "12px 8px",
                border: `1px solid ${timing === opt.value ? "var(--accent)" : "var(--border)"}`,
                backgroundColor:
                  timing === opt.value
                    ? "var(--accent-dim)"
                    : "var(--surface-2)",
                cursor: "pointer",
                textAlign: "center",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily:
                    "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: timing === opt.value ? "var(--accent)" : "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {opt.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                {opt.sub}
              </div>
            </button>
          ))}
        </div>
        <input type='hidden' name='timing' value={timing} />
      </div>

      {/* Notes */}
      <div style={{ marginBottom: 24 }}>
        <label htmlFor='notes' style={labelStyle}>
          Anything Else? (optional)
        </label>
        <textarea
          id='notes'
          name='notes'
          rows={3}
          placeholder="Describe what's happening — or leave blank."
          style={{ ...inputStyle, resize: "vertical", minHeight: 80 }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />
      </div>

      {/* Submit */}
      <AnimatePresence mode='wait'>
        <motion.button
          key={status}
          type='submit'
          disabled={status === "submitting"}
          whileHover={status === "idle" ? { scale: 1.01 } : {}}
          whileTap={status === "idle" ? { scale: 0.98 } : {}}
          style={{
            width: "100%",
            padding: "16px 24px",
            backgroundColor:
              status === "submitting" ? "var(--accent-hover)" : "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            border: "none",
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "background-color 0.2s",
          }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className='animate-spin' />
              Sending Request...
            </>
          ) : (
            "Request Appointment →"
          )}
        </motion.button>
      </AnimatePresence>

      <p
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: "0.75rem",
          color: "var(--text-subtle)",
          marginTop: 12,
          textAlign: "center",
        }}
      >
        We respond within 2 business hours. For emergencies call{" "}
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          style={{ color: "var(--text-muted)" }}
        >
          {BUSINESS.phone}
        </a>
        .
      </p>
    </form>
  );
}
