import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { addShape } from '../../store/slices/editorSlice'
import { SHAPES } from '../svg'
import { X } from 'lucide-react'

export default function ShapePickerModal({ onClose }) {
  const dispatch = useDispatch()

  function handlePick(shapeId) {
    dispatch(addShape({
      id: `${shapeId}-${Date.now()}`,
      type: shapeId,
      x: 60 + Math.floor(Math.random() * 80),
      y: 60 + Math.floor(Math.random() * 80),
      width: 80,
      height: 80,
    }))
    onClose()
  }

  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFF8E7',
          border: '2.5px solid #3E2723',
          borderRadius: '18px',
          boxShadow: 'var(--shadow-hard-xl)',
          width: '100%',
          maxWidth: '400px',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: '2px solid #3E2723',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#ffffff',
          }}
        >
          <h2
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '22px',
              fontWeight: 800,
              color: '#3E2723',
              margin: 0,
            }}
          >
            Pick a Shape
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '2px solid #3E2723',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              color: '#3E2723',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Shape grid */}
        <div
          style={{
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}
        >
          {SHAPES.map(shape => (
            <button
              key={shape.id}
              onClick={() => handlePick(shape.id)}
              style={{
                background: '#ffffff',
                border: '2px solid #3E2723',
                borderRadius: '14px',
                padding: '16px 12px 12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.12s',
                boxShadow: 'var(--shadow-hard-xs)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-1px, -1px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hard)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'var(--shadow-hard-xs)'
              }}
            >
              <shape.Component width={56} height={56} />
              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#3E2723',
                }}
              >
                {shape.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}
