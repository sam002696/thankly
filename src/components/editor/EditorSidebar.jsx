import { useDispatch, useSelector } from "react-redux";
import { setActivePanel } from "../../store/slices/editorSlice";
import BackgroundPanel from "./panels/BackgroundPanel";
import TagPanel from "./panels/TagPanel";
import TextPanel from "./panels/TextPanel";
import StickerPanel from "./panels/StickerPanel";
import ImagePanel from "./panels/ImagePanel";
import VoicePanel from "./panels/VoicePanel";
import ShapePanel from "./panels/ShapePanel";
import { Palette, Tag, Type, Sparkles, Image, Mic, Shapes } from "lucide-react";

const TABS = [
  { id: "background", icon: Palette, label: "Background" },
  { id: "tag", icon: Tag, label: "Tag" },
  { id: "text", icon: Type, label: "Text" },
  // { id: "stickers", icon: Sparkles, label: "Stickers" },
  { id: "image", icon: Image, label: "Image" },
  { id: "shapes", icon: Shapes, label: "Shapes" },
  { id: "voice", icon: Mic, label: "Voice" },
];

export default function EditorSidebar() {
  const dispatch = useDispatch();
  const { activePanel } = useSelector((s) => s.editor);

  const panels = {
    background: <BackgroundPanel />,
    tag: <TagPanel />,
    text: <TextPanel />,
    stickers: <StickerPanel />,
    image: <ImagePanel />,
    shapes: <ShapePanel />,
    voice: <VoicePanel />,
  };

  return (
    <aside
      className="flex flex-col border-r-2 border-ink bg-white"
      style={{
        width: "360px",
        minWidth: "320px",
        maxWidth: "360px",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Tab bar */}
      <div className="flex border-b-2 border-ink bg-cream overflow-x-auto  overflow-y-hidden shrink-0">
        {TABS.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => dispatch(setActivePanel(tab.id))}
              title={tab.label}
              className={[
                "flex flex-col items-center gap-0.5 px-3 py-3 text-xs font-semibold transition-all flex-1  border-b-2 -mb-0.5",
                activePanel === tab.id
                  ? "border-brand text-brand bg-white"
                  : "border-transparent text-ink/60 hover:text-ink hover:bg-black/5",
              ].join(" ")}
            >
              <Icon size={20} />
              <span className="hidden sm:block" style={{ fontSize: "10px" }}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-y-auto p-5">{panels[activePanel]}</div>
    </aside>
  );
}
