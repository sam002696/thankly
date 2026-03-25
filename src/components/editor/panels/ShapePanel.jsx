import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeShape } from '../../../store/slices/editorSlice'
import { SHAPES } from '../../svg'
import ShapePickerModal from '../ShapePickerModal'
import { Plus, Trash2, Shapes } from 'lucide-react'

export default function ShapePanel() {
  const dispatch = useDispatch()
  const shapes = useSelector(s => s.editor.shapes)
  const [pickerOpen, setPickerOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h3
          className="font-bold text-ink text-base mb-1"
          style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}
        >
          Shapes
        </h3>
        <p className="text-xs text-ink/50 mb-4">
          Place decorative shapes on your card. Drag and resize them freely.
        </p>

        {/* Add button */}
        <button
          onClick={() => setPickerOpen(true)}
          className="flex items-center gap-2 w-full justify-center py-3 rounded-xl border-2 border-ink font-semibold text-ink text-sm transition-all hover:-translate-y-px"
          style={{ boxShadow: '3px 3px 0px #3E2723', background: '#fff' }}
        >
          <Plus size={16} />
          Add Shape
        </button>
      </div>

      {/* Placed shapes list */}
      {shapes.length > 0 && (
        <div>
          <p
            className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-2"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            On card ({shapes.length})
          </p>
          <div className="space-y-2">
            {shapes.map(shape => {
              const def = SHAPES.find(s => s.id === shape.type)
              return (
                <div
                  key={shape.id}
                  className="flex items-center gap-3 p-2 rounded-xl border-2 border-ink/20 bg-white"
                >
                  {def && <def.Component width={32} height={32} />}
                  <span
                    className="flex-1 text-sm font-semibold text-ink"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {def?.label ?? shape.type}
                  </span>
                  <button
                    onClick={() => dispatch(removeShape(shape.id))}
                    className="text-ink/40 hover:text-brand transition-colors p-1"
                    title="Remove"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {shapes.length === 0 && (
        <div
          className="flex flex-col items-center gap-3 py-8 rounded-xl border-2 border-dashed border-ink/20 text-ink/30"
        >
          <Shapes size={32} />
          <p className="text-xs text-center" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            No shapes yet.<br />Click "Add Shape" to get started.
          </p>
        </div>
      )}

      {pickerOpen && <ShapePickerModal onClose={() => setPickerOpen(false)} />}
    </div>
  )
}
