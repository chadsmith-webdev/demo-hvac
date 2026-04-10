"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  limit?: number;
}

export default function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {displayed.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid var(--border)",
              backgroundColor: isOpen ? "var(--surface)" : "transparent",
              transition: "background-color 0.2s",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                padding: "20px 0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {item.category && (
                  <span
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      fontWeight: 700,
                    }}
                  >
                    {item.category}
                  </span>
                )}
                <span
                  style={{
                    fontFamily:
                      "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "-0.01em",
                    color: isOpen ? "var(--accent)" : "var(--text)",
                    lineHeight: 1.3,
                    transition: "color 0.2s",
                  }}
                >
                  {item.q}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flexShrink: 0,
                  marginTop: 2,
                  color: isOpen ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key='content'
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      paddingBottom: 20,
                      maxWidth: 680,
                    }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
