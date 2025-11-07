import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! I'll get back to you soon.");
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-black/70">Have a question or want to work together? Drop a message.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-black/60">Email</p>
                <a href="mailto:hello@example.com" className="font-medium hover:text-indigo-600">hello@example.com</a>
              </div>
            </div>
            <p className="mt-4 text-sm text-black/70">
              Prefer email? I usually reply within a day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
                Send <Send className="h-4 w-4" />
              </button>
              {status && <span className="text-sm text-green-600">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
