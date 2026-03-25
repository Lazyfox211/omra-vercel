'use client'

import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const FAQS = [
  { q: 'Âge minimum pour partir ?', a: 'Recommandé à partir de 10 ans. Mobilité réduite bienvenue — signalez-le à la réservation.' },
  { q: 'Femmes sans mahram ?', a: 'Femmes de moins de 45 ans : mahram obligatoire. Plus de 45 ans : possible en groupe organisé.' },
  { q: 'Comment fonctionne le paiement ?', a: '300 € par personne à la réservation. Solde 60 jours avant le départ. Annulation gratuite avant.' },
  { q: 'Taille des groupes ?', a: '25 personnes maximum par départ pour un encadrement de qualité.' },
  { q: 'Mehdi est présent sur tous les départs ?', a: 'Oui, sans exception. C\'est la promesse centrale. Aucun remplaçant.' },
  { q: 'Quels cours sont dispensés ?', a: 'Programme de fiqh complet : Tahara, Salat, avec dalil sur chaque acte de la Omra. Sessions Q&R quotidiennes.' },
  { q: 'Accompagnement pour les achats ?', a: 'Oui, Mehdi vous guide pour les meilleurs plans : qamis sur mesure, livres, souvenirs. On connaît les bonnes adresses.' },
]

export function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-28 px-14 bg-surface-2">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="text-center">
          <div className="flex items-center gap-3.5 mb-5 justify-center">
            <div className="w-9 h-px bg-emerald" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald font-light">Questions</span>
          </div>
          <h2 className="font-display text-dark font-light leading-[1.05]" style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}>
            Questions<br /><em className="italic text-emerald">fréquentes</em>
          </h2>
        </Reveal>

        <Reveal className="max-w-[800px] mx-auto mt-14">
          {FAQS.map((f, i) => (
            <div key={i} className="border-b border-emerald/[0.08]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-transparent border-none py-6 font-body text-sm font-light text-dark cursor-pointer flex justify-between items-center gap-6 transition-colors hover:text-emerald"
              >
                {f.q}
                <span className={`w-[26px] h-[26px] min-w-[26px] border border-emerald/[0.15] rounded-full flex items-center justify-center text-sm text-emerald transition-all ${open === i ? 'rotate-45 bg-emerald/[0.06] border-emerald' : ''}`}>+</span>
              </button>
              <div className={`text-[13px] font-light text-dark/50 leading-[1.9] overflow-hidden transition-all duration-400 ${open === i ? 'max-h-[220px] pb-6' : 'max-h-0'}`}>
                {f.a}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-emerald py-13 text-center" style={{ padding: '52px' }}>
      <div className="font-display text-[19px] font-light tracking-[0.16em] mb-4 text-white">
        <span className="font-arabic text-white/80">عمرة</span> <span className="text-emerald-light">Omra — Mehdi Abu AbdiLleh</span>
      </div>
      <p className="text-[11px] font-light text-white/[0.4] tracking-[0.1em]">
        Agence agréée · Pèlerinage 100% encadré · © 2025
      </p>
    </footer>
  )
}

export function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.5)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between transition-transform duration-600"
      style={{
        padding: '18px 56px',
        background: 'rgba(250,250,247,0.94)',
        backdropFilter: 'blur(28px) saturate(1.3)',
        borderTop: '1px solid rgba(27,107,74,0.12)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div>
        <div className="text-[10px] tracking-[0.22em] uppercase text-dark/40">Package complet · 10 jours</div>
        <div className="font-display text-[30px] font-light text-dark">à partir de <span className="text-emerald text-[22px]">1 990 €</span></div>
      </div>
      <button
        onClick={() => smoothTo('reservation')}
        className="border-none px-10 py-4 font-body text-[10px] font-medium tracking-[0.22em] uppercase cursor-pointer transition-all hover:shadow-[0_10px_36px_rgba(27,107,74,0.2)] hover:-translate-y-0.5 text-white rounded-sm"
        style={{ background: 'linear-gradient(135deg, var(--emerald), var(--emerald2))' }}
      >
        Réserver →
      </button>
    </div>
  )
}
