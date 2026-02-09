"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Understand the business context",
    description:
      "How leads are generated, how conversations happen, and how work flows internally.",
  },
  {
    title: "Identify bottlenecks and leverage points",
    description: "Pinpoint where time, money, or opportunities are being lost.",
  },
  {
    title: "Design the right system",
    description:
      "AI agents, automation, performance marketing, or workflow optimization — only what's needed.",
  },
  {
    title: "Implement and integrate",
    description:
      "We don't just advise. We build, deploy, and integrate systems into your business.",
  },
  {
    title: "Refine and optimize",
    description:
      "Systems evolve as your business grows — we continuously improve them.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 px-4 sm:px-8 text-white">
      {/* background depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-24 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-white/20 px-6 py-1 text-xs tracking-widest text-white/70"
        >
          HOW WE WORK
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl text-3xl sm:text-4xl font-semibold leading-tight"
        >
          A structured approach that stays flexible,
          <span className="text-white/70">
            {" "}
            practical, and aligned with real business needs.
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative space-y-14 border-l border-white/10 pl-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* dot */}
              <span className="absolute -left-2.25 top-2 h-3 w-3 rounded-full bg-linear-to-r from-violet-400 to-violet-500" />

              <h3 className="text-xl font-medium pl-2">{step.title}</h3>

              <p className="mt-2 max-w-xl text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl text-lg text-white/80"
        >
          This approach allows us to stay adaptable, focused on outcomes, and
          grounded in how your business actually operates.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full
              bg-linear-to-r from-purple-400 to-violet-500
              px-8 py-3 text-sm font-medium text-black
              transition-transform duration-200 hover:scale-[1.03]"
          >
            Book a call with us
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
