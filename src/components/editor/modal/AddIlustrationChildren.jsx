import { Check } from "lucide-react";
import Button from "../../ui/Button";

const AddIlustrationChildren = ({
  ILLUSTRATIONS,
  illustration,
  handlePick,
}) => {
  return (
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
          <Button
            variant="raw"
            key={il.id}
            onClick={() => handlePick(il.id)}
            style={{
              background: "#ffffff",
              border: isSelected ? "var(--border-ink-thick)" : "var(--border-ink)",
              borderRadius: "var(--radius-card)",
              padding: "8px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              transition: "var(--transition-quick)",
              boxShadow: isSelected
                ? "var(--shadow-hard)"
                : "var(--shadow-hard-xs)",
              transform: isSelected ? "translate(-1px, -1px)" : "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.transform = "translate(-1px, -1px)";
                e.currentTarget.style.boxShadow = "var(--shadow-hard)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow-hard-xs)";
              }
            }}
          >
            <img
              src={il.src}
              alt={il.label}
              style={{
                width: "100%",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: "8px",
              }}
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
          </Button>
        );
      })}
    </div>
  );
};

export default AddIlustrationChildren;
