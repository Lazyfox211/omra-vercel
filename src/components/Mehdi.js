'use client'

import Reveal from './Reveal'

const TAGS = [
  'Supervision de A à Z', 'Cours de fiqh quotidiens', 'Accompagnement des rites',
  'Dalil sur chaque acte', 'Groupe limité à 25', 'Résolution de tout imprévu',
  'Bons plans & achats', 'Sessions Q&R',
]

export default function Mehdi() {
  return (
    <section id="mehdi" className="py-32 px-14 bg-surface-2 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-24 items-center">
          {/* Photo placeholder */}
          <Reveal className="hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <div className="absolute inset-0 border border-emerald/[0.12] z-[2] pointer-events-none rounded-sm" />
              <div className="absolute z-[2] pointer-events-none rounded-sm" style={{ inset: '14px', border: '1px solid rgba(27,107,74,0.06)' }} />
              <div className="w-full h-full bg-gradient-to-br from-emerald-light via-surface to-surface-2 flex items-center justify-center">
                <span className="font-display text-[180px] font-light" style={{
                  background: 'linear-gradient(135deg, rgba(27,107,74,0.18), rgba(27,107,74,0.06))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald text-white px-7 py-5 text-[10px] font-medium tracking-[0.12em] uppercase rounded-sm">
                Encadrant exclusif
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-emerald" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Votre encadrant</span>
            </div>
            <h2 className="font-display font-light leading-[1.2] mb-9 text-dark" style={{ fontSize: 'clamp(28px, 3.5vw, 50px)' }}>
              Une Omra <em className="italic text-emerald">supervisée de A à Z</em> par quelqu'un qui connaît la route
            </h2>
            <p className="text-[14px] font-light text-dark/50 leading-[1.95] mb-5">
              Mehdi Abu AbdiLleh est présent à chaque étape — du départ de France jusqu'au retour.
              Programme de cours sur le fiqh de la Tahara et de la Salat, avec dalil sur chaque acte de la Omra.
            </p>
            <p className="text-[14px] font-light text-dark/50 leading-[1.95] mb-11">
              Accompagnement lors des achats pour dénicher les bons plans (qamis sur mesure, livres…),
              résolution du moindre souci qui peut survenir. Un encadrement de niveau qui n'existe
              nulle part ailleurs.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="text-[10px] tracking-[0.12em] uppercase px-4 py-2 border border-emerald/[0.15] text-emerald font-light hover:bg-emerald/[0.05] transition-colors cursor-default rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
