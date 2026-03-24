import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../../store/slices/editorSlice'

export default function ImagePanel() {
  const dispatch = useDispatch()
  const { image } = useSelector(s => s.editor)
  const fileInputRef = useRef(null)

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => dispatch(setImage(e.target.result))
    reader.readAsDataURL(file)
  }

  const handleChange = (e) => handleFile(e.target.files?.[0])

  const handleDrop = (e) => {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-bold text-ink mb-1" style={{ fontFamily: "'Caveat', cursive", fontSize: '20px' }}>
          Add a Photo
        </h3>
        <p className="text-xs text-ink/50 mb-4">
          Upload a photo to appear at the top of your card
        </p>

        {!image ? (
          <button
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="w-full border-2 border-dashed border-ink/30 rounded-2xl p-8 flex flex-col items-center gap-3 hover:border-ink/60 hover:bg-black/5 transition-all text-center"
          >
            <span className="text-5xl">🖼️</span>
            <div>
              <p className="font-semibold text-ink text-sm">Click to upload</p>
              <p className="text-xs text-ink/40 mt-1">or drag & drop an image here</p>
            </div>
            <p className="text-xs text-ink/30">JPG, PNG, GIF, WebP</p>
          </button>
        ) : (
          <div className="space-y-3">
            <div
              className="w-full rounded-xl overflow-hidden border-2 border-ink"
              style={{ boxShadow: 'var(--shadow-hard-sm)' }}
            >
              <img
                src={image}
                alt="Card photo"
                className="w-full object-cover"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 py-2 text-sm font-semibold text-ink border-2 border-ink rounded-xl hover:bg-ink/5 transition-all"
                style={{ boxShadow: 'var(--shadow-hard-sm)' }}
              >
                Change photo
              </button>
              <button
                onClick={() => dispatch(setImage(null))}
                className="flex-1 py-2 text-sm font-semibold text-brand border-2 border-brand rounded-xl hover:bg-brand/5 transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
