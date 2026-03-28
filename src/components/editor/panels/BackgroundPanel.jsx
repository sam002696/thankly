import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackground,
  toggleTape,
  setIllustration,
  setIllustrationIntensity,
} from "../../../store/slices/editorSlice";
import { BACKGROUNDS, ILLUSTRATIONS } from "../../../store/constants/editorData";
import { Paperclip, ImagePlus, X, Check } from "lucide-react";
import Modal from "../../ui/Modal";

const INTENSITIES = [
  { id: "subtle", label: "Subtle", opacity: 0.12 },
  { id: "medium", label: "Medium", opacity: 0.28 },
  { id: "bold", label: "Bold", opacity: 0.5 },
];

export default function BackgroundPanel() {
  const dispatch = useDispatch();
  const { background, hasTape, illustration, illustrationIntensity } =
    useSelector((s) => s.editor);
  const [showModal, setShowModal] = useState(false);

  const activeIllustration = ILLUSTRATIONS.find((il) => il.id === illustration);

  function handlePick(id) {
    dispatch(setIllustration(illustration === id ? null : id));
    setShowModal(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3
          className="font-bold text-ink text-base mb-3"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "20px" }}
        >
          Card Background
        </h3>
        <p className="text-xs text-ink/50 mb-4">
          Choose a background color for your card
        </p>

        {/* Color grid */}
        <div className="grid grid-cols-5 gap-2">
          {BACKGROUNDS.map((bg) => {
            const isSelected = background === bg.value;
            return (
              <button
                key={bg.id}
                onClick={() => dispatch(setBackground(bg.value))}
                title={bg.label}
                style={{
                  backgroundColor: bg.value,
                  border: isSelected
                    ? "2.5px solid #3E2723"
                    : "2px solid rgba(62,39,35,0.2)",
                  boxShadow: isSelected ? "3px 3px 0px #3E2723" : "none",
                  transform: isSelected ? "translate(-1px, -1px)" : "none",
                }}
                className="w-12 h-12 rounded-lg transition-all hover:-translate-y-px relative flex items-center justify-center"
              >
                {isSelected && (
                  <span
                    style={{
                      color: bg.dark ? "#ffffff" : "#3E2723",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Color labels - show current selection */}
        <div className="mt-3 flex items-center gap-2">
          <div
            className="w-5 h-5 rounded border-2 border-ink"
            style={{ backgroundColor: background }}
          />
          <span className="text-sm text-ink/60 font-medium">
            {BACKGROUNDS.find((b) => b.value === background)?.label ?? "Custom"}
          </span>
        </div>
      </div>

      {/* Illustrations */}
      <div>
        <h3
          className="font-bold text-ink text-base mb-3"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "20px" }}
        >
          Illustrations
        </h3>
        <p className="text-xs text-ink/50 mb-4">
          Add a decorative illustration to your card background
        </p>

        {/* Current illustration or pick button */}
        {activeIllustration ? (
          <div
            style={{
              border: "2px solid #3E2723",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "3px 3px 0px #3E2723",
              marginBottom: "12px",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={activeIllustration.src}
                alt={activeIllustration.label}
                style={{ width: "100%", height: "96px", objectFit: "cover", display: "block" }}
              />
              <button
                onClick={() => dispatch(setIllustration(null))}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#3E2723",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFF8E7",
                }}
              >
                <X size={14} />
              </button>
            </div>
            <div
              style={{
                padding: "8px 12px",
                background: "#ffffff",
                borderTop: "2px solid #3E2723",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#3E2723",
                }}
              >
                {activeIllustration.label}
              </span>
              <button
                onClick={() => setShowModal(true)}
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#3E2723",
                  background: "none",
                  border: "1.5px solid rgba(62,39,35,0.35)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  cursor: "pointer",
                }}
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-3 w-full p-3 rounded-xl border-2 border-dashed transition-all text-left border-ink/30 hover:border-ink/60"
          >
            <ImagePlus size={22} className="text-ink/50" />
            <div>
              <p className="font-semibold text-ink text-sm">Add Illustration</p>
              <p className="text-xs text-ink/50">Decorative background pattern</p>
            </div>
          </button>
        )}

        {/* Intensity picker — only shown when an illustration is active */}
        {illustration && (
          <div className="mt-3">
            <p className="text-xs text-ink/50 mb-2">Intensity</p>
            <div className="flex gap-2">
              {INTENSITIES.map((level) => {
                const isActive = illustrationIntensity === level.id;
                return (
                  <button
                    key={level.id}
                    onClick={() => dispatch(setIllustrationIntensity(level.id))}
                    style={{
                      flex: 1,
                      padding: "6px 4px",
                      border: isActive
                        ? "2.5px solid #3E2723"
                        : "2px solid rgba(62,39,35,0.25)",
                      borderRadius: "10px",
                      background: isActive ? "#3E2723" : "#ffffff",
                      boxShadow: isActive ? "2px 2px 0px #3E2723" : "none",
                      cursor: "pointer",
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isActive ? "#FFF8E7" : "#3E2723",
                      transition: "all 0.12s",
                    }}
                  >
                    {level.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Tape toggle */}
      <div>
        <h3
          className="font-bold text-ink text-base mb-3"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "20px" }}
        >
          Tape Decoration
        </h3>
        <button
          onClick={() => dispatch(toggleTape())}
          className={[
            "flex items-center gap-3 w-full p-3 rounded-xl border-2 transition-all text-left",
            hasTape
              ? "border-ink bg-ink/5 shadow-[2px_2px_0px_#3E2723]"
              : "border-ink/30 hover:border-ink/60",
          ].join(" ")}
        >
          <Paperclip size={22} />
          <div>
            <p className="font-semibold text-ink text-sm">Tape Strip</p>
            <p className="text-xs text-ink/50">
              Decorative tape at the top of the card
            </p>
          </div>
          <div className="ml-auto">
            <div
              className={`w-10 h-6 rounded-full border-2 border-ink transition-colors relative ${hasTape ? "bg-brand" : "bg-ink/10"}`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white border-2 border-ink transition-transform ${hasTape ? "translate-x-4" : "translate-x-0.5"}`}
              />
            </div>
          </div>
        </button>
      </div>

      {/* Illustration picker modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} title="Pick an Illustration" maxWidth="max-w-md">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            {ILLUSTRATIONS.map((il) => {
              const isSelected = illustration === il.id;
              return (
                <button
                  key={il.id}
                  onClick={() => handlePick(il.id)}
                  style={{
                    background: "#ffffff",
                    border: isSelected ? "2.5px solid #3E2723" : "2px solid #3E2723",
                    borderRadius: "14px",
                    padding: "8px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.12s",
                    boxShadow: isSelected ? "4px 4px 0px #3E2723" : "3px 3px 0px #3E2723",
                    transform: isSelected ? "translate(-1px, -1px)" : "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = "translate(-1px, -1px)";
                      e.currentTarget.style.boxShadow = "4px 4px 0px #3E2723";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "3px 3px 0px #3E2723";
                    }
                  }}
                >
                  <img
                    src={il.src}
                    alt={il.label}
                    style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#3E2723",
                    }}
                  >
                    {il.label}
                  </span>
                  {isSelected && (
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        right: "6px",
                        width: "20px",
                        height: "20px",
                        background: "#3E2723",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={12} color="#FFF8E7" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
}
