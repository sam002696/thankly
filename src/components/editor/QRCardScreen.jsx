import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, HeartIcon, Loader2 } from "lucide-react";
import Button from "../ui/Button";

const MOCK_URL = "https://thankly.app/card/abc123";

function CornerBracket({ position }) {
  const isTop = position.includes("top");
  const isLeft = position.includes("left");

  return (
    <div
      style={{
        position: "absolute",
        top: isTop ? 20 : "auto",
        bottom: isTop ? "auto" : 20,
        left: isLeft ? 20 : "auto",
        right: isLeft ? "auto" : 20,
        width: 28,
        height: 28,
        borderColor: "#3E2723",
        borderStyle: "solid",
        borderWidth: 0,
        borderTopWidth: isTop ? 3 : 0,
        borderBottomWidth: isTop ? 0 : 3,
        borderLeftWidth: isLeft ? 3 : 0,
        borderRightWidth: isLeft ? 0 : 3,
        borderRadius:
          isTop && isLeft
            ? "6px 0 0 0"
            : isTop && !isLeft
              ? "0 6px 0 0"
              : !isTop && isLeft
                ? "0 0 0 6px"
                : "0 0 6px 0",
        opacity: 0.35,
      }}
    />
  );
}

export default function QRCardScreen({ onBack }) {
  const recipientName = useSelector((s) => s.editor.recipientName) || "Friend";
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#FFF8E7",
        logging: false,
      });
      const link = document.createElement("a");
      link.download = "thankly-qr-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-cream">
      {/* Header — same as editor */}
      <header
        className="flex items-center justify-between px-6 py-4 border-b-2 border-ink bg-cream shrink-0"
        style={{ boxShadow: "0 2px 0px #3E2723" }}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-full bg-brand border-2 border-ink flex items-center justify-center"
            style={{ boxShadow: "var(--shadow-hard-sm)" }}
          >
            <HeartIcon size={14} fill="white" />
          </div>
          <span
            className="font-bold text-ink text-lg hidden sm:block"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Thankly
          </span>
        </Link>

        <span
          className="text-lg font-bold text-ink"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "22px" }}
        >
          QR Card
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-ink border-2 border-ink rounded-full px-4 py-2 transition-all hover:bg-ink hover:text-cream"
            style={{
              boxShadow: "var(--shadow-hard-sm)",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:block">Back to Editor</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            className="gap-2"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Download size={16} />
            )}
            {downloading ? "Saving…" : "Download"}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main
        className="flex-1 overflow-auto flex items-center justify-center p-6 md:p-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(62,39,35,0.04) 39px, rgba(62,39,35,0.04) 40px)
          `,
          backgroundColor: "#FFF8E7",
        }}
      >
        {/* QR Card — this is what gets exported */}
        <div
          ref={cardRef}
          style={{
            width: 480,
            backgroundColor: "#FFF8E7",
            border: "2.5px solid #3E2723",
            borderRadius: 24,
            boxShadow: "10px 10px 0px #3E2723",
            padding: "48px 40px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            fontFamily: "'Caveat', cursive",
          }}
        >
          {/* Corner brackets */}
          <CornerBracket position="top-left" />
          <CornerBracket position="top-right" />
          <CornerBracket position="bottom-left" />
          <CornerBracket position="bottom-right" />

          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                border: "2px solid #3E2723",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeartIcon size={13} color="white" fill="white" />
            </div>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 22,
                fontWeight: 700,
                color: "#3E2723",
                lineHeight: 1,
              }}
            >
              Thankly
            </span>
          </div>

          {/* "A message for" */}
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#3E2723",
              opacity: 0.55,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 4,
            }}
          >
            A message for
          </p>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 38,
              fontWeight: 700,
              color: "#3E2723",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            {recipientName}
          </p>

          {/* QR code on inner white card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "2px solid #3E2723",
              borderRadius: 16,
              padding: 20,
              boxShadow: "4px 4px 0px #3E2723",
              marginBottom: 28,
            }}
          >
            <QRCodeSVG
              value={MOCK_URL}
              size={180}
              bgColor="#FFFFFF"
              fgColor="#3E2723"
              level="M"
              style={{ display: "block" }}
            />
          </div>

          {/* Scan instruction */}
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#3E2723",
              marginBottom: 6,
              textAlign: "center",
            }}
          >
            Scan to open your card
          </p>
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 12,
              color: "#3E2723",
              opacity: 0.45,
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Point your phone camera at the code above
          </p>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#3E2723",
              opacity: 0.12,
              marginBottom: 20,
            }}
          />

          {/* Footer branding */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                border: "1.5px solid #3E2723",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeartIcon size={8} color="white" fill="white" />
            </div>
            <span
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#3E2723",
                opacity: 0.5,
                letterSpacing: "0.04em",
              }}
            >
              thankly.app
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
