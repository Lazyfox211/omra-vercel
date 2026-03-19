'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'

const SERVICES = [
  { num: '01', title: 'Vol aller-retour', desc: 'Paris CDG ou Lyon. Saudia Airlines. Transferts aéroport inclus.', tag: 'Depuis la France', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.93 19.79 19.79 0 01.07 4.3 2 2 0 012.06 2.1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' },
  { num: '02', title: 'Hébergement 4★', desc: 'À 5 min à pied des mosquées saintes.', tag: 'Proximité immédiate', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
  { num: '03', title: 'Visa Omra', desc: 'Démarches 100% prises en charge.', tag: 'Prise en charge totale', icon: 'M2 4h20v16H2z' },
  { num: '04', title: 'Mehdi Abu AbdiLleh', desc: 'Encadrement 100% du départ au retour.', tag: 'Exclusif', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
  { num: '05', title: 'Dourous quotidiens', desc: 'Cours matin et soir sur les lieux saints.', tag: 'Chaque jour', icon: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z' },
  { num: '06', title: 'Visites des savants', desc: 'Rencontres oulémas. Sessions Q&A.', tag: 'Accès privilégié', icon: 'M12 8a6 6 0 100-12 6 6 0 000 12z' },
  { num: '07', title: 'Lieux historiques', desc: 'Jabal an-Nour, Jabal Thawr, al-Baqi.', tag: 'Circuit complet', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' },
  { num: '08', title: 'Circuit du Hajj', desc: 'Mina, Arafah, Muzdalifah.', tag: 'Sur les lieux', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
]

function Card({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-cabin-2 p-10 relative overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-cabin-3"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex justify-between items-start mb-7">
          <span className="font-display text-[13px] text-cream/[0.15]">{service.num}</span>
          <svg className="w-11 h-11 stroke-gold group-hover:stroke-gold-2 transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="1">
            <path d={service.icon} />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-normal mb-3 leading-tight text-cream">{service.title}</h3>
        <p className="text-[12px] font-extralight text-cream/50 leading-[1.85]">{service.desc}</p>
        <span className="inline-block mt-5 text-[9px] tracking-[0.18em] uppercase px-3.5 py-1 border border-gold/[0.22] text-gold">
          {service.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Includes() {
  return (
    <section id="inclus" className="py-32 px-14 bg-cabin-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-20">
          <Reveal>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-light">Le package complet</span>
            </div>
            <h2 className="font-display text-cream font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
              Tout est <em className="italic text-gold">inclus</em>,<br />rien n'est caché
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] font-extralight text-cream/50 leading-[1.9] max-w-[420px]">
              Un prix unique. Neuf prestations. Zéro surprise à l'aéroport, zéro option payante sur place.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
          {SERVICES.map((s, i) => (
            <Card key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
