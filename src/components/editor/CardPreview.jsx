import { useSelector } from 'react-redux'
import { FONTS, ILLUSTRATIONS } from '../../store/constants/editorData'
import ShapesLayer from './ShapesLayer'

const INTENSITY_OPACITY = { subtle: 0.12, medium: 0.28, bold: 0.5 }

export default function CardPreview() {
  const {
    background, tag, recipientName, title, message, senderName,
    font, textColor, textAlign, fontSize, sticker, hasTape, image, voiceUrl, recordingDuration,
    illustration, illustrationIntensity,
  } = useSelector(s => s.editor)

  const illustrationSrc = illustration
    ? ILLUSTRATIONS.find(il => il.id === illustration)?.src
    : null

  const fontDef = FONTS.find(f => f.id === font)
  const fontFamily = fontDef?.family || "'Caveat', cursive"

  const fontSizeMap  = { sm: '14px', md: '17px', lg: '21px' }
  const titleSizeMap = { sm: '24px', md: '30px', lg: '40px' }

  const formatDuration = (s) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

  return (
    <div className="flex items-center justify-center w-full h-full p-6 md:p-10">
      {/* Wrapper allows badge overflow */}
      <div className="relative" style={{ width: '100%', maxWidth: '520px' }}>

        {/* ── Tag Badge ─────────────────────────────────────────────── */}
        {tag && (
          <div
            style={{
              position: 'absolute',
              top: '-22px',
              left: '-22px',
              width: '92px',
              height: '92px',
              borderRadius: '50%',
              background: tag.bg,
              color: tag.text,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(-16deg)',
              fontFamily: "'Caveat', cursive",
              textAlign: 'center',
              zIndex: 20,
              border: '2.5px solid rgba(0,0,0,0.25)',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.4)',
              padding: '8px',
              lineHeight: 1.1,
              userSelect: 'none',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 500, opacity: 0.9 }}>{tag.line1}</span>
            <span style={{ fontSize: '14px', fontWeight: 800 }}>{tag.line2}</span>
          </div>
        )}

        {/* ── Main Card ─────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: background,
            border: '2.5px solid #3E2723',
            borderRadius: '18px',
            boxShadow: '7px 7px 0px #3E2723',
            overflow: 'visible',
            position: 'relative',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Illustration background */}
          {illustrationSrc && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <img
                src={illustrationSrc}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: INTENSITY_OPACITY[illustrationIntensity] ?? 0.12,
                }}
              />
            </div>
          )}

          {/* Tape decoration */}
          {hasTape && (
            <div
              style={{
                position: 'absolute',
                zIndex: 5,
                top: '-7px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-2deg)',
                width: '76px',
                height: '26px',
                background: 'rgba(255,255,255,0.55)',
                border: '1.5px solid rgba(0,0,0,0.12)',
                borderRadius: '2px',
                zIndex: 5,
                backdropFilter: 'blur(2px)',
              }}
            />
          )}

          {/* Uploaded image banner */}
          {image && (
            <div style={{ height: '150px', overflow: 'hidden', flexShrink: 0, borderBottom: '2px solid #3E2723', position: 'relative', zIndex: 1 }}>
              <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}

          {/* Shapes layer */}
          <ShapesLayer />

          {/* Card content */}
          <div
            style={{
              padding: '32px 28px 22px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              fontFamily,
              color: textColor,
              textAlign,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* To: line */}
            {recipientName && (
              <p
                style={{
                  fontSize: '12px',
                  fontFamily: "'Quicksand', sans-serif",
                  opacity: 0.55,
                  marginBottom: '10px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: textColor,
                  textAlign,
                }}
              >
                To: {recipientName}
              </p>
            )}

            {/* Title */}
            {title && (
              <h2
                style={{
                  fontSize: titleSizeMap[fontSize],
                  fontWeight: font === 'mono' ? 700 : 800,
                  lineHeight: 1.15,
                  marginBottom: '12px',
                  fontFamily,
                  color: textColor,
                  textAlign,
                  wordBreak: 'break-word',
                }}
              >
                {title}
              </h2>
            )}

            {/* Decorative squiggle only on specific colors */}
            <div
              style={{
                width: '36px',
                height: '3px',
                borderRadius: '2px',
                background: textColor,
                opacity: 0.3,
                marginBottom: '14px',
                marginLeft: textAlign === 'center' ? 'auto' : textAlign === 'right' ? 'auto' : '0',
                marginRight: textAlign === 'center' ? 'auto' : textAlign === 'right' ? '0' : 'auto',
              }}
            />

            {/* Message */}
            <p
              style={{
                fontSize: fontSizeMap[fontSize],
                lineHeight: 1.7,
                flex: 1,
                fontFamily,
                color: textColor,
                textAlign,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {message}
            </p>

            {/* Bottom row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: '18px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {/* Voice indicator */}
              {voiceUrl ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    fontFamily: "'Quicksand', sans-serif",
                    opacity: 0.65,
                    color: textColor,
                    background: 'rgba(0,0,0,0.06)',
                    borderRadius: '20px',
                    padding: '3px 10px',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <span>🎤</span>
                  <span>{formatDuration(recordingDuration)}</span>
                </div>
              ) : <div />}

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                {sticker && <span style={{ fontSize: '32px', lineHeight: 1 }}>{sticker}</span>}
                {senderName && (
                  <p
                    style={{
                      fontSize: '14px',
                      fontStyle: 'italic',
                      fontFamily,
                      color: textColor,
                      opacity: 0.8,
                    }}
                  >
                    — {senderName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
