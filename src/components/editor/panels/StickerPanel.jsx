import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSticker } from '../../../store/slices/editorSlice'
import { STICKER_CATEGORIES } from '../../../store/constants/editorData'

export default function StickerPanel() {
  const dispatch = useDispatch()
  const { sticker } = useSelector(s => s.editor)
  const [activeCategory, setActiveCategory] = useState('hearts')

  const category = STICKER_CATEGORIES.find(c => c.id === activeCategory)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-ink mb-1" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Stickers
        </h3>
        <p className="text-xs text-ink/50 mb-4">Add a decorative sticker to your card</p>

        {/* Category tabs */}
        <div className="flex gap-1 overflow-x-auto pb-1 mb-4">
          {STICKER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                'px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border-2 transition-all',
                activeCategory === cat.id
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white text-ink border-ink/20 hover:border-ink/50',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sticker grid */}
        <div className="grid grid-cols-5 gap-2">
          {category?.stickers.map((emoji) => {
            const isSelected = sticker === emoji
            return (
              <button
                key={emoji}
                onClick={() => dispatch(setSticker(isSelected ? null : emoji))}
                style={{
                  border: isSelected ? '2.5px solid #3E2723' : '2px solid rgba(62,39,35,0.1)',
                  boxShadow: isSelected ? '3px 3px 0px #3E2723' : 'none',
                  transform: isSelected ? 'translate(-1px,-1px)' : 'none',
                  background: isSelected ? '#FFF8E7' : 'white',
                }}
                className="w-full aspect-square rounded-xl text-2xl flex items-center justify-center transition-all hover:scale-110"
              >
                {emoji}
              </button>
            )
          })}
        </div>

        {/* Clear sticker */}
        {sticker && (
          <button
            onClick={() => dispatch(setSticker(null))}
            className="mt-4 w-full py-2 text-sm font-semibold text-ink/50 border-2 border-dashed border-ink/20 rounded-xl hover:border-ink/50 hover:text-ink transition-all"
          >
            ✕ Remove sticker
          </button>
        )}
      </div>
    </div>
  )
}
