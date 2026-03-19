'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const FEATURES = [
  'Vol aller-retour depuis Paris ou Lyon',
  'Hébergement 4★ Madinah + La Mecque',
  'Visa Omra pris en charge',
  'Tous les transferts sur place',
  'Encadrement par Mehdi Abu AbdiLleh',
  'Dourous quotidiens + visites savants',
  'Circuit lieux historiques + Hajj',
]

export default function Prix() {
  const smoothTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="tarif" className="py-32 px-14 bg-cabin text-center overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,168,75,0.035), transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3.5 mb-5 justify-center">
            <div className="w-9 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-light">Tarif unique</span>
          </div>
          <h2 className="font-display text-cream font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
            Un prix,<br /><em className="italic text-gold">zéro surprise</em>
          </h2>
        </Reveal>

        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mx-auto mt-20"
        >
          <div className="border border-gold/[0.22] p-[5px] relative">
            <div className="absolute top-[-1px] left-[-1px] w-[18px] h-[18px] border-t border-l border-gold" />
            <div className="absolute bottom-[-1px] right-[-1px] w-[18px] h-[18px] border-b border-r border-gold" />

            <div className="border border-white/[0.07] p-16 md:p-[70px_60px]" style={{ background: 'rgba(200,168,75,0.008)' }}>
              <div className="text-[10px] tracking-[0.45em] uppercase text-gold font-light mb-7">Package Omra complète — 10 jours</div>
              <div className="font-display font-light leading-none text-cream" style={{ fontSize: 'clamp(68px, 11vw, 110px)' }}>
                <span className="text-gold-2" style={{ fontSize: '0.5em', verticalAlign: 'middle' }}>€</span>1 990
              </div>
              <div className="text-[12px] font-extralight text-cream/50 tracking-[0.12em] mt-1.5 mb-11">à partir de · par personne · hors Ramadan</div>

              <ul className="text-left mb-13 space-y-0">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-4 py-3.5 border-b border-white/[0.07] last:border-b-0 text-[13px] font-extralight text-cream/[0.85]">
                    <svg className="w-4 h-4 stroke-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => smoothTo('reservation')}
                className="w-full py-6 font-body text-[11px] font-medium tracking-[0.28em] uppercase cursor-pointer border-none transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
                  color: 'var(--cabin)',
                  boxShadow: '0 0 0 rgba(200,168,75,0)',
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 28px 70px rgba(200,168,75,0.28)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 0 0 rgba(200,168,75,0)'}
              >
                Réserver maintenant
              </button>
              <p className="mt-4 text-[11px] font-extralight text-cream/[0.22]">Acompte 300 € · Solde 60 jours avant · Annulation gratuite</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
