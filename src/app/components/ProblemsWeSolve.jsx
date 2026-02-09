"use client";
import { motion } from "framer-motion";
import { Cabin_Sketch } from "next/font/google";

const cabinSketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["400"],
});

const problems = [
  "Broken lead generation systems",
  "Inefficient lead handling and follow-ups",
  "Disconnected marketing and sales efforts",
  "Overloaded admin teams with manual, repetitive work",
  "Tools that exist but aren’t fully utilized",
  "Growth dependent on hiring instead of systems",
];

export default function ProblemsWeSolve() {
  return (
    <section className="relative py-20 px-4 sm:px-8 text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl flex flex-col items-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-white/20 px-6 py-1 text-xs tracking-widest text-white/70"
        >
          THE PROBLEMS WE SOLVE
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`${cabinSketch.className} mb-10 max-w-3xl text-3xl sm:text-4xl font-semibold leading-tight text-center`}
        >
          Most businesses don't struggle because they lack tools —
          <span className="text-white/70">
            {" "}
            they struggle because systems break silently.
          </span>
        </motion.h2>

        {/* Problems list */}
        <div className="w-full grid gap-4 sm:grid-cols-2 max-w-3xl">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-white/10 bg-white/2 p-5 transition-all duration-300 hover:border-purple-400/40 hover:bg-white/4"
            >
              {/* accent dot */}
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="text-white/80 group-hover:text-white transition-colors">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 max-w-3xl text-center"
        >
          <p className="text-lg text-white/90">
            These problems aren't solved by adding another tool.
          </p>
          <p className="mt-2 text-lg font-medium bg-linear-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            They're solved by better business fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
