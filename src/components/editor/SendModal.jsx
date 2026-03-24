import { X, QrCode, BookImage } from "lucide-react";

export default function SendModal({ onClose, onSelectQR, onSelectStory }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(62,39,35,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-cream border-2 border-ink rounded-3xl p-8 w-full max-w-sm"
        style={{ boxShadow: "8px 8px 0px #3E2723" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-ink bg-white hover:bg-ink hover:text-cream transition-all"
          style={{ boxShadow: "var(--shadow-hard-sm)" }}
        >
          <X size={14} strokeWidth={2.5} />
        </button>

        {/* Heading */}
        <div className="mb-7 pr-6">
          <p className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1">
            Ready to share?
          </p>
          <h2
            className="text-3xl font-bold text-ink"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Send your card
          </h2>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onSelectQR}
            className="group flex items-start gap-4 p-4 rounded-2xl border-2 border-ink bg-white hover:bg-brand hover:text-white transition-all text-left"
            style={{ boxShadow: "4px 4px 0px #3E2723" }}
          >
            <div className="mt-0.5 w-10 h-10 rounded-xl bg-brand/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
              <QrCode size={20} className="text-brand group-hover:text-white" />
            </div>
            <div>
              <p
                className="font-bold text-lg leading-tight"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Send as QR Code
              </p>
              <p className="text-sm opacity-70 mt-0.5">
                Generate a scannable QR card — perfect for printing or sharing in person.
              </p>
            </div>
          </button>

          <button
            onClick={onSelectStory}
            className="group flex items-start gap-4 p-4 rounded-2xl border-2 border-ink bg-white hover:bg-accent hover:text-white transition-all text-left"
            style={{ boxShadow: "4px 4px 0px #3E2723" }}
          >
            <div className="mt-0.5 w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
              <BookImage size={20} className="text-accent group-hover:text-white" />
            </div>
            <div>
              <p
                className="font-bold text-lg leading-tight"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Post as Story
              </p>
              <p className="text-sm opacity-70 mt-0.5">
                Share your card as a beautiful story on Instagram, WhatsApp, or anywhere.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
