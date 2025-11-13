import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  PrinterIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const CV_URL = "/Alexandru-Dessanai-CV-2025.pdf";

export default function CVPage() {
  const [fullscreen, setFullscreen] = useState(false);
  const closeBtnRef = useRef(null);
  const textFull = "Visualizza, scarica o stampa il mio CV. File PDF sempre aggiornato.";
  const descRef = useRef(null);
  const cursorRef = useRef(null);

  // use effect scritta animata 
  useLayoutEffect(() => {
    // stato iniziale
    gsap.set(descRef.current, { text: "" });
    gsap.set(cursorRef.current, { autoAlpha: 1 });

    const tl = gsap.timeline();
    tl.to(descRef.current, {
      duration: 2.2,           // velocità “digitazione”
      text: textFull,
      ease: "none",            // typing lineare
    })
      // cursore che lampeggia durante la digitazione
      .to(cursorRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "none",
      }, 0)
      // alla fine, fermo il lampeggio e nascondo il cursore
      .to(cursorRef.current, { autoAlpha: 0 }, ">");

    return () => tl.kill();
  }, []);

  // Chiudi con ESC nel fullscreen
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setFullscreen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handlePrint = () => {
    window.open(CV_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative text-slate-100 min-h-screen overflow-hidden">
      {/* layer di base */}
      <div className="absolute inset-0 bg-slate-700" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-800 to-transparent filter blur-lg" />

      {/* contenuto */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        {/* Titolo + descrizione */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-100">
          Curriculum Vitae
        </h1>
        <p className="text-slate-300 mb-8">
          <span ref={descRef} />
          <span ref={cursorRef} className="inline-block ml-1">|</span>
        </p>

        {/* Barra azioni */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Scarica PDF</span>
          </a>

          <button
            type="button"
            onClick={() => window.open(CV_URL, "_blank", "noopener,noreferrer")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 transition"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            <span>Apri in nuova scheda</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 transition"
          >
            <PrinterIcon className="h-5 w-5" />
            <span>Stampa</span>
          </button>

          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 transition"
          >
            <ArrowsPointingOutIcon className="h-5 w-5" />
            <span>Schermo intero</span>
          </button>
        </div>

        {/* Viewer PDF */}
        <div className="overflow-hidden rounded-xl border border-slate-600 bg-slate-800 shadow-lg">
          <iframe
            title="Anteprima CV"
            src={`${CV_URL}#view=FitH`}
            className="h-[80vh] w-full"
          />
        </div>

        <p className="mt-4 text-center text-sm text-slate-400">
          Se l’anteprima non si carica,{" "}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
          >
            apri il PDF in una nuova scheda
          </a>{" "}
          o usa il pulsante “Scarica PDF”.
        </p>
      </main>

      {/* Modal fullscreen */}
      {fullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/70 flex flex-col"
          onClick={() => setFullscreen(false)}
        >
          <div
            className="flex items-center justify-between px-3 py-2 bg-slate-900/80 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm md:text-base">CV – modalità schermo intero</span>
            <button
              ref={closeBtnRef}
              onClick={() => setFullscreen(false)}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20 transition"
            >
              <XMarkIcon className="h-5 w-5" />
              <span>Chiudi</span>
            </button>
          </div>

          <div className="flex-1" onClick={(e) => e.stopPropagation()}>
            <iframe
              title="CV Fullscreen"
              src={`${CV_URL}#view=FitH`}
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
