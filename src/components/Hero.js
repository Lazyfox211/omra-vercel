'use client'

import { useEffect, useRef, useState } from 'react'
import { getPlace, WINDOW_LAYERS } from '../lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const wrapperRef = useRef(null)
  const pinRef = useRef(null)
  const whiteRef = useRef(null)
  const sacredRef = useRef(null)
  const wlBackRef = useRef(null)
  const wlFrontRef = useRef(null)
  const wlOverRef = useRef(null)
  const revealRef = useRef(null)
  const locRef = useRef(null)
  const scrollHintRef = useRef(null)
  const vignetteRef = useRef(null)

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=350%',
          pin: pinRef.current,
          scrub: 0.6,
          anticipatePin: 1,
        }
      })

      tl
        // Scroll hint disappears
        .to(scrollHintRef.current, { opacity: 0, duration: 0.04 }, 0)

        // Overlay (closest layer) — biggest, fastest zoom
        .to(wlOverRef.current, {
          scale: 7, opacity: 0, duration: 0.45, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0)

        // Front window frame
        .to(wlFrontRef.current, {
          scale: 5.5, opacity: 0, duration: 0.5, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0.02)

        // Back window frame
        .to(wlBackRef.current, {
          scale: 4, opacity: 0, duration: 0.55, ease: 'power1.in',
          transformOrigin: 'center center'
        }, 0.05)

        // White cover fades → sacred image revealed
        .to(whiteRef.current, {
          opacity: 0, duration: 0.5, ease: 'power2.inOut'
        }, 0.04)

        // Sacred image subtle zoom out
        .to(sacredRef.current, {
          scale: 1, duration: 1, ease: 'none'
        }, 0)

        // Vignette appears for text contrast
        .to(vignetteRef.current, {
          opacity: 1, duration: 0.3, ease: 'power2.out'
        }, 0.4)

        // Text appears
        .to(revealRef.current, {
          opacity: 1, duration: 0.2, ease: 'power2.out'
        }, 0.5)

        .fromTo(revealRef.current?.querySelector('.reveal-main'), {
          y: 60, opacity: 0
        }, {
          y: 0, opacity: 1, duration: 0.2, ease: 'power3.out'
        }, 0.52)

        .fromTo(revealRef.current?.querySelector('.reveal-sub'), {
          y: 30, opacity: 0
        }, {
          y: 0, opacity: 1, duration: 0.15, ease: 'power3.out'
        }, 0.6)

        // Location label
        .to(locRef.current, {
          opacity: 1, duration: 0.15, ease: 'power2.out'
        }, 0.65)
    })

    return () => ctx.revert()
  }, [place])

  if (!place) return <div className="h-screen w-screen bg-surface" />

  return (
    <div ref={wrapperRef} className="relative w-full" id="hero">
      <div
        ref={pinRef}
        className="relative w-screen h-screen overflow-hidden"
        style={{ background: 'var(--surface)' }}
      >
        {/* L1: Sacred image */}
        <div className="absolute z-[1]" style={{ inset: '-10%' }}>
          <img
            ref={sacredRef}
            src={place.img}
            alt={place.name}
            className="w-full h-full object-cover"
            style={{
              transform: 'scale(1.2)',
              filter: 'brightness(0.85) saturate(1.15) contrast(1.05)',
            }}
          />
        </div>

        {/* L2: White cover (replaces dark cabin) */}
        <div
          ref={whiteRef}
          className="absolute inset-0 z-[2]"
          style={{ background: 'var(--surface)' }}
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

        {/* L5: Window overlay */}
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

        {/* L6: Vignette for text readability */}
        <div
          ref={vignetteRef}
          className="absolute inset-0 z-[8] pointer-events-none"
          style={{
            opacity: 0,
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* L7: Text overlay */}
        <div
          ref={revealRef}
          className="absolute z-[9] inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <div className="font-arabic text-2xl md:text-3xl text-white/80 mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
          <h1
            className="reveal-main font-display font-light leading-[0.95]"
            style={{
              fontSize: 'clamp(38px, 8vw, 100px)',
              color: '#fff',
              textShadow: '0 6px 80px rgba(0,0,0,0.5)',
              letterSpacing: '0.02em',
            }}
          >
            Votre voyage<br /><em className="italic" style={{ color: '#E8F5EE' }}>commence ici</em>
          </h1>
          <p
            className="reveal-sub mt-6"
            style={{
              fontSize: 'clamp(11px, 1.4vw, 16px)',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              textShadow: '0 2px 30px rgba(0,0,0,0.4)',
            }}
          >
            Omra avec Mehdi Abu AbdiLleh
          </p>
        </div>

        {/* L8: Location label */}
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
              color: '#fff',
              letterSpacing: '0.15em',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            }}
          >
            {place.name}
          </div>
          <div
            className="font-arabic"
            style={{
              fontSize: 'clamp(12px, 1.4vw, 18px)',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '6px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
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
              background: 'linear-gradient(180deg, transparent, var(--emerald))',
              animation: 'sPulse 2.2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontSize: '8px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(27,107,74,0.5)',
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
