'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const SERVICES = [
  { num: '01', title: 'Vol aller-retour', desc: 'Paris CDG ou Lyon. Compagnie aérienne premium. Transferts aéroport inclus.', tag: 'Depuis la France', icon: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z' },
  { num: '02', title: 'Hôtel ultra luxe', desc: 'Hôtels 5★ à proximité immédiate des mosquées saintes. Confort optimal.', tag: 'Proximité Haram', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
  { num: '03', title: 'Visa Omra', desc: 'Démarches 100% prises en charge par notre équipe.', tag: 'Zéro tracas', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { num: '04', title: 'Cours de Fiqh', desc: 'Programme complet : Tahara, Salat, avec dalil sur chaque acte de la Omra.', tag: 'Apprentissage', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { num: '05', title: 'Visites des mosquées', desc: 'Masjid Quba, Masjid Qiblatain, Masjid An-Nabawi. Circuit complet guidé.', tag: 'Guidé par Mehdi', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z' },
  { num: '06', title: 'Musées & lieux historiques', desc: 'Visite guidée des musées sur la vie du Prophète ﷺ. Jabal An-Nour, Jabal Thawr.', tag: 'Culture & histoire', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { num: '07', title: 'Bons plans achats', desc: 'Accompagnement pour les achats : qamis sur mesure, livres, souvenirs aux meilleurs prix.', tag: 'Conseils exclusifs', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { num: '08', title: 'Sessions Q&R', desc: 'Questions/réponses quotidiennes. Visite des savants selon disponibilités.', tag: 'Accès privilégié', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
]

function Card({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white p-10 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex justify-between items-start mb-7">
          <span className="font-display text-[13px] text-dark/[0.12]">{service.num}</span>
          <svg className="w-11 h-11 stroke-emerald group-hover:stroke-emerald-2 transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d={service.icon} />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-medium mb-3 leading-tight text-dark">{service.title}</h3>
        <p className="text-[12px] font-light text-dark/50 leading-[1.85]">{service.desc}</p>
        <span className="inline-block mt-5 text-[9px] tracking-[0.18em] uppercase px-3.5 py-1.5 border border-emerald/[0.18] text-emerald rounded-sm">
          {service.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Includes() {
  return (
    <section id="inclus" className="py-32 px-14 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-20">
          <Reveal>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-emerald" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Le package complet</span>
            </div>
            <h2 className="font-display text-dark font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
              Tout est <em className="italic text-emerald">inclus</em>,<br />rien n'est caché
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] font-light text-dark/50 leading-[1.9] max-w-[420px]">
              Un prix unique. Huit prestations premium. Zéro surprise à l'aéroport, zéro option payante sur place.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-emerald/[0.06]">
          {SERVICES.map((s, i) => (
            <Card key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
