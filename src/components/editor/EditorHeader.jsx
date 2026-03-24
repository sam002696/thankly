import { useDispatch } from 'react-redux'
import { resetCard, setIsPreviewOpen } from '../../store/slices/editorSlice'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function EditorHeader() {
  const dispatch = useDispatch()

  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-b-2 border-ink bg-cream"
      style={{ boxShadow: '0 2px 0px #3E2723' }}
    >
      {/* Logo / back link */}
      <Link to="/" className="flex items-center gap-2 group">
        <div
          className="w-8 h-8 rounded-full bg-brand border-2 border-ink flex items-center justify-center"
          style={{ boxShadow: 'var(--shadow-hard-sm)' }}
        >
          <span style={{ fontSize: '14px' }}>❤️</span>
        </div>
        <span
          className="font-bold text-ink text-lg hidden sm:block"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Thankly
        </span>
      </Link>

      {/* Center title */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-ink" style={{ fontFamily: "'Caveat', cursive", fontSize: '22px' }}>
          ✨ Card Editor
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(resetCard())}
          className="text-sm font-semibold text-ink opacity-60 hover:opacity-100 transition-opacity px-3 py-2 rounded-lg hover:bg-black/5"
        >
          Reset
        </button>

        {/* Preview button */}
        <button
          onClick={() => dispatch(setIsPreviewOpen(true))}
          className="flex items-center gap-2 text-sm font-bold text-ink border-2 border-ink rounded-full px-4 py-2 transition-all hover:bg-ink hover:text-cream"
          style={{ boxShadow: 'var(--shadow-hard-sm)', fontFamily: "'Quicksand', sans-serif" }}
        >
          <span>👁</span>
          <span className="hidden sm:block">Preview</span>
        </button>

        <Button variant="primary" size="sm" className="gap-2">
          Send Card
          <span>→</span>
        </Button>
      </div>
    </header>
  )
}
