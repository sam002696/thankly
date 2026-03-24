import { Provider } from 'react-redux'
import store from '../store'
import EditorHeader from '../components/editor/EditorHeader'
import EditorSidebar from '../components/editor/EditorSidebar'
import CardPreview from '../components/editor/CardPreview'

function EditorInner() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-cream">
      <EditorHeader />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        {/* Preview area */}
        <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 flex items-center justify-center p-6 md:p-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%), #FFF8E7',
              backgroundImage: `
                radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%),
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px)
              `,
            }}
          >
            <CardPreview />
          </div>
          {/* Hint text */}
          <div className="shrink-0 text-center pb-4 px-4">
            <p className="text-xs text-ink/30 font-medium">
              ✨ Use the tools on the left to customize your card
            </p>
          </div>
        </main>
      </div>
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
