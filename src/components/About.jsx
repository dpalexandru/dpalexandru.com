import {
  AcademicCapIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export default function AboutPage() {
  return (
    <div className="relative text-slate-100 min-h-screen overflow-hidden">
      {/* Background come Home/CV */}
      <div className="absolute inset-0 bg-slate-700" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-800 to-transparent filter blur-lg" />

      {/* Contenuto */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Hero / intro */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Ciao, sono Alexandru 👋
          </h1>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Amo la tecnologia da quando ero ragazzino e oggi il mio obiettivo è
            lavorare come sviluppatore in un’azienda tech. Mi piace scrivere
            codice, capire come funzionano i sistemi informativi e usare i dati
            per raccontare storie e prendere decisioni migliori.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Credo che il futuro sia fatto di persone che sanno{" "}
            <span className="font-semibold text-blue-300">
              comunicare, semplificare e costruire strumenti digitali
            </span>{" "}
            – non solo per la propria vita, ma soprattutto per il mondo
            business. È esattamente lì che voglio stare.
          </p>
        </section>

        {/* Sezione "Chi sono" */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <CodeBracketIcon className="w-6 h-6 text-blue-300" />
              Chi sono, versione dev
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed">
              Sono uno che smanetta volentieri: mi piace capire le cose nel
              dettaglio, provare, rompere e poi sistemare. Ho passato anni a
              giocare con{" "}
              <span className="font-medium text-blue-200">
                YouTube, Google Analytics, AdSense
              </span>{" "}
              e strumenti online vari, molto prima di decidere di fare sul serio
              con lo sviluppo.
            </p>
            <p className="text-slate-300 mb-3 leading-relaxed">
              Ho una laurea in{" "}
              <span className="font-medium text-blue-200">
                Economia e Gestione Aziendale
              </span>
              , quindi ho anche una testa abbastanza quadrata per numeri,
              business e processi. Ora sto combinando queste due anime: quella
              del nerd che ama il codice e quella di chi vuole costruire cose
              utili per aziende e persone reali.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Non cerco il codice “figo” fine a sé stesso: mi interessa{" "}
              <span className="font-semibold text-blue-300">
                risolvere problemi concreti
              </span>
              , rendere più semplice comunicare, organizzare informazioni e
              prendere decisioni usando i dati.
            </p>
          </div>

          {/* Box riassunto */}
          <aside className="rounded-xl border border-slate-600 bg-slate-800/80 p-4 shadow-lg space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <AcademicCapIcon className="w-5 h-5 text-blue-300 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">
                  Background accademico
                </p>
                <p className="text-slate-300">
                  Diploma da ragioniere programmatore + Laurea in Economia e
                  Gestione Aziendale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <ChartBarIcon className="w-5 h-5 text-blue-300 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">
                  Dati & analitica
                </p>
                <p className="text-slate-300">
                  Esperienze con YouTube, Google Analytics, AdSense e strumenti
                  digitali per capire cosa funziona davvero.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CommandLineIcon className="w-5 h-5 text-blue-300 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">
                  Focus attuale
                </p>
                <p className="text-slate-300">
                  Sviluppo web, sistemi informativi e strumenti che aiutano
                  persone e aziende a comunicare meglio.
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* Sezione cosa credo / il futuro */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
            <RocketLaunchIcon className="w-6 h-6 text-blue-300" />
            Come vedo il futuro (e il mio ruolo lì dentro)
          </h2>
          <p className="text-slate-300 mb-3 leading-relaxed">
            Ormai usiamo app, siti e sistemi digitali per qualsiasi cosa:
            organizzare la giornata, parlare con gli amici, gestire soldi,
            lavoro, tempo libero. Nel mondo business sarà sempre più così, solo
            con numeri più grossi e conseguenze più serie.
          </p>
          <p className="text-slate-300 mb-3 leading-relaxed">
            Per me il valore sta in chi riesce a fare tre cose:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-300 mb-3">
            <li>capire il problema reale delle persone o dell’azienda,</li>
            <li>tradurlo in un sistema o un’app che abbia senso,</li>
            <li>saper comunicare in modo chiaro cosa succede dietro le quinte.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed">
            Io voglio essere quella persona: uno sviluppatore che scrive codice,
            ma che sa anche parlare con il resto del team, tradurre dati in
            decisioni e aiutare a costruire prodotti che non siano solo belli da
            vedere, ma utili da usare.
          </p>
        </section>

        {/* Mini call-to-action */}
        <section className="border-t border-slate-600 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-300 text-sm md:text-base">
            Se stai cercando qualcuno che unisce{" "}
            <span className="font-semibold text-blue-300">
              mentalità da dev, background economico
            </span>{" "}
            e curiosità infinita per il digitale…
          </p>
          <div className="flex gap-3">
            <a
              href="/cv"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Guarda il mio CV
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-500 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-700 transition"
            >
              Scrivimi
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
