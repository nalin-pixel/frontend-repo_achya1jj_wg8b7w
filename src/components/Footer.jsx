export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-black/5 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-black/70 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {year} Your Name. All rights reserved.</p>
        <p>
          Built with <span className="font-medium">React</span> & <span className="font-medium">Tailwind</span>.
        </p>
      </div>
    </footer>
  );
}
