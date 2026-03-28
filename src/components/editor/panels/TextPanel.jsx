import { useDispatch, useSelector } from 'react-redux'
import {
  setRecipientName, setTitle, setMessage, setSenderName,
  setFont, setTextColor, setTextAlign, setFontSize,
} from '../../../store/slices/editorSlice'
import { FONTS, TEXT_COLORS } from '../../../store/constants/editorData'

const ALIGN_OPTIONS = [
  { id: 'left',   icon: '⬅', label: 'Left' },
  { id: 'center', icon: '↔', label: 'Center' },
  { id: 'right',  icon: '➡', label: 'Right' },
]

const SIZE_OPTIONS = [
  { id: 'sm', label: 'S' },
  { id: 'md', label: 'M' },
  { id: 'lg', label: 'L' },
]

export default function TextPanel() {
  const dispatch = useDispatch()
  const { recipientName, title, message, senderName, font, textColor, textAlign, fontSize } = useSelector(s => s.editor)

  const inputClass = 'w-full border-2 border-ink/30 rounded-xl px-3 py-2.5 text-sm font-medium text-ink bg-white focus:outline-none focus:border-ink transition-colors'

  return (
    <div className="space-y-5">
      {/* ── Card Content ────────────────────────────────── */}
      <section>
        <h3 className="font-bold text-ink mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Card Content
        </h3>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-ink/50 mb-1 uppercase tracking-wide">Recipient</label>
            <input
              className={inputClass}
              placeholder="e.g. Mom, Sarah, Team..."
              value={recipientName}
              onChange={e => dispatch(setRecipientName(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink/50 mb-1 uppercase tracking-wide">Title / Heading</label>
            <input
              className={inputClass}
              placeholder="e.g. Thank you!"
              value={title}
              onChange={e => dispatch(setTitle(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink/50 mb-1 uppercase tracking-wide">Your Message</label>
            <textarea
              className={inputClass + ' resize-none'}
              rows={5}
              placeholder="Write something heartfelt..."
              value={message}
              onChange={e => dispatch(setMessage(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink/50 mb-1 uppercase tracking-wide">From (your name)</label>
            <input
              className={inputClass}
              placeholder="Your name"
              value={senderName}
              onChange={e => dispatch(setSenderName(e.target.value))}
            />
          </div>
        </div>
      </section>

      {/* ── Font Style ───────────────────────────────────── */}
      <section>
        <h3 className="font-bold text-ink mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Font Style
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {FONTS.map((f) => {
            const isSelected = font === f.id
            return (
              <button
                key={f.id}
                onClick={() => dispatch(setFont(f.id))}
                style={{
                  fontFamily: f.family,
                  border: isSelected ? '2.5px solid #3E2723' : '2px solid rgba(62,39,35,0.2)',
                  boxShadow: isSelected ? 'var(--shadow-hard-xs)' : 'none',
                  transform: isSelected ? 'translate(-1px,-1px)' : 'none',
                }}
                className="p-3 rounded-xl text-left transition-all hover:border-ink/50 bg-white"
              >
                <p style={{ fontFamily: f.family, fontSize: '18px', lineHeight: 1.2, color: '#3E2723' }}>
                  {f.sample}
                </p>
                <p className="text-xs text-ink/50 mt-1 font-sans">{f.label}</p>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Text Color ───────────────────────────────────── */}
      <section>
        <h3 className="font-bold text-ink mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Text Color
        </h3>
        <div className="flex gap-2 flex-wrap">
          {TEXT_COLORS.map((c) => {
            const isSelected = textColor === c.value
            return (
              <button
                key={c.id}
                onClick={() => dispatch(setTextColor(c.value))}
                title={c.label}
                style={{
                  backgroundColor: c.value,
                  border: isSelected ? '2.5px solid #3E2723' : '2px solid rgba(62,39,35,0.25)',
                  boxShadow: isSelected ? 'var(--shadow-hard-xs)' : 'none',
                  transform: isSelected ? 'translate(-1px,-1px)' : 'none',
                  outline: c.value === '#FFFFFF' ? '1px dashed rgba(62,39,35,0.3)' : 'none',
                  outlineOffset: '2px',
                }}
                className="w-9 h-9 rounded-full transition-all hover:-translate-y-px flex items-center justify-center"
              >
                {isSelected && (
                  <span style={{ color: c.value === '#3E2723' ? '#fff' : '#3E2723', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Alignment & Size ─────────────────────────────── */}
      <section>
        <h3 className="font-bold text-ink mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Alignment & Size
        </h3>
        <div className="flex gap-3">
          <div className="flex gap-1 border-2 border-ink/20 rounded-xl p-1 bg-white">
            {ALIGN_OPTIONS.map((a) => (
              <button
                key={a.id}
                onClick={() => dispatch(setTextAlign(a.id))}
                title={a.label}
                style={{
                  background: textAlign === a.id ? '#3E2723' : 'transparent',
                  color: textAlign === a.id ? '#fff' : '#3E2723',
                  border: 'none',
                }}
                className="w-9 h-9 rounded-lg font-bold text-sm transition-all"
              >
                {a.icon}
              </button>
            ))}
          </div>

          <div className="flex gap-1 border-2 border-ink/20 rounded-xl p-1 bg-white">
            {SIZE_OPTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => dispatch(setFontSize(s.id))}
                style={{
                  background: fontSize === s.id ? '#3E2723' : 'transparent',
                  color: fontSize === s.id ? '#fff' : '#3E2723',
                  border: 'none',
                  fontWeight: 700,
                }}
                className="w-9 h-9 rounded-lg text-sm transition-all"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
