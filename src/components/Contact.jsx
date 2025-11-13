import { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "", company: "" }); // company = honeypot
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "err" | null
  const formRef = useRef(null);

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "Il nome è obbligatorio.";
    if (!v.email.trim()) e.email = "L'email è obbligatoria.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Email non valida.";
    if (!v.subject.trim()) e.subject = "Oggetto obbligatorio.";
    if (!v.message.trim() || v.message.trim().length < 10) e.message = "Minimo 10 caratteri.";
    // honeypot: se pieno => bot
    if (v.company) e.company = "Bot rilevato.";
    return e;
  };

  const onChange = (e) => {
    setValues((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = { ...values };
    const eobj = validate(v);
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    // Simula invio (placeholder)
    try {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 900)); // finto delay
      setStatus("ok");
      formRef.current?.reset();
      setValues({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setStatus("err");
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 2500);
    }
  };

  const isValid = Object.keys(validate(values)).length === 0;

  return (
    <div className="relative text-slate-100 min-h-screen overflow-hidden">
      {/* Background come Home */}
      <div className="absolute inset-0 bg-slate-700" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-800 to-transparent filter blur-lg" />

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">Contattami</h1>
          <p className="text-slate-300 mt-2">
            Hai un’idea, una collaborazione o una domanda? Scrivimi qui sotto.
          </p>
        </header>

        {/* Card form */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          className="rounded-xl border border-slate-600 bg-slate-800/80 backdrop-blur px-4 sm:px-6 py-6 shadow-lg"
        >
          {/* Honeypot (nascosto ai user reali) */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              value={values.company}
              onChange={onChange}
            />
          </div>

          {/* Nome */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Nome</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Il tuo nome"
                value={values.name}
                onChange={onChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900 pl-11 pr-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-400 focus:border-slate-500"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="nome@esempio.com"
                value={values.email}
                onChange={onChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900 pl-11 pr-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-400 focus:border-slate-500"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
          </div>

          {/* Oggetto */}
          <div className="mb-5">
            <label htmlFor="subject" className="block text-sm text-slate-300 mb-1">Oggetto</label>
            <div className="relative">
              <ChatBubbleLeftRightIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Di cosa vuoi parlarmi?"
                value={values.subject}
                onChange={onChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900 pl-11 pr-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-400 focus:border-slate-500"
              />
            </div>
            {errors.subject && <p className="mt-1 text-sm text-red-300">{errors.subject}</p>}
          </div>

          {/* Messaggio */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Messaggio</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Scrivi qui il tuo messaggio..."
              value={values.message}
              onChange={onChange}
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-400 focus:border-slate-500"
            />
            <div className="mt-1 text-xs text-slate-400">
              {values.message.trim().length}/1000
            </div>
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting || !isValid}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 
                ${submitting || !isValid
                  ? "bg-slate-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"}
                text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-slate-800`}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
              {submitting ? "Invio..." : "Invia"}
            </button>

            {status === "ok" && (
              <span className="text-sm text-green-300">Messaggio “inviato” (simulazione).</span>
            )}
            {status === "err" && (
              <span className="text-sm text-red-300">Errore imprevisto. Riprova.</span>
            )}
          </div>

          {/* Note privacy */}
          <p className="mt-4 text-xs text-slate-400">
            I tuoi dati saranno utilizzati solo per risponderti.
          </p>
        </form>



        {/* CTA finale LinkedIn */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/alexandru-dessanai-poian-9a9b37341/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-800/80 border border-slate-600 px-5 py-3 rounded-xl text-slate-100 hover:bg-slate-700 transition shadow-md"
          >
            {/* Icona LinkedIn ufficiale (Heroicons non ha quella ufficiale) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-blue-400"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.599 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>

            <span className="font-medium">Oppure scrivimi su LinkedIn</span>
          </a>
        </div>
      </main>
    </div>
  );
}
