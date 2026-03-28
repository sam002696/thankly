import { BookImage, QrCode } from "lucide-react";
import Button from "../../ui/Button";

const SendCardChildren = ({ setShowSendModal, setShowQRCard }) => {
  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="raw"
        onClick={() => {
          setShowSendModal(false);
          setShowQRCard(true);
        }}
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
            Generate a scannable QR card — perfect for printing or sharing in
            person.
          </p>
        </div>
      </Button>

      <Button
        variant="raw"
        onClick={() => setShowSendModal(false)}
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
            Share your card as a beautiful story on Instagram, WhatsApp, or
            anywhere.
          </p>
        </div>
      </Button>
    </div>
  );
};

export default SendCardChildren;
