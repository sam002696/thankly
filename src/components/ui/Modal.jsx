import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * Reusable modal shell.
 *
 * Props:
 *   onClose   — called when overlay or close button is clicked
 *   title     — (optional) Caveat-font heading rendered above children
 *   subtitle  — (optional) small uppercase label rendered above the title
 *   maxWidth  — (optional) Tailwind max-width class, defaults to "max-w-sm"
 *   children  — modal body content
 */
export default function Modal({ onClose, title, subtitle, maxWidth = "max-w-sm", children }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(62,39,35,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className={`relative bg-cream border-2 border-ink rounded-3xl p-8 w-full ${maxWidth}`}
        style={{ boxShadow: "8px 8px 0px #3E2723" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-ink bg-white hover:bg-ink hover:text-cream transition-all"
          style={{ boxShadow: "var(--shadow-hard-sm)" }}
        >
          <X size={14} strokeWidth={2.5} />
        </button>

        {/* Optional title block */}
        {(subtitle || title) && (
          <div className="mb-7 pr-6">
            {subtitle && (
              <p className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                className="text-3xl font-bold text-ink"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {title}
              </h2>
            )}
          </div>
        )}

        {children}
      </div>
    </div>,
    document.body
  );
}
