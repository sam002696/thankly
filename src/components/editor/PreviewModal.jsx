import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsPreviewOpen } from '../../store/slices/editorSlice'
import { FONTS } from '../../store/constants/editorData'

// ── Envelope dimensions ────────────────────────────────────────────────────────
const EW = 460   // envelope width
const EH = 270   // envelope body height
const FH = 138   // flap triangle height

// Stage is tall enough so the card + envelope both fit within overflow:hidden
// Card starts hidden below the stage, rises through the envelope area
const STAGE_H       = 820   // tall stage, fits large cards
const CARD_TOP      = 50    // card's resting y (room for -26px badge: 50-26=24 > 0 ✓)
const CARD_LEFT     = 30    // card left in stage (badge x: 30-26=4 > 0 ✓)
const CARD_START_TY = 840   // card starts fully below stage → clipped → invisible

// ── Card rendered at full preview size ────────────────────────────────────────
function FullCard({ forClean = false }) {
  const {
    background, tag, recipientName, title, message, senderName,
    font, textColor, textAlign, fontSize, sticker, hasTape, image,
    voiceUrl, recordingDuration,
  } = useSelector(s => s.editor)

  const fontFamily = FONTS.find(f => f.id === font)?.family ?? "'Caveat', cursive"
  const msgSize    = { sm: '15px', md: '18px', lg: '22px' }[fontSize]
  const headSize   = { sm: '26px', md: '34px', lg: '44px' }[fontSize]
  const fmtTime    = s =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

  const cardW = forClean ? `${EW - 60}px` : `${EW - CARD_LEFT * 2}px`

  return (
    <div style={{ position: 'relative' }}>
      {/* Tag badge — extends outside the card; needs room above & left */}
      {tag && (
        <div style={{
          position: 'absolute', top: '-26px', left: '-26px',
          width: '100px', height: '100px', borderRadius: '50%',
          background: tag.bg, color: tag.text,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          transform: 'rotate(-16deg)',
          fontFamily: "'Caveat', cursive", textAlign: 'center',
          zIndex: 30, lineHeight: 1.1,
          border: '2.5px solid rgba(0,0,0,0.25)',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.45)',
          padding: '10px',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 500 }}>{tag.line1}</span>
          <span style={{ fontSize: '16px', fontWeight: 800 }}>{tag.line2}</span>
        </div>
      )}

      {/* Card body */}
      <div style={{
        width: cardW,
        background,
        border: '2.5px solid #3E2723',
        borderRadius: '18px',
        boxShadow: '8px 8px 0px #3E2723',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {hasTape && (
          <div style={{
            position: 'absolute', top: '-8px', left: '50%',
            transform: 'translateX(-50%) rotate(-2deg)',
            width: '80px', height: '28px',
            background: 'rgba(255,255,255,0.55)',
            border: '1.5px solid rgba(0,0,0,0.12)',
            borderRadius: '2px', zIndex: 5,
          }} />
        )}

        {image && (
          <div style={{ height: '160px', overflow: 'hidden', borderBottom: '2.5px solid #3E2723' }}>
            <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ padding: '34px 30px 26px', fontFamily, color: textColor, textAlign }}>
          {recipientName && (
            <p style={{
              fontSize: '12px', fontFamily: "'Quicksand', sans-serif",
              opacity: 0.5, marginBottom: '10px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              To: {recipientName}
            </p>
          )}
          {title && (
            <h2 style={{
              fontSize: headSize, fontWeight: 800,
              lineHeight: 1.15, marginBottom: '14px', fontFamily,
            }}>
              {title}
            </h2>
          )}
          <div style={{
            width: '40px', height: '3px', borderRadius: '2px',
            background: textColor, opacity: 0.2, marginBottom: '16px',
            marginLeft: textAlign === 'center' ? 'auto' : textAlign === 'right' ? 'auto' : 0,
            marginRight: textAlign === 'center' ? 'auto' : textAlign === 'right' ? 0 : 'auto',
          }} />
          <p style={{
            fontSize: msgSize, lineHeight: 1.75, fontFamily,
            whiteSpace: 'pre-wrap', wordBreak: 'break-word',
          }}>
            {message}
          </p>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginTop: '20px',
            flexWrap: 'wrap', gap: '8px',
          }}>
            {voiceUrl ? (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '12px', fontFamily: "'Quicksand', sans-serif",
                opacity: 0.6, background: 'rgba(0,0,0,0.07)',
                borderRadius: '20px', padding: '3px 10px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}>
                <span>🎤</span><span>{fmtTime(recordingDuration)}</span>
              </div>
            ) : <div />}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
              {sticker && <span style={{ fontSize: '36px', lineHeight: 1 }}>{sticker}</span>}
              {senderName && (
                <p style={{ fontSize: '15px', fontStyle: 'italic', fontFamily, opacity: 0.75 }}>
                  — {senderName}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Close button ───────────────────────────────────────────────────────────────
function CloseBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed', top: '18px', right: '20px',
        width: '42px', height: '42px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        border: '2px solid rgba(255,255,255,0.28)',
        color: 'white', fontSize: '17px', fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', zIndex: 9100,
        fontFamily: 'sans-serif',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.24)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
    >
      ✕
    </button>
  )
}

// ── Shared CSS keyframes ───────────────────────────────────────────────────────
const CSS = `
  @keyframes previewIn  { from { opacity:0 } to { opacity:1 } }
  @keyframes stageIn {
    0%   { opacity:0; transform: scale(0.93) translateY(20px); }
    100% { opacity:1; transform: scale(1)    translateY(0); }
  }
  @keyframes cleanCardIn {
    0%   { opacity:0; transform: scale(0.97) translateY(8px); }
    100% { opacity:1; transform: scale(1)    translateY(0); }
  }
  @keyframes cardFloat {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-7px); }
  }
`

// ── Main modal ─────────────────────────────────────────────────────────────────
export default function PreviewModal() {
  const dispatch = useDispatch()
  const isOpen   = useSelector(s => s.editor.isPreviewOpen)

  // Phases:
  //  hidden   → nothing rendered
  //  entering → overlay + stage appear
  //  flap     → 3-D flap opens
  //  rising   → card rises from inside envelope
  //  dismiss  → envelope falls off screen
  //  done     → CLEAN mode: just the card, no stage constraints
  const [phase, setPhase] = useState('hidden')

  useEffect(() => {
    if (!isOpen) { setPhase('hidden'); return }

    setPhase('entering')
    const timers = [
      setTimeout(() => setPhase('flap'),    600),
      setTimeout(() => setPhase('rising'),  1400),
      setTimeout(() => setPhase('dismiss'), 2900),
      setTimeout(() => setPhase('done'),    3750),
    ]
    return () => timers.forEach(clearTimeout)
  }, [isOpen])

  const close = () => {
    setPhase('hidden')
    dispatch(setIsPreviewOpen(false))
  }

  if (phase === 'hidden') return null

  // ── DONE phase: clean card presentation, no stage ──────────────────────────
  if (phase === 'done') {
    return (
      <>
        <style>{CSS}</style>
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: 'rgba(10, 5, 2, 0.93)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflowY: 'auto', padding: '60px 20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              animation: 'cleanCardIn 0.35s ease forwards, cardFloat 3.5s ease-in-out 0.5s infinite',
              position: 'relative',
              // Extra left padding so the tag badge (overflows -26px) is not cut
              paddingTop: '30px',
              paddingLeft: '30px',
            }}
          >
            <FullCard forClean />
          </div>
          <CloseBtn onClick={close} />
        </div>
      </>
    )
  }

  // ── Animation phases: entering → flap → rising → dismiss ──────────────────
  const flapOpen   = ['flap', 'rising', 'dismiss'].includes(phase)
  const cardRising = ['rising', 'dismiss'].includes(phase)
  const envFalling = phase === 'dismiss'

  // Card: starts below stage (hidden), rises to y=0 (its resting offset inside stage)
  const cardTY = cardRising ? 0 : CARD_START_TY

  // Envelope: starts at bottom of stage, falls far below (clipped by overflow:hidden)
  // EH + 350 ensures it's fully gone even with STAGE_H=820
  const envTY  = envFalling ? EH + 350 : 0

  // Envelope sits at the bottom of the stage
  const envelopeTop = STAGE_H - EH   // = 550

  return (
    <>
      <style>{CSS}</style>

      {/* Dark overlay */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(10, 5, 2, 0.93)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'previewIn 0.5s ease forwards',
          overflowY: 'auto', padding: '40px 20px',
        }}
      >
        {/* Stage container — overflow:hidden masks the rising card */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            width: EW,
            height: STAGE_H,
            overflow: 'hidden',       // ← clips card while inside envelope
            animation: 'stageIn 0.55s cubic-bezier(0.34,1.3,0.64,1) forwards',
            flexShrink: 0,
          }}
        >
          {/*
            ── How the illusion works ──────────────────────────────────────────
            Card (z:2) starts translateY(840px) → fully below stage → invisible.
            Envelope body (z:3) is positioned at stage bottom, opaque, covers the
            card wherever they overlap. As the card rises to translateY(0), the
            portion still within the envelope area is painted over by the envelope
            (z:3 > z:2). Only the part above the envelope top (y < 550) becomes
            visible. The tag badge is at y = CARD_TOP − 26 = 24px > 0, so it is
            never clipped. Left badge offset: CARD_LEFT − 26 = 4px > 0 ✓
          */}

          {/* ── CARD (z:2) ─────────────────────────────────────────────── */}
          <div style={{
            position: 'absolute',
            top: CARD_TOP,               // 50px — badge at 50-26=24px, in-bounds ✓
            left: CARD_LEFT,             // 30px — badge at 30-26=4px, in-bounds ✓
            right: CARD_LEFT,
            zIndex: 2,
            transform: `translateY(${cardTY}px)`,
            transition: cardRising
              ? 'transform 1.3s cubic-bezier(0.34, 1.05, 0.64, 1)'
              : 'none',
          }}>
            <FullCard />
          </div>

          {/* ── ENVELOPE ASSEMBLY (z:3) ─────────────────────────────────── */}
          <div style={{
            position: 'absolute',
            top: envelopeTop,            // 550px — envelope occupies 550–820
            left: 0, right: 0,
            height: EH,
            zIndex: 3,
            transform: `translateY(${envTY}px)`,
            transition: envFalling
              ? 'transform 0.82s cubic-bezier(0.55, 0, 0.75, 1)'
              : 'none',
          }}>
            {/* ── Flap (3-D fold) ──────────────────────────────────────── */}
            <div style={{
              position: 'absolute',
              top: -2, left: 0, right: 0,
              height: FH + 4,
              zIndex: 4,
            }}>
              <svg
                width={EW} height={FH + 4}
                viewBox={`0 0 ${EW} ${FH + 4}`}
                style={{
                  display: 'block',
                  transformOrigin: '50% 0%',
                  transform: flapOpen
                    ? 'perspective(900px) rotateX(-164deg)'
                    : 'perspective(900px) rotateX(0deg)',
                  transition: 'transform 0.95s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <polygon
                  points={`2,2 ${EW - 2},2 ${EW / 2},${FH + 2}`}
                  fill="#EBE4D2"
                  stroke="#3E2723"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <line x1="2"      y1="2" x2={EW / 2} y2={FH + 2} stroke="rgba(62,39,35,0.11)" strokeWidth="1" />
                <line x1={EW - 2} y1="2" x2={EW / 2} y2={FH + 2} stroke="rgba(62,39,35,0.11)" strokeWidth="1" />
                <text
                  x={EW / 2} y={FH * 0.44}
                  textAnchor="middle" fontSize="20"
                  fill="rgba(62,39,35,0.35)"
                  style={{ userSelect: 'none' }}
                >♥</text>
              </svg>
            </div>

            {/* ── Envelope body ──────────────────────────────────────────── */}
            <div style={{
              width: EW, height: EH,
              background: '#F2EDE0',
              border: '2.5px solid #3E2723',
              borderRadius: '4px 4px 16px 16px',
              boxShadow: '8px 8px 0px #3E2723',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Left fold */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: 0, height: 0,
                borderTop: `${FH}px solid rgba(62,39,35,0.07)`,
                borderRight: `${EW / 2}px solid transparent`,
              }} />
              {/* Right fold */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 0, height: 0,
                borderTop: `${FH}px solid rgba(62,39,35,0.07)`,
                borderLeft: `${EW / 2}px solid transparent`,
              }} />
              {/* Bottom fold */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: 0, height: 0,
                borderBottom: '108px solid rgba(62,39,35,0.045)',
                borderLeft: `${EW / 2}px solid transparent`,
                borderRight: `${EW / 2}px solid transparent`,
              }} />

              {/* Fold-crease lines */}
              <svg
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
                width={EW} height={EH}
                viewBox={`0 0 ${EW} ${EH}`}
              >
                <line x1="0"  y1="0"  x2={EW / 2} y2={FH}       stroke="rgba(62,39,35,0.13)" strokeWidth="1" />
                <line x1={EW} y1="0"  x2={EW / 2} y2={FH}       stroke="rgba(62,39,35,0.13)" strokeWidth="1" />
                <line x1="0"  y1={EH} x2={EW / 2} y2={EH - 108} stroke="rgba(62,39,35,0.13)" strokeWidth="1" />
                <line x1={EW} y1={EH} x2={EW / 2} y2={EH - 108} stroke="rgba(62,39,35,0.13)" strokeWidth="1" />
              </svg>

              {/* Thankly stamp */}
              <div style={{
                position: 'absolute', bottom: '18px', right: '24px',
                textAlign: 'right',
                fontFamily: "'Caveat', cursive",
                color: 'rgba(62,39,35,0.28)',
                lineHeight: 1.3,
              }}>
                <p style={{ fontSize: '15px', fontWeight: 700 }}>Thankly</p>
                <p style={{ fontSize: '11px' }}>with love ❤️</p>
              </div>

              {/* Wax seal */}
              <div style={{
                position: 'absolute', bottom: '18px', left: '22px',
                width: '34px', height: '34px', borderRadius: '50%',
                background: '#ef4444', border: '2px solid #3E2723',
                boxShadow: '2px 2px 0px #3E2723',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '15px',
              }}>❤️</div>
            </div>
          </div>
        </div>

        <CloseBtn onClick={close} />
      </div>
    </>
  )
}
