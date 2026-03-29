/* ═══════════════════════════════════════════════════════
   Hero v4 — Omra Mehdi Abu AbdiLleh
   Airplane window animation (Jesko Jets style)
   Sky + clouds visible through hublot → zoom → Nabawi
   ═══════════════════════════════════════════════════════ */
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMG = {
  heroBack     : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d27a91bc0bf516a17a3f69_img_hero-back.webp',
  heroFront    : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9dfe10f1c8a1d719c1e63_917d8b944f7f57b7fbe3969bf2719a2e_img_hero-front.webp',
  heroFrontOver: 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9ddb4432de688d8f96eb1_img_hero-front-over.webp',
  windowKnob   : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9d1aae1383a58699853ed_img_window-knob.webp',
  windowKnob2  : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9d827d5233a3ae348505b_img_window-knob-2.webp',
  skyHero      : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf31df0eb6b62331d8e35a_9557f7de34f540aa715092b1bcdbbf57_img_sky-hero.webp',
  clouds       : 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68ee74b1f45fbfb23fb6405a_clouds.webp',
  nabawi       : 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=80&auto=format',
}

const layerStyle = { position: 'absolute', inset: 0, pointerEvents: 'none' }
const imgStyle   = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
const cloudStyle = { display: 'inline-block', height: '100%', width: 'auto', minWidth: '100vw' }

export default function Hero() {
  const wrapRef     = useRef(null)
  const pinRef      = useRef(null)
  const skyBoxRef   = useRef(null)
  const skyGradRef  = useRef(null)
  const nabawiRef   = useRef(null)
  const lyrBackRef  = useRef(null)
  const lyrKnobRef  = useRef(null)
  const lyrFrontRef = useRef(null)
  const lyrOverRef  = useRef(null)
  const txtRef      = useRef(null)
  const locRef      = useRef(null)
  const hintRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(hintRef.current, { opacity: 1, duration: 1, delay: 0.7, ease: 'power2.out' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=350%',
          pin: pinRef.current,
          scrub: 0.6,
          anticipatePin: 1,
        },
      })

      // Phase 1: zoom through window (0 → 0.45)
      tl.to(hintRef.current, { opacity: 0, duration: 0.04 }, 0)

      tl.to(lyrOverRef.current, {
        scale: 8, opacity: 0, duration: 0.38, ease: 'power1.in', transformOrigin: '50% 50%',
      }, 0)
      tl.to(lyrFrontRef.current, {
        scale: 6, opacity: 0, duration: 0.42, ease: 'power1.in', transformOrigin: '50% 50%',
      }, 0.015)
      tl.to(lyrKnobRef.current, {
        scale: 5.5, opacity: 0, duration: 0.40, ease: 'power1.in', transformOrigin: '50% 50%',
      }, 0.01)
      tl.to(lyrBackRef.current, {
        scale: 4, opacity: 0, duration: 0.46, ease: 'power1.in', transformOrigin: '50% 50%',
      }, 0.04)

      // Phase 2: sky → Nabawi (0.30 → 0.55)
      tl.to(skyBoxRef.current, { opacity: 0, duration: 0.25, ease: 'power2.inOut' }, 0.30)
      tl.to(skyGradRef.current, { opacity: 0, duration: 0.22, ease: 'power2.inOut' }, 0.30)
      tl.fromTo(nabawiRef.current,
        { opacity: 0, scale: 1.12 },
        { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out' },
        0.32,
      )

      // Phase 3: text (0.55 → 0.80)
      tl.to(txtRef.current, { opacity: 1, duration: 0.12, ease: 'power2.out' }, 0.55)
      tl.fromTo('.rv-b', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.14, ease: 'power3.out' }, 0.56)
      tl.fromTo('.rv-t', { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.20, ease: 'power3.out' }, 0.59)
      tl.fromTo('.rv-s', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.14, ease: 'power3.out' }, 0.66)
      tl.to(locRef.current, { opacity: 1, y: 0, duration: 0.14, ease: 'power2.out' }, 0.72)
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className="relative w-full" id="hero">
      <div ref={pinRef} className="relative w-screen h-screen overflow-hidden" style={{ background: '#000' }}>

        {/* Z-1: Nabawi (hidden, fades in) */}
        <div style={{ ...layerStyle, zIndex: 1, overflow: 'hidden' }}>
          <img ref={nabawiRef} src={IMG.nabawi} alt="Al-Masjid an-Nabawi" style={{
            ...imgStyle, inset: '-6%', width: '112%', height: '112%',
            opacity: 0, transform: 'scale(1.12)',
            filter: 'brightness(0.52) saturate(1.15) contrast(1.06)',
          }} />
        </div>

        {/* Z-2: Sky + clouds */}
        <div ref={skyBoxRef} style={{ ...layerStyle, zIndex: 2 }}>
          <img src={IMG.skyHero} alt="" style={imgStyle} />
          <div style={{ ...layerStyle, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: '12%', height: '68%',
              whiteSpace: 'nowrap', willChange: 'transform',
              animation: 'drift 48s linear infinite reverse',
            }}>
              <img src={IMG.clouds} alt="" style={cloudStyle} />
              <img src={IMG.clouds} alt="" style={cloudStyle} />
            </div>
          </div>
          <div ref={skyGradRef} style={{
            ...layerStyle,
            background: 'linear-gradient(180deg, rgba(1,90,169,0) 0%, rgba(1,90,169,0.01) 12%, rgba(1,90,169,0.03) 21%, rgba(1,90,169,0.07) 29%, rgba(1,90,169,0.12) 35%, rgba(1,90,169,0.18) 40%, rgba(1,90,169,0.25) 45%, rgba(1,90,169,0.33) 48%, rgba(1,90,169,0.41) 52%, rgba(1,90,169,0.50) 55%, rgba(1,90,169,0.59) 60%, rgba(1,90,169,0.67) 65%, rgba(1,90,169,0.76) 71%, rgba(1,90,169,0.85) 79%, rgba(1,90,169,0.93) 88%, #015AA9 100%)',
          }} />
        </div>

        {/* Z-3: Cabin darkness */}
        <div style={{
          ...layerStyle, zIndex: 3,
          background: 'linear-gradient(180deg, #312726 0%, #2D2423 11.79%, #292120 21.38%, #251E1D 29.12%, #211A1A 35.34%, #1D1716 40.37%, #181313 44.56%, #141010 48.24%, #100D0C 51.76%, #0C0A0A 55.44%, #090707 59.63%, #060505 64.66%, #030303 70.88%, #020101 78.62%, #000 88.21%, #000 100%)',
          mixBlendMode: 'multiply', opacity: 0.82,
        }} />

        {/* Z-9: Window vignette */}
        <div style={{
          ...layerStyle, zIndex: 9,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.20) 80%, rgba(0,0,0,0.35) 100%)',
        }} />

        {/* Z-10: Back */}
        <div ref={lyrBackRef} style={{ ...layerStyle, zIndex: 10 }}>
          <img src={IMG.heroBack} alt="" style={imgStyle} />
        </div>

        {/* Z-20: Knobs */}
        <div ref={lyrKnobRef} style={{ ...layerStyle, zIndex: 20 }}>
          <img src={IMG.windowKnob2} alt="" style={imgStyle} />
          <img src={IMG.windowKnob} alt="" style={imgStyle} />
        </div>

        {/* Z-30: Front */}
        <div ref={lyrFrontRef} style={{ ...layerStyle, zIndex: 30 }}>
          <img src={IMG.heroFront} alt="" style={imgStyle} />
        </div>

        {/* Z-40: Front-over */}
        <div ref={lyrOverRef} style={{ ...layerStyle, zIndex: 40 }}>
          <img src={IMG.heroFrontOver} alt="" style={imgStyle} />
        </div>

        {/* Z-50: Text */}
        <div ref={txtRef} style={{
          ...layerStyle, zIndex: 50,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px', opacity: 0,
        }}>
          <div className="rv-b font-arabic" style={{
            fontSize: 'clamp(20px, 3vw, 38px)',
            color: 'rgba(255,255,255,0.72)',
            textShadow: '0 2px 28px rgba(0,0,0,0.5)',
            marginBottom: '22px',
          }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
          <h1 className="rv-t font-display" style={{
            fontSize: 'clamp(42px, 9vw, 116px)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 0.92, color: '#fff',
            textShadow: '0 8px 72px rgba(0,0,0,0.6)',
          }}>Votre voyage<br />commence ici</h1>
          <p className="rv-s" style={{
            marginTop: '28px',
            fontSize: 'clamp(11px, 1.4vw, 16px)',
            fontWeight: 300, letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(232,245,238,0.88)',
            textShadow: '0 2px 28px rgba(0,0,0,0.5)',
          }}>Omra avec Mehdi Abu AbdiLleh</p>
        </div>

        {/* Location */}
        <div ref={locRef} style={{
          position: 'absolute', zIndex: 50,
          bottom: '7%', left: '50%',
          transform: 'translateX(-50%) translateY(18px)',
          opacity: 0, textAlign: 'center', pointerEvents: 'none',
        }}>
          <div className="font-display" style={{
            fontSize: 'clamp(14px, 2vw, 24px)', fontWeight: 300,
            color: '#fff', letterSpacing: '0.18em',
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}>Al-Masjid an-Nabawi</div>
          <div className="font-arabic" style={{
            fontSize: 'clamp(13px, 1.5vw, 20px)',
            color: 'rgba(255,255,255,0.48)', marginTop: '6px',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}>المسجد النبوي — المدينة المنورة</div>
        </div>

        {/* Scroll hint */}
        <div ref={hintRef} style={{
          position: 'absolute', zIndex: 60,
          bottom: '36px', left: '50%',
          transform: 'translateX(-50%)', opacity: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '10px',
        }}>
          <div style={{
            width: '1px', height: '56px',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.45))',
            animation: 'pulse 2.2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: '8px', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)',
          }}>Défiler</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50%      { transform: scaleY(1); }
        }
        @keyframes drift {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }
      `}</style>
    </div>
  )
}
