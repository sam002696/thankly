import { useDispatch, useSelector } from 'react-redux'
import { setBackground, toggleTape } from '../../../store/slices/editorSlice'
import { BACKGROUNDS } from '../../../store/constants/editorData'

export default function BackgroundPanel() {
  const dispatch = useDispatch()
  const { background, hasTape } = useSelector(s => s.editor)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-ink text-base mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Card Background
        </h3>
        <p className="text-xs text-ink/50 mb-4">Choose a background color for your card</p>

        {/* Color grid */}
        <div className="grid grid-cols-5 gap-2">
          {BACKGROUNDS.map((bg) => {
            const isSelected = background === bg.value
            return (
              <button
                key={bg.id}
                onClick={() => dispatch(setBackground(bg.value))}
                title={bg.label}
                style={{
                  backgroundColor: bg.value,
                  border: isSelected ? '2.5px solid #3E2723' : '2px solid rgba(62,39,35,0.2)',
                  boxShadow: isSelected ? '3px 3px 0px #3E2723' : 'none',
                  transform: isSelected ? 'translate(-1px, -1px)' : 'none',
                }}
                className="w-12 h-12 rounded-lg transition-all hover:-translate-y-px relative flex items-center justify-center"
              >
                {isSelected && (
                  <span
                    style={{
                      color: bg.dark ? '#ffffff' : '#3E2723',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Color labels - show current selection */}
        <div className="mt-3 flex items-center gap-2">
          <div
            className="w-5 h-5 rounded border-2 border-ink"
            style={{ backgroundColor: background }}
          />
          <span className="text-sm text-ink/60 font-medium">
            {BACKGROUNDS.find(b => b.value === background)?.label ?? 'Custom'}
          </span>
        </div>
      </div>

      {/* Tape toggle */}
      <div>
        <h3 className="font-bold text-ink text-base mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Tape Decoration
        </h3>
        <button
          onClick={() => dispatch(toggleTape())}
          className={[
            'flex items-center gap-3 w-full p-3 rounded-xl border-2 transition-all text-left',
            hasTape
              ? 'border-ink bg-ink/5 shadow-[2px_2px_0px_#3E2723]'
              : 'border-ink/30 hover:border-ink/60',
          ].join(' ')}
        >
          <span className="text-2xl">🖇️</span>
          <div>
            <p className="font-semibold text-ink text-sm">Tape Strip</p>
            <p className="text-xs text-ink/50">Decorative tape at the top of the card</p>
          </div>
          <div className="ml-auto">
            <div
              className={`w-10 h-6 rounded-full border-2 border-ink transition-colors relative ${hasTape ? 'bg-brand' : 'bg-ink/10'}`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white border-2 border-ink transition-transform ${hasTape ? 'translate-x-4' : 'translate-x-0.5'}`}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
