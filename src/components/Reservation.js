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
      <section id="reservation" className="py-32 px-14 bg-cabin-2">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} className="max-w-[760px] mx-auto text-center py-20">
          <div className="w-[88px] h-[88px] rounded-full border border-gold flex items-center justify-center mx-auto mb-9">
            <span className="text-3xl text-gold">✓</span>
          </div>
          <h2 className="font-display font-light leading-tight mb-5" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
            Barak Allahu<br /><em className="italic text-gold">fikoum</em>
          </h2>
          <p className="text-sm font-extralight text-cream/50 leading-[1.9] max-w-[500px] mx-auto">
            Votre demande a été reçue. Nous vous contacterons dans 24h pour confirmer votre place.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="reservation" className="py-32 px-14 bg-cabin-2">
      <div className="max-w-[760px] mx-auto">
        <Reveal className="text-center mb-16">
          <div className="flex items-center gap-3.5 mb-5 justify-center">
            <div className="w-9 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-light">Réservation</span>
          </div>
          <h2 className="font-display text-cream font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
            Réservez en <em className="italic text-gold">3 étapes</em>
          </h2>
        </Reveal>

        {/* Progress bar */}
        <div className="flex items-center justify-center my-14 max-w-[480px] mx-auto">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="contents">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-[42px] h-[42px] rounded-full border flex items-center justify-center text-xs font-light transition-all duration-500 ${
                  step === n ? 'border-gold text-gold shadow-[0_0_28px_rgba(200,168,75,0.2)]' :
                  step > n ? 'bg-gold border-gold text-cabin font-medium' :
                  'border-white/[0.07] text-cream/50'
                }`}>{n}</div>
                <span className={`text-[10px] tracking-[0.15em] uppercase font-light whitespace-nowrap ${step === n ? 'text-cream' : 'text-cream/50'}`}>
                  {['Date', 'Coordonnées', 'Récap'][i]}
                </span>
              </div>
              {i < 2 && <div className="flex-1 h-px max-w-[80px] mb-6 transition-colors duration-500" style={{ background: step > n ? 'var(--gold)' : 'rgba(240,237,228,0.07)' }} />}
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
                <h3 className="font-display font-light mb-2.5 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Choisissez votre <em className="italic text-gold">départ</em>
                </h3>
                <p className="text-[13px] font-extralight text-cream/50 mb-11 leading-[1.7]">Sélectionnez date et voyageurs.</p>

                <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Date de départ</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DATES.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelDate(d.date)}
                      className={`text-left border p-6 transition-all relative overflow-hidden ${
                        selDate === d.date ? 'border-gold bg-gold/[0.04]' : 'border-white/[0.07] hover:border-gold/30'
                      }`}
                      style={{ background: selDate === d.date ? 'rgba(200,168,75,0.04)' : 'transparent' }}
                    >
                      {d.seats <= 8 && <span className="absolute top-3.5 right-3.5 text-[8px] tracking-[0.12em] uppercase px-2.5 py-1 bg-gold/[0.08] border border-gold/[0.18] text-gold">{d.seats} places</span>}
                      <div className="font-display text-[30px] font-light text-cream leading-none mb-1">{d.date.split(' ').slice(0, 2).join(' ')}</div>
                      <div className="text-[11px] font-extralight text-cream/50 mb-3.5">{d.info}</div>
                      <div className="text-[9px] tracking-[0.18em] uppercase text-gold font-light">{d.seats} places</div>
                    </button>
                  ))}
                </div>

                <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5 mt-9">Voyageurs</label>
                {[
                  { label: 'Adultes', sub: '18+', value: adults, set: setAdults, min: 1 },
                  { label: 'Enfants', sub: '-18 ans', value: children, set: setChildren, min: 0 },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between px-6 py-5 border border-white/[0.07] bg-white/[0.015] mb-2.5">
                    <div><div className="text-sm font-light text-cream">{c.label}</div><div className="text-[11px] font-extralight text-cream/50 mt-0.5">{c.sub}</div></div>
                    <div className="flex items-center gap-5">
                      <button onClick={() => c.set(Math.max(c.min, c.value - 1))} className="w-[38px] h-[38px] border border-white/[0.07] bg-transparent text-cream text-xl flex items-center justify-center hover:border-gold hover:text-gold transition-all cursor-pointer">−</button>
                      <span className="font-display text-[30px] font-light text-cream min-w-[24px] text-center">{c.value}</span>
                      <button onClick={() => c.set(c.value + 1)} className="w-[38px] h-[38px] border border-white/[0.07] bg-transparent text-cream text-xl flex items-center justify-center hover:border-gold hover:text-gold transition-all cursor-pointer">+</button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end mt-10">
                  <button onClick={() => goTo(2)} className="bg-cabin-3 border border-gold/30 text-gold px-11 py-4 font-body text-[11px] tracking-[0.22em] uppercase cursor-pointer transition-all hover:border-gold hover:shadow-[0_10px_36px_rgba(200,168,75,0.15)]">Continuer →</button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h3 className="font-display font-light mb-2.5 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Vos <em className="italic text-gold">coordonnées</em>
                </h3>
                <p className="text-[13px] font-extralight text-cream/50 mb-11 leading-[1.7]">Informations confidentielles.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Prénom</label>
                    <input type="text" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} placeholder="Prénom" className="w-full px-5 py-4 border border-white/[0.07] bg-white/[0.025] font-body text-[13px] font-extralight text-cream outline-none focus:border-gold/40 focus:bg-gold/[0.025] transition-all placeholder:text-cream/[0.22]" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Nom</label>
                    <input type="text" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} placeholder="Nom" className="w-full px-5 py-4 border border-white/[0.07] bg-white/[0.025] font-body text-[13px] font-extralight text-cream outline-none focus:border-gold/40 focus:bg-gold/[0.025] transition-all placeholder:text-cream/[0.22]" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="w-full px-5 py-4 border border-white/[0.07] bg-white/[0.025] font-body text-[13px] font-extralight text-cream outline-none focus:border-gold/40 focus:bg-gold/[0.025] transition-all placeholder:text-cream/[0.22]" />
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Téléphone</label>
                  <input type="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} placeholder="+33 6 xx xx xx xx" className="w-full px-5 py-4 border border-white/[0.07] bg-white/[0.025] font-body text-[13px] font-extralight text-cream outline-none focus:border-gold/40 focus:bg-gold/[0.025] transition-all placeholder:text-cream/[0.22]" />
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-cream/[0.22] font-light mb-2.5">Ville de départ</label>
                  <select value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} className="w-full px-5 py-4 border border-white/[0.07] bg-white/[0.025] font-body text-[13px] font-extralight text-cream outline-none focus:border-gold/40 appearance-none cursor-pointer" style={{ background: 'rgba(240,237,228,0.025)' }}>
                    <option value="" style={{ background: '#1E1F24' }}>Sélectionner</option>
                    <option style={{ background: '#1E1F24' }}>Paris (CDG)</option>
                    <option style={{ background: '#1E1F24' }}>Lyon (LYS)</option>
                    <option style={{ background: '#1E1F24' }}>Marseille</option>
                    <option style={{ background: '#1E1F24' }}>Autre</option>
                  </select>
                </div>

                <div className="flex justify-between items-center mt-10">
                  <button onClick={() => goTo(1)} className="border border-white/[0.07] text-cream/50 px-7 py-4 font-body text-[11px] tracking-[0.15em] uppercase cursor-pointer bg-transparent transition-all hover:border-cream/20 hover:text-cream">← Retour</button>
                  <button onClick={() => goTo(3)} className="bg-cabin-3 border border-gold/30 text-gold px-11 py-4 font-body text-[11px] tracking-[0.22em] uppercase cursor-pointer transition-all hover:border-gold hover:shadow-[0_10px_36px_rgba(200,168,75,0.15)]">Continuer →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h3 className="font-display font-light mb-6 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Votre <em className="italic text-gold">récapitulatif</em>
                </h3>

                <div className="border border-gold/[0.18] p-9 mb-9 relative" style={{ background: 'rgba(200,168,75,0.015)' }}>
                  <div className="absolute top-[-1px] left-9 right-9 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                  <div className="font-display text-base font-normal text-gold mb-5 tracking-[0.12em] uppercase">Package Omra — Mehdi Abu AbdiLleh</div>
                  {[
                    ['Date', selDate],
                    ['Voyageurs', `${adults} adulte${adults > 1 ? 's' : ''}${children ? ` + ${children} enfant${children > 1 ? 's' : ''}` : ''}`],
                    ['Durée', '10 jours'],
                    ['Acompte', `${acompte.toLocaleString('fr-FR')} €`],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between items-center py-2.5 border-b border-white/[0.07] text-[13px] font-extralight text-cream/[0.85]">
                      <span>{l}</span><span className="text-gold">{v}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-5 font-display text-2xl font-normal text-cream">
                    <span>Total</span><span className="text-gold">{total.toLocaleString('fr-FR')} €</span>
                  </div>
                </div>

                <button
                  onClick={() => setDone(true)}
                  className="w-full py-5 font-body text-[11px] font-medium tracking-[0.28em] uppercase cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(200,168,75,0.22)]"
                  style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold2))', color: 'var(--cabin)' }}
                >
                  Confirmer & payer l'acompte
                </button>
                <p className="text-center text-[11px] font-extralight text-cream/[0.22] mt-3.5">Paiement sécurisé · Annulation gratuite 60j avant</p>

                <div className="flex justify-center mt-5">
                  <button onClick={() => goTo(2)} className="border border-white/[0.07] text-cream/50 px-7 py-4 font-body text-[11px] tracking-[0.15em] uppercase cursor-pointer bg-transparent transition-all hover:text-cream">← Modifier</button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
