import { useDispatch, useSelector } from 'react-redux'
import { setTag } from '../../../store/slices/editorSlice'
import { TAGS } from '../../../store/constants/editorData'

export default function TagPanel() {
  const dispatch = useDispatch()
  const { tag } = useSelector(s => s.editor)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-ink text-base mb-1" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Card Tag
        </h3>
        <p className="text-xs text-ink/50 mb-4">
          Tags appear as a badge on the top-left corner of your card
        </p>

        {/* No tag option */}
        <button
          onClick={() => dispatch(setTag(null))}
          className={[
            'w-full flex items-center gap-3 p-3 rounded-xl border-2 mb-4 transition-all text-left',
            tag === null
              ? 'border-ink bg-ink/5 shadow-[2px_2px_0px_#3E2723]'
              : 'border-ink/20 hover:border-ink/50',
          ].join(' ')}
        >
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-ink/40 flex items-center justify-center bg-ink/5">
            <span className="text-ink/40 text-lg">✕</span>
          </div>
          <span className="font-semibold text-sm text-ink/60">No tag</span>
          {tag === null && <span className="ml-auto text-brand font-bold">✓</span>}
        </button>

        {/* Tag grid */}
        <div className="grid grid-cols-2 gap-3">
          {TAGS.map((t) => {
            const isSelected = tag?.id === t.id
            return (
              <button
                key={t.id}
                onClick={() => dispatch(setTag(t))}
                style={{
                  border: isSelected ? 'var(--border-ink-thick)' : '2px solid rgba(62,39,35,0.15)',
                  boxShadow: isSelected ? 'var(--shadow-hard-xs)' : 'none',
                  transform: isSelected ? 'translate(-1px, -1px)' : 'none',
                }}
                className="rounded-xl p-3 transition-all hover:border-ink/50 flex items-center gap-3"
              >
                {/* Mini badge preview */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: t.bg,
                    color: t.text,
                    fontSize: '9px',
                    fontFamily: "'Caveat', cursive",
                    fontWeight: 800,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    lineHeight: 1.1,
                    border: '1.5px solid rgba(0,0,0,0.2)',
                    transform: 'rotate(-10deg)',
                  }}
                >
                  <span style={{ fontSize: '8px', fontWeight: 500 }}>{t.line1}</span>
                  <span style={{ fontSize: '10px' }}>{t.line2}</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-ink leading-tight">{t.line1}</p>
                  <p className="text-xs text-ink/60 leading-tight">{t.line2}</p>
                </div>
                {isSelected && <span className="ml-auto text-brand text-sm font-bold">✓</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
