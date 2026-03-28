import { useState } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import EditorHeader from '../components/editor/EditorHeader'
import EditorSidebar from '../components/editor/EditorSidebar'
import CardPreview from '../components/editor/CardPreview'
import PreviewModal from '../components/editor/PreviewModal'
import QRCardScreen from '../components/editor/QRCardScreen'
import Modal from '../components/ui/Modal'
import SendCardChildren from '../components/editor/modal/SendCardChildren'

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

      {/* Send card modal */}
      {showSendModal && (
        <Modal
          onClose={() => setShowSendModal(false)}
          title="Send your card"
          subtitle="Ready to share?"
        >
          <SendCardChildren setShowSendModal={setShowSendModal} setShowQRCard={setShowQRCard} />
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
