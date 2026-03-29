'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      setVisible(window.scrollY > vh * 1.8)
      setScrolled(window.scrollY > vh * 2.2)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-700"
      style={{
        padding: scrolled ? '16px 56px' : '28px 56px',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        background: scrolled ? 'rgba(250,250,247,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(27,107,74,0.12)' : '1px solid transparent',
      }}
    >
      <a href="#hero" className="font-display text-[22px] font-light tracking-[0.08em] text-dark no-underline flex items-center gap-3">
        <span className="font-arabic text-emerald text-xl">عمرة</span>
        <span>Omra</span>
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {['Inclus', 'Mehdi', 'Programme', 'Tarif'].map((label) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              className="text-[11px] font-light tracking-[0.18em] uppercase text-dark/50 no-underline hover:text-emerald transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => smoothTo('reservation')}
        className="border border-emerald text-emerald px-7 py-2.5 font-body text-[10px] font-medium tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-emerald hover:text-white rounded-sm"
        style={{ background: 'transparent' }}
      >
        Réserver
      </button>
    </nav>
  )
}
