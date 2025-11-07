const projects = [
  {
    title: "Portfolio Starter",
    description: "A polished personal site template with React, Tailwind, and clean components.",
    tags: ["React", "Tailwind", "Vite"],
    link: "#",
  },
  {
    title: "UI Component Kit",
    description: "Reusable components following shadcn/ui patterns with great accessibility.",
    tags: ["Design System", "Accessibility"],
    link: "#",
  },
  {
    title: "API Playground",
    description: "FastAPI backend wired to a modern frontend for rapid experimentation.",
    tags: ["FastAPI", "MongoDB", "DX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Projects</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5">{p.tags[0]}</span>
              </div>
              <p className="mt-2 text-sm text-black/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-black/5 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
