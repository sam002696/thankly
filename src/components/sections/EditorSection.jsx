import { useState } from 'react';
import { blobShape, blobShape3 } from '../../theme/shapes';
import { cardBackgrounds } from '../../theme/colors';
import Button from '../ui/Button';
import Tape from '../ui/Tape';

const STICKERS = ['⭐', '❤️', '✨', '🌿', '🌸', '🎉'];

const EditorSection = ({ onSendCard }) => {
  const [selectedBg, setSelectedBg] = useState('cream');
  const [cardTitle, setCardTitle] = useState('Dearest Friend,');
  const [cardMessage, setCardMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSend = () => {
    setSendSuccess(true);
    if (onSendCard) onSendCard();
    setTimeout(() => setSendSuccess(false), 3000);
  };

  const activeBgColor = cardBackgrounds.find(b => b.name === selectedBg)?.color ?? cardBackgrounds[0].color;

  return (
    <section className="py-24 relative overflow-hidden z-0" style={{ backgroundColor: '#F5A623' }}>
      <div className="absolute top-0 left-[-10%] w-200 h-200 bg-brand opacity-40 mix-blend-multiply blur-2xl z-0" style={blobShape}></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-cream opacity-30 mix-blend-overlay blur-3xl z-0" style={blobShape3}></div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden z-0">
        <h2 style={{ fontFamily: 'Caveat, cursive', fontSize: '20vw', whiteSpace: 'nowrap', lineHeight: 1 }} className="text-white select-none">THANK YOU</h2>
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-6xl md:text-7xl text-ink mb-6 drop-shadow-sm">Craft Your Masterpiece</h2>
          <p className="text-xl text-ink/80 font-medium max-w-2xl mx-auto">Our editor gives you the freedom to make each message as unique as the person receiving it.</p>
        </div>

        <div className="w-full max-w-4xl bg-cream border-4 border-ink rounded-4xl shadow-hard-2xl p-4 md:p-8 relative">
          {/* Window chrome dots */}
          <div className="flex gap-2 mb-6 border-b-2 border-ink/20 pb-4">
            <div className="w-4 h-4 rounded-full bg-brand border-2 border-ink"></div>
            <div className="w-4 h-4 rounded-full bg-accent border-2 border-ink"></div>
            <div className="w-4 h-4 rounded-full bg-success border-2 border-ink"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar tools */}
            <div className="w-full md:w-1/4 flex flex-col gap-4">
              {/* Background picker */}
              <div className="bg-white border-2 border-dashed border-ink rounded-xl p-4 cursor-pointer hover:bg-accent/10 transition-colors">
                <span className="font-bold text-ink mb-2 block text-sm">Background</span>
                <div className="flex gap-2 flex-wrap">
                  {cardBackgrounds.map((bg) => (
                    <div
                      key={bg.name}
                      onClick={() => setSelectedBg(bg.name)}
                      className={`w-8 h-8 rounded-full border-2 border-ink cursor-pointer ${selectedBg === bg.name ? 'ring-2 ring-brand ring-offset-2' : ''}`}
                      style={{ backgroundColor: bg.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Sticker picker */}
              <div className="bg-white border-2 border-dashed border-ink rounded-xl p-4">
                <span className="font-bold text-ink mb-2 block text-sm">Stickers</span>
                <div className="grid grid-cols-3 gap-2">
                  {STICKERS.map((sticker, i) => (
                    <div key={i} className="aspect-square bg-cream rounded-md flex items-center justify-center cursor-pointer hover:bg-accent/20 text-lg">{sticker}</div>
                  ))}
                </div>
              </div>

              {/* Voice message */}
              <div className="bg-white border-2 border-dashed border-ink rounded-xl p-4">
                <span className="font-bold text-ink mb-3 flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                  Voice Message
                </span>
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`w-full font-bold py-3 px-4 rounded-xl border-2 border-dashed transition-colors flex items-center justify-center gap-2 group
                    ${isRecording
                      ? 'bg-brand text-white border-brand'
                      : 'bg-brand/10 hover:bg-brand/20 text-brand border-brand/40'
                    }`}
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                  <span>{isRecording ? 'Recording...' : 'Record Voice'}</span>
                </button>
                <div className="mt-3 p-2 bg-cream rounded-lg border border-ink/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <div className="flex-1 h-8 bg-white rounded-md flex items-center px-2 gap-1">
                      <div className="w-1 h-3 bg-brand rounded-full"></div>
                      <div className="w-1 h-5 bg-brand rounded-full"></div>
                      <div className="w-1 h-2 bg-brand rounded-full"></div>
                      <div className="w-1 h-6 bg-brand rounded-full"></div>
                      <div className="w-1 h-4 bg-brand rounded-full"></div>
                      <div className="w-1 h-3 bg-brand/50 rounded-full"></div>
                      <div className="w-1 h-2 bg-brand/50 rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-ink/60">0:42</span>
                  </div>
                </div>
              </div>

              <Button
                variant={sendSuccess ? 'success' : 'primary'}
                className="w-full rounded-xl"
                onClick={handleSend}
              >
                {sendSuccess ? '✓ Card Sent!' : 'Send Card'}
              </Button>
            </div>

            {/* Card preview */}
            <div className="w-full md:w-3/4 bg-white rounded-2xl border-2 border-ink relative overflow-hidden min-h-100 flex items-center justify-center p-8">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.04\\'/%3E%3C/svg%3E')" }}></div>

              <div
                className="w-full max-w-sm border-4 border-dashed border-accent p-8 rounded-3xl relative z-10 shadow-lg -rotate-1"
                style={{ backgroundColor: activeBgColor }}
              >
                <Tape style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(4deg)', width: '80px', height: '32px' }} />

                <div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-ink rounded-full flex items-center justify-center cursor-pointer z-20 hover:bg-brand hover:text-white transition-colors"
                  onClick={() => { setCardTitle('Dearest Friend,'); setCardMessage(''); }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>

                <input
                  style={{ fontFamily: 'Caveat, cursive', background: 'transparent' }}
                  className="text-5xl text-ink text-center mb-6 w-full border-none outline-none focus:bg-accent/10 rounded px-2 transition-colors"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                />
                <textarea
                  className="w-full text-lg text-ink/80 text-center border-none outline-none focus:bg-accent/10 rounded px-2 transition-colors min-h-25 resize-none bg-transparent"
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  placeholder="Start typing your message of gratitude here..."
                />

                <svg className="absolute bottom-4 left-4 w-12 h-12 text-brand cursor-move -rotate-15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;
