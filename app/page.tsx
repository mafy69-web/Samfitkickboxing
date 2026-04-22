import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-red-950 via-black to-black px-6 py-20 text-center md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.22),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="inline-block rounded-full border border-red-800 bg-red-950/50 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            Bod Colonie
          </div>

          <h1 className="mt-8 text-5xl font-black uppercase leading-tight tracking-tight text-red-500 md:text-7xl lg:text-8xl">
            SAM FIT Kickboxing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold text-white md:text-2xl">
            Antrenamente de kickboxing pentru copii, adolescenți și adulți,
            într-un cadru organizat și motivant.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-red-900/40 bg-zinc-950 p-6 shadow-xl shadow-red-950/10">
              <p className="text-4xl font-black text-red-500 md:text-5xl">250</p>
              <p className="mt-2 text-lg font-bold">lei / lună</p>
              <p className="mt-2 text-sm text-zinc-400">abonament lunar</p>
            </div>

            <div className="rounded-3xl border border-red-900/40 bg-zinc-950 p-6 shadow-xl shadow-red-950/10">
              <p className="text-4xl font-black text-red-500 md:text-5xl">3</p>
              <p className="mt-2 text-lg font-bold">antrenamente / săptămână</p>
              <p className="mt-2 text-sm text-zinc-400">pentru ritm și progres</p>
            </div>

            <div className="rounded-3xl border border-red-900/40 bg-zinc-950 p-6 shadow-xl shadow-red-950/10">
              <p className="text-4xl font-black text-red-500 md:text-5xl">2</p>
              <p className="mt-2 text-lg font-bold">grupe disponibile</p>
              <p className="mt-2 text-sm text-zinc-400">program clar organizat</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#program"
              className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:bg-red-500"
            >
              Vezi programul
            </a>

            <a
              href="#antrenor"
              className="rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-black uppercase tracking-wide text-zinc-100 transition hover:bg-zinc-900"
            >
              Despre antrenor
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
            Beneficii
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
            Ce găsești aici
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-xl shadow-black/30">
            <div className="text-4xl">🥊</div>
            <h3 className="mt-5 text-2xl font-black">Tehnică</h3>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              Lucrezi bazele kickboxing-ului într-un mod clar și progresiv.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-xl shadow-black/30">
            <div className="text-4xl">💪</div>
            <h3 className="mt-5 text-2xl font-black">Pregătire fizică</h3>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              Îți dezvolți forța, rezistența, coordonarea și mobilitatea.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-xl shadow-black/30">
            <div className="text-4xl">🧠</div>
            <h3 className="mt-5 text-2xl font-black">Disciplină</h3>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              Înveți constanță, control și seriozitate în antrenament.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-xl shadow-black/30">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-5 text-2xl font-black">Încredere</h3>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              Câștigi siguranță în tine prin muncă, ritm și progres real.
            </p>
          </div>
        </div>
      </section>

      <section
        id="antrenor"
        className="border-y border-zinc-900 bg-zinc-950/70 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Antrenor
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Sebi Gal
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Antrenamentele sunt coordonate de <span className="font-bold text-white">Sebi Gal</span>,
              într-un stil energic și bine organizat, cu accent pe disciplină,
              tehnică și progres constant.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
              Fiecare ședință este construită astfel încât participanții să își
              dezvolte abilitățile pas cu pas, într-un ritm potrivit nivelului lor.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-red-900/40 bg-black p-6 shadow-xl shadow-red-950/10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Stil
              </p>
              <p className="mt-3 text-2xl font-black text-red-400">
                Clar și disciplinat
              </p>
            </div>

            <div className="rounded-3xl border border-red-900/40 bg-black p-6 shadow-xl shadow-red-950/10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Nivel
              </p>
              <p className="mt-3 text-2xl font-black text-red-400">
                Începători și avansați
              </p>
            </div>

            <div className="rounded-3xl border border-red-900/40 bg-black p-6 shadow-xl shadow-red-950/10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Focus
              </p>
              <p className="mt-3 text-2xl font-black text-red-400">
                Tehnică și progres
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Program
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Alege grupa potrivită
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-red-900/40 bg-black p-8 shadow-2xl shadow-red-950/10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black text-red-400">Grupa 1</h3>
                <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-black uppercase">
                  Locuri active
                </span>
              </div>

              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Marți</span>
                  <span className="text-2xl font-black text-red-400">16:00</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Joi</span>
                  <span className="text-2xl font-black text-red-400">16:00</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Sâmbătă</span>
                  <span className="text-2xl font-black text-red-400">13:00</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-red-900/40 bg-black p-8 shadow-2xl shadow-red-950/10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black text-red-400">Grupa 2</h3>
                <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-black uppercase">
                  Locuri active
                </span>
              </div>

              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Joi</span>
                  <span className="text-2xl font-black text-red-400">20:00</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Sâmbătă</span>
                  <span className="text-2xl font-black text-red-400">13:00</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                  <span className="font-bold">Duminică</span>
                  <span className="text-2xl font-black text-red-400">13:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
              Antrenor
            </p>
            <p className="mt-4 text-3xl font-black text-red-400">Sebi Gal</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
              Locație
            </p>
            <p className="mt-4 text-3xl font-black text-red-400">Bod Colonie</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
              Înscrieri
            </p>
            <p className="mt-4 text-3xl font-black text-red-400">Mesaj privat</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-red-900/40 bg-gradient-to-r from-red-700 to-red-600 px-8 py-10 text-center shadow-2xl shadow-red-950/20 md:px-12 md:py-14">
          <h2 className="text-3xl font-black uppercase md:text-5xl">
            Începe acum antrenamentele
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg font-medium text-red-50 md:text-2xl">
            Vino la SAM FIT Kickboxing și antrenează-te într-un cadru serios,
            motivant și orientat spre rezultate.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/samfitkickboxing"
              target="_blank"
              className="rounded-2xl bg-black px-8 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:bg-zinc-900"
            >
              Intră pe Instagram
            </Link>

            <a
              href="#program"
              className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Vezi programul
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}