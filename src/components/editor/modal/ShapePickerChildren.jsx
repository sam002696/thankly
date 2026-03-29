import { useDispatch } from "react-redux";
import { SHAPES } from "../../svg";
import { addShape } from "../../../store/slices/editorSlice";
import Button from "../../ui/Button";

const ShapePickerChildren = ({ onClose }) => {
  const dispatch = useDispatch();

  function handlePick(shapeId) {
    dispatch(
      addShape({
        id: `${shapeId}-${Date.now()}`,
        type: shapeId,
        x: 60 + Math.floor(Math.random() * 80),
        y: 60 + Math.floor(Math.random() * 80),
        width: 80,
        height: 80,
      }),
    );
    onClose();
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "12px",
      }}
    >
      {SHAPES.map((shape) => (
        <Button
          variant="raw"
          key={shape.id}
          onClick={() => handlePick(shape.id)}
          style={{
            background: "#ffffff",
            border: "var(--border-ink)",
            borderRadius: "var(--radius-card)",
            padding: "16px 12px 12px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            transition: "var(--transition-quick)",
            boxShadow: "var(--shadow-hard-xs)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-1px, -1px)";
            e.currentTarget.style.boxShadow = "var(--shadow-hard)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "var(--shadow-hard-xs)";
          }}
        >
          <shape.Component width={56} height={56} />
          <span
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#3E2723",
            }}
          >
            {shape.label}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default ShapePickerChildren;
