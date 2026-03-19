'use client'

import { useEffect, useRef, useState } from 'react'
import { getPlace, WINDOW_LAYERS } from '../lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const wrapperRef = useRef(null)
  const pinRef = useRef(null)
  const darkRef = useRef(null)
  const sacredRef = useRef(null)
  const wlBackRef = useRef(null)
  const wlFrontRef = useRef(null)
  const wlOverRef = useRef(null)
  const revealRef = useRef(null)
  const locRef = useRef(null)
  const scrollHintRef = useRef(null)

  const [place, setPlace] = useState(null)

  useEffect(() => {
    setPlace(getPlace())
  }, [])

  useEffect(() => {
    if (!place) return

    const ctx = gsap.context(() => {
      // Scroll hint fade in
      gsap.to(scrollHintRef.current, {
        opacity: 1, duration: 1, delay: 0.8, ease: 'power2.out'
      })

      // Master scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=300%',
          pin: pinRef.current,
          scrub: 0.5,
          anticipatePin: 1,
        }
      })

      tl
        // === PHASE 1: Window opens (0 → 0.5) ===
        // Scroll hint disappears
        .to(scrollHintRef.current, { opacity: 0, duration: 0.04 }, 0)

        // Overlay (closest layer) — biggest, fastest zoom
        .to(wlOverRef.current, {
          scale: 6, opacity: 0, duration: 0.4, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0)

        // Front window frame
        .to(wlFrontRef.current, {
          scale: 4.5, opacity: 0, duration: 0.45, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0.02)

        // Back window frame (slowest)
        .to(wlBackRef.current, {
          scale: 3.5, opacity: 0, duration: 0.5, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0.05)

        // Darkness fades → sacred image revealed
        .to(darkRef.current, {
          opacity: 0, duration: 0.45, ease: 'power2.inOut'
        }, 0.04)

        // Sacred image subtle pull-back
        .to(sacredRef.current, {
          scale: 1, duration: 1, ease: 'none'
        }, 0)

        // === PHASE 2: Text appears (0.5 → 0.8) ===
        .to(revealRef.current, {
          opacity: 1, duration: 0.2, ease: 'power2.out'
        }, 0.5)

        .fromTo(revealRef.current?.querySelector('.reveal-main'), {
          y: 50, opacity: 0
        }, {
          y: 0, opacity: 1, duration: 0.2, ease: 'power3.out'
        }, 0.52)

        .fromTo(revealRef.current?.querySelector('.reveal-sub'), {
          y: 25, opacity: 0
        }, {
          y: 0, opacity: 1, duration: 0.15, ease: 'power3.out'
        }, 0.6)

        // Location label
        .to(locRef.current, {
          opacity: 1, duration: 0.15, ease: 'power2.out'
        }, 0.65)

      // === PHASE 3 (0.8 → 1): Hold ===
    })

    return () => ctx.revert()
  }, [place])

  if (!place) return <div className="h-screen w-screen bg-cabin" />

  return (
    <div ref={wrapperRef} className="relative w-full" id="hero">
      <div
        ref={pinRef}
        className="relative w-screen h-screen overflow-hidden"
        style={{ background: 'var(--cabin)' }}
      >
        {/* L1: Sacred image */}
        <div className="absolute z-[1]" style={{ inset: '-10%' }}>
          <img
            ref={sacredRef}
            src={place.img}
            alt={place.name}
            className="w-full h-full object-cover"
            style={{
              transform: 'scale(1.15)',
              filter: 'brightness(0.45) saturate(1.2) contrast(1.05)',
            }}
          />
        </div>

        {/* L2: Dark cabin overlay */}
        <div
          ref={darkRef}
          className="absolute inset-0 z-[2]"
          style={{ background: 'var(--cabin)' }}
        />

        {/* L3: Window back */}
        <div
          ref={wlBackRef}
          className="absolute z-[3] pointer-events-none"
          style={{
            width: '280vw', height: '280vh',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src={WINDOW_LAYERS.back} alt="" className="w-full h-full object-cover" />
        </div>

        {/* L4: Window front */}
        <div
          ref={wlFrontRef}
          className="absolute z-[4] pointer-events-none"
          style={{
            width: '320vw', height: '320vh',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src={WINDOW_LAYERS.front} alt="" className="w-full h-full object-cover" />
        </div>

        {/* L5: Window overlay (closest) */}
        <div
          ref={wlOverRef}
          className="absolute z-[5] pointer-events-none"
          style={{
            width: '360vw', height: '360vh',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src={WINDOW_LAYERS.over} alt="" className="w-full h-full object-cover" />
        </div>

        {/* L6: "Votre voyage commence ici" */}
        <div
          ref={revealRef}
          className="absolute z-[9] inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <h1
            className="reveal-main font-display font-light italic leading-[0.95]"
            style={{
              fontSize: 'clamp(38px, 8vw, 100px)',
              color: 'var(--cream)',
              textShadow: '0 6px 80px rgba(0,0,0,0.6)',
              letterSpacing: '0.02em',
            }}
          >
            Votre voyage<br />commence ici
          </h1>
          <p
            className="reveal-sub mt-6"
            style={{
              fontSize: 'clamp(11px, 1.4vw, 16px)',
              fontWeight: 200,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold2)',
              textShadow: '0 2px 30px rgba(0,0,0,0.5)',
            }}
          >
            Omra avec Mehdi Abu AbdiLleh
          </p>
        </div>

        {/* L7: Location label */}
        <div
          ref={locRef}
          className="absolute z-[9] text-center pointer-events-none"
          style={{
            bottom: '8%', left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
          }}
        >
          <div
            className="font-display font-light"
            style={{
              fontSize: 'clamp(14px, 2vw, 22px)',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            {place.name}
          </div>
          <div
            style={{
              fontSize: 'clamp(10px, 1.2vw, 15px)',
              color: 'rgba(240,237,228,0.45)',
              marginTop: '4px',
              letterSpacing: '0.2em',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            {place.arabic}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="absolute z-[10] flex flex-col items-center gap-2.5"
          style={{
            bottom: '44px', left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
          }}
        >
          <div
            className="w-px h-14"
            style={{
              background: 'linear-gradient(180deg, transparent, var(--gold))',
              animation: 'sPulse 2.2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontSize: '8px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,228,0.22)',
            }}
          >
            Défiler
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes sPulse {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}
