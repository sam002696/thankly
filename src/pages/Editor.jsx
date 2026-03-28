import { useState } from 'react'
import { Provider } from 'react-redux'
import { QrCode, BookImage } from 'lucide-react'
import store from '../store'
import EditorHeader from '../components/editor/EditorHeader'
import EditorSidebar from '../components/editor/EditorSidebar'
import CardPreview from '../components/editor/CardPreview'
import PreviewModal from '../components/editor/PreviewModal'
import QRCardScreen from '../components/editor/QRCardScreen'
import Modal from '../components/ui/Modal'

function EditorInner() {
  const [showSendModal, setShowSendModal] = useState(false)
  const [showQRCard, setShowQRCard] = useState(false)

  if (showQRCard) {
    return <QRCardScreen onBack={() => setShowQRCard(false)} />
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-cream">
      <EditorHeader onSendClick={() => setShowSendModal(true)} />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        {/* Live preview area */}
        <main className="flex-1 overflow-auto flex flex-col">
          <div
            className="flex-1 flex items-center justify-center p-6 md:p-10"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%),
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px)
              `,
              backgroundColor: '#FFF8E7',
            }}
          >
            <CardPreview />
          </div>
          <div className="shrink-0 text-center pb-4 px-4">
            <p className="text-xs text-ink/30 font-medium">
              ✨ Use the tools on the left · click <strong>Preview</strong> to see your card open from an envelope
            </p>
          </div>
        </main>
      </div>

      {/* Envelope preview modal — rendered inside the Provider */}
      <PreviewModal />

      {/* Send modal */}
      {showSendModal && (
        <Modal
          onClose={() => setShowSendModal(false)}
          title="Send your card"
          subtitle="Ready to share?"
        >
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setShowSendModal(false); setShowQRCard(true) }}
              className="group flex items-start gap-4 p-4 rounded-2xl border-2 border-ink bg-white hover:bg-brand hover:text-white transition-all text-left"
              style={{ boxShadow: "4px 4px 0px #3E2723" }}
            >
              <div className="mt-0.5 w-10 h-10 rounded-xl bg-brand/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                <QrCode size={20} className="text-brand group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Send as QR Code
                </p>
                <p className="text-sm opacity-70 mt-0.5">
                  Generate a scannable QR card — perfect for printing or sharing in person.
                </p>
              </div>
            </button>

            <button
              onClick={() => setShowSendModal(false)}
              className="group flex items-start gap-4 p-4 rounded-2xl border-2 border-ink bg-white hover:bg-accent hover:text-white transition-all text-left"
              style={{ boxShadow: "4px 4px 0px #3E2723" }}
            >
              <div className="mt-0.5 w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                <BookImage size={20} className="text-accent group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Post as Story
                </p>
                <p className="text-sm opacity-70 mt-0.5">
                  Share your card as a beautiful story on Instagram, WhatsApp, or anywhere.
                </p>
              </div>
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default function Editor() {
  return (
    <Provider store={store}>
      <EditorInner />
    </Provider>
  )
}
