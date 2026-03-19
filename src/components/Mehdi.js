'use client'

import Reveal from './Reveal'

const TAGS = [
  'Encadrement intégral', 'Dourous quotidiens', 'Visites des savants',
  'Accompagnement des rites', 'Groupe limité à 25', 'Du départ au retour',
]

export default function Mehdi() {
  return (
    <section id="mehdi" className="py-32 px-14 bg-cabin overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-24 items-center">
          {/* Photo placeholder */}
          <Reveal className="hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 border border-gold/[0.18] z-[2] pointer-events-none" />
              <div className="absolute z-[2] pointer-events-none" style={{ inset: '14px', border: '1px solid rgba(240,237,228,0.07)' }} />
              <div className="w-full h-full bg-gradient-to-br from-cabin via-cabin-3 to-cabin-2 flex items-center justify-center">
                <span className="font-display text-[180px] font-light" style={{
                  background: 'linear-gradient(135deg, rgba(200,168,75,0.12), rgba(240,237,228,0.06))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>M</span>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-gold to-gold-2 text-cabin px-7 py-5 text-[10px] font-medium tracking-[0.12em] uppercase">
                Encadrant exclusif
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-light">Votre encadrant</span>
            </div>
            <h2 className="font-display font-light leading-[1.2] mb-9" style={{ fontSize: 'clamp(28px, 3.5vw, 50px)' }}>
              L'Omra que vous méritez, guidée par quelqu'un qui <em className="italic text-gold">connaît la route</em>
            </h2>
            <p className="text-[14px] font-extralight text-cream/50 leading-[1.95] mb-11">
              Mehdi Abu AbdiLleh est présent à chaque étape — du départ de France jusqu'au retour.
              À chaque rite, chaque visite, chaque dourus. Un encadrement de niveau qui n'existe
              nulle part ailleurs en France.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="text-[10px] tracking-[0.12em] uppercase px-4 py-2 border border-gold/[0.18] text-gold font-light hover:bg-gold/[0.06] transition-colors cursor-default">
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
