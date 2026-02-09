import { Tomorrow , Montserrat_Alternates } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  // weight: ["300", "400", "500", "700"],
  weight: ["400"],
  // style: ["normal", "italic"],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
  // style: ["normal", "italic"],
});

export default function WhyAstrix() {
  const principles = [
    "We deliver systems, not tools",
    "We take end-to-end ownership",
    "We focus on practical implementation, not theory",
    "We design for real operations, not demos",
    "We adapt solutions to the business — not the other way around",
    "No hype. No one-size-fits-all packages.",
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center my-10">
            <h1 className={` ${tomorrow.className} text-white/70 border border-white/20 text-xs sm:text-sm px-4 sm:px-8 py-1 rounded-full mb-4 sm:mb-6 md:mb-8`}>
              WHY ASTRIX
            </h1>
          </div>

          <h2 className={`${montserratAlternates.className} text-4xl md:text-5xl font-bold text-white text-center`}>
            WHAT <span className="text-purple-800">SETS</span> US APART
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-[#12121a] to-[#0f0f16] p-8 rounded-2xl border border-purple-900/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 via-purple-500/0 to-violet-600/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-shadow duration-500" />

                <p className="text-lg text-gray-100 leading-relaxed font-medium">
                  {principle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
