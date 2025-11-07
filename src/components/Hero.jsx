import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] pt-28 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-pink-200/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-black/70">
            I design and build delightful web experiences with React, TypeScript, and modern tooling. I care about
            clean UI, performance, and accessibility.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 font-medium shadow hover:bg-black/5 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
