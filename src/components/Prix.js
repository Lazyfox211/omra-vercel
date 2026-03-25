'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const FEATURES = [
  'Vol aller-retour depuis Paris ou Lyon',
  'Hébergement 5★ Madinah + La Mecque',
  'Visa Omra pris en charge',
  'Tous les transferts sur place',
  'Encadrement intégral par Mehdi Abu AbdiLleh',
  'Cours de fiqh (Tahara, Salat) avec dalil',
  'Visites mosquées, musées & lieux historiques',
  'Accompagnement achats & bons plans',
  'Sessions Q&R + visite des savants',
]

export default function Prix() {
  const smoothTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="tarif" className="py-32 px-14 bg-surface text-center overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(27,107,74,0.04), transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3.5 mb-5 justify-center">
            <div className="w-9 h-px bg-emerald" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Tarif unique</span>
          </div>
          <h2 className="font-display text-dark font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
            Un prix,<br /><em className="italic text-emerald">zéro surprise</em>
          </h2>
        </Reveal>

        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mx-auto mt-20"
        >
          <div className="border border-emerald/[0.18] p-[5px] relative rounded-sm">
            <div className="absolute top-[-1px] left-[-1px] w-[18px] h-[18px] border-t-2 border-l-2 border-emerald rounded-tl-sm" />
            <div className="absolute bottom-[-1px] right-[-1px] w-[18px] h-[18px] border-b-2 border-r-2 border-emerald rounded-br-sm" />

            <div className="border border-emerald/[0.06] p-16 md:p-[70px_60px] bg-white rounded-sm">
              <div className="text-[10px] tracking-[0.45em] uppercase text-emerald font-medium mb-7">Package Omra complète — 10 jours</div>
              <div className="font-display font-light leading-none text-dark" style={{ fontSize: 'clamp(68px, 11vw, 110px)' }}>
                <span className="text-emerald" style={{ fontSize: '0.5em', verticalAlign: 'middle' }}>€</span>1 990
              </div>
              <div className="text-[12px] font-light text-dark/40 tracking-[0.12em] mt-1.5 mb-11">à partir de · par personne · hors Ramadan</div>

              <ul className="text-left mb-13 space-y-0">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-4 py-3.5 border-b border-emerald/[0.06] last:border-b-0 text-[13px] font-light text-dark/[0.75]">
                    <svg className="w-4 h-4 stroke-emerald flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => smoothTo('reservation')}
                className="w-full py-6 font-body text-[11px] font-medium tracking-[0.28em] uppercase cursor-pointer border-none transition-all hover:-translate-y-0.5 text-white rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, var(--emerald), var(--emerald2))',
                  boxShadow: '0 0 0 rgba(27,107,74,0)',
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 28px 70px rgba(27,107,74,0.22)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 0 0 rgba(27,107,74,0)'}
              >
                Réserver maintenant
              </button>
              <p className="mt-4 text-[11px] font-light text-dark/[0.25]">Acompte 300 € · Solde 60 jours avant · Annulation gratuite</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
