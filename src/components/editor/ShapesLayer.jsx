import { useState } from 'react'
import { Rnd } from 'react-rnd'
import { useDispatch, useSelector } from 'react-redux'
import { updateShape, removeShape } from '../../store/slices/editorSlice'
import { SHAPES } from '../svg'
import { Trash2 } from 'lucide-react'

export default function ShapesLayer() {
  const dispatch = useDispatch()
  const shapes = useSelector(s => s.editor.shapes)
  const [selectedId, setSelectedId] = useState(null)

  if (!shapes.length) return null

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
      {/* Deselect backdrop — only rendered when a shape is selected */}
      {selectedId && (
        <div
          style={{ position: 'absolute', inset: 0, zIndex: 11 }}
          onClick={() => setSelectedId(null)}
        />
      )}

      {shapes.map(shape => {
        const shapeDef = SHAPES.find(s => s.id === shape.type)
        if (!shapeDef) return null
        const { Component } = shapeDef
        const isSelected = selectedId === shape.id

        return (
          <Rnd
            key={shape.id}
            position={{ x: shape.x, y: shape.y }}
            size={{ width: shape.width, height: shape.height }}
            onDragStop={(e, d) =>
              dispatch(updateShape({ id: shape.id, x: d.x, y: d.y }))
            }
            onResizeStop={(e, dir, ref, delta, pos) =>
              dispatch(updateShape({
                id: shape.id,
                x: pos.x,
                y: pos.y,
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
              }))
            }
            enableUserSelectHack={false}
            style={{ pointerEvents: 'auto', zIndex: isSelected ? 13 : 12 }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                outline: isSelected ? '2px dashed #3E2723' : 'none',
                outlineOffset: '2px',
                borderRadius: '4px',
                cursor: 'grab',
              }}
              onClick={e => { e.stopPropagation(); setSelectedId(shape.id) }}
            >
              {/* Floating delete toolbar */}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-38px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#3E2723',
                    borderRadius: '8px',
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 20,
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.35)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <button
                    onClick={e => {
                      e.stopPropagation()
                      dispatch(removeShape(shape.id))
                      setSelectedId(null)
                    }}
                    title="Delete shape"
                    style={{
                      color: '#ffffff',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}

              {/* SVG shape fills the container */}
              <Component width={shape.width} height={shape.height} />
            </div>
          </Rnd>
        )
      })}
    </div>
  )
}
