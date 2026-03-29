'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

const DATES = [
  { date: '15 Mars 2026', info: '2026 · 10j · Paris CDG', seats: 4 },
  { date: '12 Avril 2026', info: '2026 · 10j · CDG/Lyon', seats: 8 },
  { date: '7 Juin 2026', info: '2026 · 10j · Paris CDG', seats: 12 },
  { date: '2 Août 2026', info: '2026 · 10j · CDG/Lyon', seats: 12 },
]

export default function Reservation() {
  const [step, setStep] = useState(1)
  const [selDate, setSelDate] = useState(null)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', tel: '', ville: '' })
  const [done, setDone] = useState(false)
  const [shake, setShake] = useState(false)

  const doShake = () => { setShake(true); setTimeout(() => setShake(false), 400) }

  const goTo = (s) => {
    if (s === 2 && !selDate) { doShake(); return }
    if (s === 3 && (!form.prenom || !form.email)) { doShake(); return }
    setStep(s)
  }

  const total = (adults + children) * 1990
  const acompte = (adults + children) * 300

  if (done) {
    return (
      <section id="reservation" className="py-32 px-14 bg-surface">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} className="max-w-[760px] mx-auto text-center py-20">
          <div className="w-[88px] h-[88px] rounded-full border-2 border-emerald flex items-center justify-center mx-auto mb-9">
            <svg className="w-10 h-10 stroke-emerald" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display font-light leading-tight mb-5 text-dark" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
            Barak Allahu<br /><em className="italic text-emerald">fikoum</em>
          </h2>
          <p className="text-sm font-light text-dark/50 leading-[1.9] max-w-[500px] mx-auto">
            Votre demande a été reçue. Nous vous contacterons dans 24h pour confirmer votre place.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="reservation" className="py-32 px-14 bg-surface">
      <div className="max-w-[760px] mx-auto">
        <Reveal className="text-center mb-16">
          <div className="flex items-center gap-3.5 mb-5 justify-center">
            <div className="w-9 h-px bg-emerald" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Réservation</span>
          </div>
          <h2 className="font-display text-dark font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
            Réservez en <em className="italic text-emerald">3 étapes</em>
          </h2>
        </Reveal>

        {/* Progress bar */}
        <div className="flex items-center justify-center my-14 max-w-[480px] mx-auto">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="contents">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-[42px] h-[42px] rounded-full border-2 flex items-center justify-center text-xs font-light transition-all duration-500 ${
                  step === n ? 'border-emerald text-emerald shadow-[0_0_28px_rgba(27,107,74,0.15)]' :
                  step > n ? 'bg-emerald border-emerald text-white font-medium' :
                  'border-dark/[0.1] text-dark/30'
                }`}>{n}</div>
                <span className={`text-[10px] tracking-[0.15em] uppercase font-light whitespace-nowrap ${step === n ? 'text-dark' : 'text-dark/40'}`}>
                  {['Date', 'Coordonnées', 'Récap'][i]}
                </span>
              </div>
              {i < 2 && <div className="flex-1 h-px max-w-[80px] mb-6 transition-colors duration-500" style={{ background: step > n ? 'var(--emerald)' : 'rgba(26,29,31,0.08)' }} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: shake ? [-12, 12, -12, 12, 0] : 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4 }}
          >
            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h3 className="font-display font-light mb-2.5 leading-tight text-dark" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Choisissez votre <em className="italic text-emerald">départ</em>
                </h3>
                <p className="text-[13px] font-light text-dark/50 mb-11 leading-[1.7]">Sélectionnez date et voyageurs.</p>

                <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Date de départ</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DATES.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelDate(d.date)}
                      className={`text-left border p-6 transition-all relative overflow-hidden rounded-sm ${
                        selDate === d.date ? 'border-emerald bg-emerald/[0.03]' : 'border-dark/[0.08] hover:border-emerald/30 bg-white'
                      }`}
                    >
                      {d.seats <= 8 && <span className="absolute top-3.5 right-3.5 text-[8px] tracking-[0.12em] uppercase px-2.5 py-1 bg-emerald/[0.06] border border-emerald/[0.15] text-emerald rounded-sm">{d.seats} places</span>}
                      <div className="font-display text-[30px] font-light text-dark leading-none mb-1">{d.date.split(' ').slice(0, 2).join(' ')}</div>
                      <div className="text-[11px] font-light text-dark/40 mb-3.5">{d.info}</div>
                      <div className="text-[9px] tracking-[0.18em] uppercase text-emerald font-medium">{d.seats} places</div>
                    </button>
                  ))}
                </div>

                <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5 mt-9">Voyageurs</label>
                {[
                  { label: 'Adultes', sub: '18+', value: adults, set: setAdults, min: 1 },
                  { label: 'Enfants', sub: '-18 ans', value: children, set: setChildren, min: 0 },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between px-6 py-5 border border-dark/[0.08] bg-white mb-2.5 rounded-sm">
                    <div><div className="text-sm font-light text-dark">{c.label}</div><div className="text-[11px] font-light text-dark/40 mt-0.5">{c.sub}</div></div>
                    <div className="flex items-center gap-5">
                      <button onClick={() => c.set(Math.max(c.min, c.value - 1))} className="w-[38px] h-[38px] border border-dark/[0.08] bg-transparent text-dark text-xl flex items-center justify-center hover:border-emerald hover:text-emerald transition-all cursor-pointer rounded-sm">−</button>
                      <span className="font-display text-[30px] font-light text-dark min-w-[24px] text-center">{c.value}</span>
                      <button onClick={() => c.set(c.value + 1)} className="w-[38px] h-[38px] border border-dark/[0.08] bg-transparent text-dark text-xl flex items-center justify-center hover:border-emerald hover:text-emerald transition-all cursor-pointer rounded-sm">+</button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end mt-10">
                  <button onClick={() => goTo(2)} className="bg-emerald text-white px-11 py-4 font-body text-[11px] tracking-[0.22em] uppercase cursor-pointer transition-all hover:shadow-[0_10px_36px_rgba(27,107,74,0.2)] hover:-translate-y-0.5 rounded-sm border-none">Continuer →</button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h3 className="font-display font-light mb-2.5 leading-tight text-dark" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Vos <em className="italic text-emerald">coordonnées</em>
                </h3>
                <p className="text-[13px] font-light text-dark/50 mb-11 leading-[1.7]">Informations confidentielles.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Prénom</label>
                    <input type="text" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} placeholder="Prénom" className="w-full px-5 py-4 border border-dark/[0.08] bg-white font-body text-[13px] font-light text-dark outline-none focus:border-emerald/40 transition-all placeholder:text-dark/[0.22] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Nom</label>
                    <input type="text" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} placeholder="Nom" className="w-full px-5 py-4 border border-dark/[0.08] bg-white font-body text-[13px] font-light text-dark outline-none focus:border-emerald/40 transition-all placeholder:text-dark/[0.22] rounded-sm" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="w-full px-5 py-4 border border-dark/[0.08] bg-white font-body text-[13px] font-light text-dark outline-none focus:border-emerald/40 transition-all placeholder:text-dark/[0.22] rounded-sm" />
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Téléphone</label>
                  <input type="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} placeholder="+33 6 xx xx xx xx" className="w-full px-5 py-4 border border-dark/[0.08] bg-white font-body text-[13px] font-light text-dark outline-none focus:border-emerald/40 transition-all placeholder:text-dark/[0.22] rounded-sm" />
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-dark/30 font-light mb-2.5">Ville de départ</label>
                  <select value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} className="w-full px-5 py-4 border border-dark/[0.08] bg-white font-body text-[13px] font-light text-dark outline-none focus:border-emerald/40 appearance-none cursor-pointer rounded-sm">
                    <option value="">Sélectionner</option>
                    <option>Paris (CDG)</option>
                    <option>Lyon (LYS)</option>
                    <option>Marseille</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="flex justify-between items-center mt-10">
                  <button onClick={() => goTo(1)} className="border border-dark/[0.08] text-dark/50 px-7 py-4 font-body text-[11px] tracking-[0.15em] uppercase cursor-pointer bg-transparent transition-all hover:border-dark/20 hover:text-dark rounded-sm">← Retour</button>
                  <button onClick={() => goTo(3)} className="bg-emerald text-white px-11 py-4 font-body text-[11px] tracking-[0.22em] uppercase cursor-pointer transition-all hover:shadow-[0_10px_36px_rgba(27,107,74,0.2)] hover:-translate-y-0.5 rounded-sm border-none">Continuer →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h3 className="font-display font-light mb-6 leading-tight text-dark" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Votre <em className="italic text-emerald">récapitulatif</em>
                </h3>

                <div className="border border-emerald/[0.15] p-9 mb-9 relative bg-white rounded-sm">
                  <div className="absolute top-[-1px] left-9 right-9 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }} />
                  <div className="font-display text-base font-medium text-emerald mb-5 tracking-[0.12em] uppercase">Package Omra — Mehdi Abu AbdiLleh</div>
                  {[
                    ['Date', selDate],
                    ['Voyageurs', `${adults} adulte${adults > 1 ? 's' : ''}${children ? ` + ${children} enfant${children > 1 ? 's' : ''}` : ''}`],
                    ['Durée', '10 jours'],
                    ['Acompte', `${acompte.toLocaleString('fr-FR')} €`],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between items-center py-2.5 border-b border-emerald/[0.06] text-[13px] font-light text-dark/[0.75]">
                      <span>{l}</span><span className="text-emerald font-medium">{v}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-5 font-display text-2xl font-medium text-dark">
                    <span>Total</span><span className="text-emerald">{total.toLocaleString('fr-FR')} €</span>
                  </div>
                </div>

                <button
                  onClick={() => setDone(true)}
                  className="w-full py-5 font-body text-[11px] font-medium tracking-[0.28em] uppercase cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(27,107,74,0.18)] text-white rounded-sm"
                  style={{ background: 'linear-gradient(135deg, var(--emerald), var(--emerald2))' }}
                >
                  Confirmer & payer l'acompte
                </button>
                <p className="text-center text-[11px] font-light text-dark/[0.25] mt-3.5">Paiement sécurisé · Annulation gratuite 60j avant</p>

                <div className="flex justify-center mt-5">
                  <button onClick={() => goTo(2)} className="border border-dark/[0.08] text-dark/50 px-7 py-4 font-body text-[11px] tracking-[0.15em] uppercase cursor-pointer bg-transparent transition-all hover:text-dark rounded-sm">← Modifier</button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
