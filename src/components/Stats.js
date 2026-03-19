'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const numRef = useRef(null)

  useEffect(() => {
    if (!inView || !numRef.current) return
    let start = 0
    const end = target
    const duration = 1800
    const startTime = performance.now()

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(eased * end)
      if (numRef.current) numRef.current.textContent = current
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <div ref={ref} className="flex-1 text-center px-9 border-r border-white/[0.07] last:border-r-0">
      <div
        ref={numRef}
        className="font-display text-[56px] font-light leading-none text-gold"
      >
        0
      </div>
      <div className="text-[10px] tracking-[0.22em] uppercase text-cream/50 mt-2.5 font-light">
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="bg-cabin-2 border-t border-b border-white/[0.07] py-12 relative z-[2]">
      <div className="flex justify-center max-w-[1200px] mx-auto px-14">
        <Counter target={100} label="% encadré par Mehdi" />
        <Counter target={10} label="Jours de pèlerinage" />
        <Counter target={25} label="Places max par groupe" />
        <Counter target={9} label="Prestations incluses" />
      </div>
    </div>
  )
}
