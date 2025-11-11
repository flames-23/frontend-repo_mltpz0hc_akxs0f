import { useState } from 'react'
import { Rocket, LineChart, Megaphone, Users, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const services = [
    {
      icon: <Megaphone className="h-6 w-6 text-blue-600" />,
      title: 'Campagne Ads',
      desc: 'Strategia, creatività e ottimizzazione su Google, Meta e LinkedIn.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: 'SEO & Content',
      desc: 'Contenuti che posizionano e performance tecniche che scalano.'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Social & Community',
      desc: 'Piani editoriali, community management e brand awareness.'
    },
    {
      icon: <Rocket className="h-6 w-6 text-blue-600" />,
      title: 'Growth & Analytics',
      desc: 'Cresco il tuo funnel con sperimentazioni e metriche chiare.'
    },
  ]

  const cases = [
    {
      logo: 'A',
      title: 'E-commerce Fashion',
      result: '+220% ROAS in 6 mesi',
      tags: ['Meta Ads', 'UGC', 'Email']
    },
    {
      logo: 'B',
      title: 'SaaS B2B',
      result: '3x demo mensili',
      tags: ['LinkedIn', 'SEO', 'ABM']
    },
    {
      logo: 'C',
      title: 'EdTech',
      result: '+120% iscrizioni',
      tags: ['Google Ads', 'Landing', 'Analytics']
    },
  ]

  const testimonials = [
    {
      name: 'Giulia R.',
      role: 'CMO, Brand Fashion',
      quote: 'Un partner vero: numeri alla mano, creatività e velocità di esecuzione.'
    },
    {
      name: 'Marco P.',
      role: 'CEO, SaaS B2B',
      quote: 'Hanno costruito un funnel che finalmente converte. Report chiari ogni settimana.'
    },
    {
      name: 'Sara L.',
      role: 'Head of Growth, EdTech',
      quote: 'Squadra affidabile e proattiva. Risultati tangibili in breve tempo.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">
            <span className="text-blue-600">Blue</span>Marketing
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servizi" className="hover:text-blue-600">Servizi</a>
            <a href="#casi" className="hover:text-blue-600">Casi</a>
            <a href="#testimonianze" className="hover:text-blue-600">Testimonianze</a>
            <a href="#contatti" className="hover:text-blue-600">Contatti</a>
            <a href="#contatti" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition shadow-sm">
              Parla con noi
            </a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Apri menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-2 space-y-2">
              {['servizi','casi','testimonianze','contatti'].map((id) => (
                <a key={id} href={`#${id}`} className="block px-2 py-2 rounded hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <CheckCircle className="h-4 w-4" />
                Agenzia di performance marketing
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Cresciamo il tuo brand con strategie che convertono
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Dalla strategia all'esecuzione: campagne, contenuti e ottimizzazioni guidate dai dati per aumentare vendite e lead.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contatti" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition shadow-sm">
                  Richiedi una consulenza gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#casi" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
                  Scopri i nostri risultati
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600"/>Nessun vincolo minimo</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600"/>Report settimanali</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600"/>Team senior</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-lg">
                <div className="h-full w-full rounded-lg bg-white grid grid-cols-2">
                  <div className="p-6 border-r border-slate-100 flex flex-col justify-center">
                    <h3 className="font-semibold text-slate-900">+178% Lead</h3>
                    <p className="text-sm text-slate-600">in 90 giorni per un SaaS B2B</p>
                    <div className="mt-4 h-28 w-full bg-gradient-to-t from-blue-100 to-blue-300 rounded" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-semibold text-slate-900">ROAS 5.2x</h3>
                    <p className="text-sm text-slate-600">per e-commerce fashion</p>
                    <div className="mt-4 h-28 w-full bg-gradient-to-t from-indigo-100 to-indigo-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Cosa facciamo</h2>
              <p className="mt-3 text-slate-600">Soluzioni su misura per accelerare la crescita del tuo business.</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casi studio */}
        <section id="casi" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Casi studio</h2>
              <p className="mt-3 text-slate-600">Risultati reali ottenuti con i nostri clienti.</p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{c.logo}</div>
                  <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.result}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonianze */}
        <section id="testimonianze" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Cosa dicono di noi</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-slate-700">“{t.quote}”</p>
                  <div className="mt-4 text-sm text-slate-500">{t.name} • {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Contatti */}
        <section id="contatti" className="py-20 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Parliamo dei tuoi obiettivi</h2>
              <p className="mt-3 text-slate-300">Scrivici e ti risponderemo entro 24 ore con una proposta concreta.</p>
              <div className="mt-6 space-y-3 text-slate-300">
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-400"/> info@bluemarketing.it</div>
                <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-400"/> +39 02 0000 0000</div>
              </div>
            </div>
            <div>
              <form onSubmit={(e)=>{e.preventDefault(); alert('Grazie! Ti contatteremo a breve.')}} className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome</label>
                    <input required className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" required className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="nome@azienda.it" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Messaggio</label>
                  <textarea required rows={4} className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Raccontaci del tuo progetto" />
                </div>
                <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition w-full sm:w-auto">
                  Invia richiesta
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} BlueMarketing — P.IVA 00000000000
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Cookie</a>
            <a href="#contatti" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600"><Mail className="h-4 w-4"/> Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
