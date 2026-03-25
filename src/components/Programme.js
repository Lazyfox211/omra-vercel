'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const DAYS = [
  { num: 'Jour 1', title: 'Départ & arrivée à Madinah', desc: 'Vol depuis Paris CDG ou Lyon. Installation hôtel 5★ à proximité du Haram. Premier cours d\'introduction aux rites.', tags: ['Vol', 'Hôtel 5★'] },
  { num: 'Jours 2–4', title: 'Madinah — La Cité du Prophète ﷺ', desc: 'Visite de Masjid An-Nabawi, Masjid Quba, Masjid Qiblatain. Cours de fiqh Tahara & Salat avec dalil. Visite guidée des musées sur la vie du Prophète ﷺ.', tags: ['Mosquées', 'Fiqh', 'Musées'] },
  { num: 'Jour 5', title: 'Accomplissement de la Omra', desc: 'Ihram, Tawaf, Sa\'i, Tahallul — chaque acte accompagné avec ses preuves. Encadrement pas à pas par Mehdi.', tags: ['Ihram', 'Tawaf', 'Sa\'i'] },
  { num: 'Jours 6–8', title: 'La Mecque — Au cœur de l\'islam', desc: 'Circuit des lieux du Hajj : Mina, Arafah, Muzdalifah. Jabal An-Nour, Jabal Thawr. Accompagnement achats : qamis sur mesure, livres aux meilleurs prix.', tags: ['Lieux historiques', 'Bons plans'] },
  { num: 'Jour 9', title: 'Savants & sessions Q&R', desc: 'Visite des savants en fonction de leurs disponibilités. Session questions/réponses. Recommandations livres et librairies.', tags: ['Savants', 'Q&R', 'Livres'] },
  { num: 'Jour 10', title: 'Tawaf al-Wadaa & retour', desc: 'Tawaf d\'adieu. Derniers achats et bons plans. Vol retour vers la France. Vous rentrez transformé.', tags: ['Tawaf', 'Vol retour'] },
]

function DayCard({ day, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.05 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[48px_1fr] gap-7 py-8 border-b border-emerald/[0.08] cursor-pointer transition-all hover:pl-4 group"
    >
      <div className="flex flex-col items-center pt-1">
        <div className="w-[11px] h-[11px] rounded-full border-2 border-emerald bg-surface transition-all group-hover:bg-emerald group-hover:shadow-[0_0_20px_rgba(27,107,74,0.4)] z-[1] flex-shrink-0" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.22em] uppercase text-emerald font-medium mb-2">{day.num}</div>
        <div className="font-display text-[25px] font-medium mb-2.5 leading-tight text-dark">{day.title}</div>
        <div className="text-[12px] font-light text-dark/50 leading-[1.85]">{day.desc}</div>
        <div className="flex gap-1.5 mt-3.5 flex-wrap">
          {day.tags.map((t) => (
            <span key={t} className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-emerald/[0.12] text-emerald/70 rounded-sm">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Programme() {
  return (
    <section id="programme" className="py-32 px-14 bg-surface-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20 items-end">
          <Reveal>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-emerald" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Déroulé complet</span>
            </div>
            <h2 className="font-display text-dark font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
              10 jours<br /><em className="italic text-emerald">transformateurs</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] font-light text-dark/50 leading-[1.9]">
              Chaque journée équilibre spiritualité, apprentissage et immersion. Cours de fiqh, visites guidées, bons plans et accompagnement permanent.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, var(--emerald), var(--emerald3) 50%, transparent)' }} />
          {DAYS.map((d, i) => <DayCard key={d.num} day={d} index={i} />)}
        </div>
      </div>
    </section>
  )
}
