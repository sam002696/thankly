import { colors } from '../../theme/colors';
import Tape from '../ui/Tape';

const HowItWorksSection = () => (
  <section id="mission" className="py-24 relative z-10" style={{ backgroundColor: colors.accent }}>
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute top-10 left-10 w-32 h-32 text-ink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 20 Q50 80 80 20" />
        <path d="M20 40 Q50 100 80 40" />
        <path d="M20 60 Q50 120 80 60" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-24 h-24 text-cream" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,10 61,40 95,40 68,60 78,90 50,70 22,90 32,60 5,40 39,40" />
      </svg>
    </div>

    <div className="container mx-auto px-8 relative z-10">
      <div className="text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
        <div className="absolute bottom-2 left-0 w-full h-6 bg-brand/30 -rotate-2 rounded-full"></div>
        <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-6xl md:text-7xl text-ink relative z-10 drop-shadow-sm">How to Practice Gratitude</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="relative mt-8 group">
          <Tape style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-4deg)', width: '96px', height: '32px' }} />
          <div className="bg-cream border-[5px] border-dashed border-brand rounded-4xl p-8 h-full transform transition-transform group-hover:-translate-y-2 group-hover:rotate-1 shadow-lg relative z-0">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-success text-white rounded-full flex items-center justify-center font-bold border-2 border-ink shadow-sm z-20" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.875rem', transform: 'rotate(-10deg)' }}>
              1
            </div>
            <div className="h-40 bg-white/50 rounded-2xl mb-6 flex items-center justify-center border-2 border-ink border-b-4 border-r-4 relative overflow-hidden">
              <svg className="w-20 h-20 text-ink opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <svg className="absolute bottom-4 right-4 w-12 h-6 text-brand" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M10 25 Q30 5 50 25 T90 25" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl text-ink font-bold mb-4">Write a heartfelt message</h3>
            <p className="text-lg text-ink/80 font-medium">Start with a blank canvas or use our guided prompts to express exactly how you feel.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mt-16 group">
          <Tape style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(3deg)', width: '80px', height: '32px' }} />
          <div className="bg-cream border-[5px] border-dashed border-brand rounded-4xl p-8 h-full transform transition-transform group-hover:-translate-y-2 group-hover:-rotate-1 shadow-lg relative z-0">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-success text-white rounded-full flex items-center justify-center font-bold border-2 border-ink shadow-sm z-20" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.875rem', transform: 'rotate(5deg)' }}>
              2
            </div>
            <div className="h-40 bg-white/50 rounded-2xl mb-6 flex items-center justify-center border-2 border-ink border-b-4 border-r-4 relative overflow-hidden">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-accent/20 rounded-lg transform rotate-6 border border-ink border-dashed"></div>
                <div className="absolute inset-0 bg-white rounded-lg border-2 border-ink flex items-center justify-center -rotate-3">
                  <svg className="w-10 h-10 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl text-ink font-bold mb-4">Add personal touches</h3>
            <p className="text-lg text-ink/80 font-medium">Make it yours by adding photos, <span className="bg-accent/20 px-1 rounded">voice notes</span>, cute stickers, and beautiful hand-drawn borders.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative mt-4 group">
          <Tape style={{ top: '-8px', right: '40px', transform: 'rotate(8deg)', width: '96px', height: '32px' }} />
          <div className="bg-cream border-[5px] border-dashed border-brand rounded-4xl p-8 h-full transform transition-transform group-hover:-translate-y-2 group-hover:rotate-2 shadow-lg relative z-0">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-success text-white rounded-full flex items-center justify-center font-bold border-2 border-ink shadow-sm z-20" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.875rem', transform: 'rotate(-15deg)' }}>
              3
            </div>
            <div className="h-40 bg-white/50 rounded-2xl mb-6 flex items-center justify-center border-2 border-ink border-b-4 border-r-4 relative overflow-hidden">
              <svg className="w-20 h-20 text-ink opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <svg className="absolute top-4 right-4 w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl text-ink font-bold mb-4">Share via link or QR</h3>
            <p className="text-lg text-ink/80 font-medium">Send your digital creation instantly via text, email, or let them scan a unique QR code to open their gift.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
