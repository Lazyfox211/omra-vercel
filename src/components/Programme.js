'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const DAYS = [
  { num: 'Jour 1', title: 'Départ & arrivée à Madinah', desc: 'Vol depuis Paris CDG ou Lyon. Installation hôtel 4★. Premier dourus.', tags: ['Vol', 'Transfert'] },
  { num: 'Jours 2–4', title: 'Madinah — La Cité du Prophète ﷺ', desc: 'Masjid an-Nabawi, al-Baqi, Masjid al-Quba. Rencontre savant local.', tags: ['Visites', 'Savant', 'Dourous'] },
  { num: 'Jour 5', title: 'Accomplissement de la Omra', desc: 'Ihram, Tawaf, Sa\'i, Tahallul — accompagné par Mehdi.', tags: ['Ihram', 'Tawaf', 'Sa\'i'] },
  { num: 'Jours 6–8', title: 'La Mecque — Au cœur de l\'islam', desc: 'Circuit Hajj : Mina, Arafah, Muzdalifah. Jabal an-Nour.', tags: ['Circuit Hajj', 'Jabal an-Nour'] },
  { num: 'Jour 9', title: 'Rencontre des savants', desc: 'Session Q&A avec oulémas de La Mecque.', tags: ['Oulémas', 'Exclusif'] },
  { num: 'Jour 10', title: 'Tawaf al-Wadaa & retour', desc: 'Tawaf d\'adieu. Vol retour. Vous rentrez transformé.', tags: ['Tawaf', 'Vol retour'] },
]

function DayCard({ day, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.05 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[48px_1fr] gap-7 py-8 border-b border-white/[0.07] cursor-pointer transition-all hover:pl-4 group"
    >
      <div className="flex flex-col items-center pt-1">
        <div className="w-[11px] h-[11px] rounded-full border border-gold bg-cabin-2 transition-all group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,168,75,0.5)] z-[1] flex-shrink-0" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.22em] uppercase text-gold font-light mb-2">{day.num}</div>
        <div className="font-display text-[25px] font-normal mb-2.5 leading-tight">{day.title}</div>
        <div className="text-[12px] font-extralight text-cream/50 leading-[1.85]">{day.desc}</div>
        <div className="flex gap-1.5 mt-3.5 flex-wrap">
          {day.tags.map((t) => (
            <span key={t} className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-white/[0.07] text-cream/[0.22]">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Programme() {
  return (
    <section id="programme" className="py-32 px-14 bg-cabin-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20 items-end">
          <Reveal>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-light">Déroulé complet</span>
            </div>
            <h2 className="font-display text-cream font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
              10 jours<br /><em className="italic text-gold">transformateurs</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] font-extralight text-cream/50 leading-[1.9]">
              Chaque journée équilibre spiritualité, apprentissage et immersion.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, var(--gold), var(--cream2) 50%, transparent)' }} />
          {DAYS.map((d, i) => <DayCard key={d.num} day={d} index={i} />)}
        </div>
      </div>
    </section>
  )
}
