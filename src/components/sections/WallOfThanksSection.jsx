import { colors } from '../../theme/colors';
import Tape from '../ui/Tape';

const WallOfThanksSection = () => (
  <section id="gallery" className="py-24 bg-amber-50 relative">
    <div className="container mx-auto px-8">
      <div className="flex justify-between items-end mb-16">
        <div className="max-w-xl">
          <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-6xl text-amber-950 mb-4 flex items-center gap-4">
            Wall of Thanks
            <svg className="w-12 h-12 text-red-500 rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </h2>
          <p className="text-xl text-amber-950/70 font-medium">Get inspired by real cards created by our community. The possibilities are endless.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-amber-950 hover:text-red-500 transition-colors font-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
          View full gallery
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 — Mom */}
        <div className="relative group mt-8 lg:mt-0">
          <div className="absolute -top-10 -left-6 bg-green-600 text-white font-bold px-6 py-4 rounded-full shadow-lg border-2 border-dashed border-white z-30 transform group-hover:scale-110 transition-transform" style={{ fontFamily: 'Caveat, cursive', transform: 'rotate(-12deg)', fontSize: '1.875rem' }}>
            <span className="block text-center leading-none">Thankful</span>
            <span className="block text-center text-xl tracking-widest text-white/80">AND</span>
            <span className="block text-center leading-none">BLESSED</span>
          </div>
          <div className="bg-white border-4 border-amber-950 rounded-[2rem] p-8 shadow-[8px_8px_0px_rgba(245,166,35,1)] rotate-[-2deg] transition-transform group-hover:rotate-0 group-hover:translate-y-[-4px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center font-bold text-red-500 text-xl">M</div>
              <div>
                <h4 className="font-bold text-amber-950 text-lg leading-tight">To: Mom</h4>
                <p className="text-sm text-amber-950/60 font-medium">Just because</p>
              </div>
            </div>
            <p style={{ fontFamily: 'Caveat, cursive' }} className="text-3xl leading-snug text-amber-950 mb-6">"Thank you for always being my safe space. Your hugs cure everything. Love you more than words!"</p>
            <div className="flex justify-between items-center text-amber-950/40">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-sm font-bold">2 days ago</span>
            </div>
          </div>
        </div>

        {/* Card 2 — Team */}
        <div className="relative group mt-12 lg:mt-16">
          <Tape style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(2deg)', width: '128px', height: '40px', zIndex: 20 }} />
          <div className="border-4 border-dashed border-white rounded-[2rem] p-8 shadow-xl rotate-[3deg] transition-transform group-hover:rotate-1 group-hover:translate-y-[-4px] relative" style={{ backgroundColor: colors.orange }}>
            <svg className="absolute top-4 right-4 w-10 h-10 text-white opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
            <div className="h-32 bg-white/30 rounded-xl mb-6 flex items-center justify-center overflow-hidden border-2 border-white/50">
              <span style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl text-white drop-shadow-md">Best Team Ever 🚀</span>
            </div>
            <p className="text-lg text-white font-medium mb-6">So grateful for everyone pulling together on this last project. We crushed it because of your hard work!</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-amber-50 border-2 border-amber-500 flex justify-center items-center text-xs font-bold text-amber-950">A</div>
                <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-amber-500 flex justify-center items-center text-xs font-bold text-white">S</div>
                <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-amber-500 flex justify-center items-center text-xs font-bold text-white">+3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Work Anniversary */}
        <div className="relative group mt-8 lg:mt-4">
          <div className="bg-red-500 text-white border-4 border-amber-950 rounded-[2rem] p-8 shadow-[8px_8px_0px_rgba(62,39,35,1)] rotate-[-1deg] transition-transform group-hover:-rotate-2 group-hover:translate-y-[-4px] relative">
            <h4 style={{ fontFamily: 'Caveat, cursive' }} className="text-5xl mb-6">Happy Work Anniversary!</h4>
            <div className="bg-white text-amber-950 p-4 rounded-xl font-medium mb-6 rotate-1">
              "5 years of your brilliant ideas and terrible coffee making skills. Wouldn't trade you for the world. Thanks for being you, Sarah."
            </div>
            <div className="flex justify-end">
              <span style={{ fontFamily: 'Caveat, cursive' }} className="text-2xl text-white/90">- David</span>
            </div>
            <svg className="absolute bottom-4 left-4 w-24 h-6 text-white/40" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M5 15 Q 15 5 25 15 T 45 15 T 65 15 T 85 15 T 95 15" />
            </svg>
          </div>
        </div>

        {/* Card 4 — Featured Story (spans 2 cols) */}
        <div className="relative group mt-12 md:col-span-2 lg:col-span-2">
          <Tape style={{ top: '-10px', left: '40px', transform: 'rotate(-5deg)', width: '96px', height: '32px', zIndex: 20 }} />
          <Tape style={{ bottom: '-10px', right: '40px', transform: 'rotate(5deg)', width: '96px', height: '32px', zIndex: 20 }} />
          <div className="bg-amber-50 border-[5px] border-dashed border-amber-500 rounded-[2rem] p-8 flex flex-col sm:flex-row gap-8 items-center shadow-lg transition-transform group-hover:scale-[1.01]">
            <div className="w-full sm:w-1/3 aspect-square bg-green-600/20 rounded-full flex items-center justify-center relative border-4 border-green-600 border-dashed">
              <svg className="w-24 h-24 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-full sm:w-2/3">
              <h4 style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl text-amber-950 font-bold mb-2">Gratitude and Relationships</h4>
              <p className="text-lg text-amber-950/80 font-medium mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum nibh quis arcu feugiat, tincidunt iaculis metus facilisis. Aliquam vestibulum.</p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center gap-2 transition-colors">
                Read Full Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 — Coffee */}
        <div className="relative group mt-12 lg:mt-24">
          <div className="bg-white border-4 border-amber-950 rounded-[2rem] p-8 shadow-md rotate-[4deg] transition-transform group-hover:rotate-0 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full border-2 border-amber-950 flex items-center justify-center mb-4">
              <span className="text-2xl">☕️</span>
            </div>
            <p style={{ fontFamily: 'Caveat, cursive' }} className="text-3xl text-amber-950 leading-tight mb-4">"Thanks for the coffee and the chat. You're a lifesaver."</p>
            <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WallOfThanksSection;
