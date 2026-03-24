import { verticalTornEdge, blobShape, blobShape2 } from '../../theme/shapes';
import { colors } from '../../theme/colors';

const HeroSection = ({ onCreateCard }) => (
  <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
    <div className="absolute inset-0 z-0 flex">
      <div className="w-1/2 h-full bg-amber-50"></div>
      <div className="w-[55%] h-full absolute right-0 top-0 z-0" style={{ ...verticalTornEdge, backgroundColor: colors.orange }}>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-500/20 blur-3xl" style={blobShape}></div>
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-amber-50/20 blur-2xl" style={blobShape2}></div>
      </div>
    </div>

    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg className="absolute top-32 left-12 w-16 h-16 text-red-500 opacity-80 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="transparent" />
      </svg>
      <svg className="absolute top-24 right-32 w-48 h-24 text-amber-50 opacity-90" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <path d="M10,50 Q30,10 50,50 T90,50 T130,50 T170,50 T210,50" style={{ strokeDasharray: 1000, strokeDashoffset: 0 }} />
      </svg>
      <svg className="absolute bottom-24 left-24 w-12 h-12 text-amber-500 opacity-80 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 85 L15 50 A 20 20 0 0 1 50 20 A 20 20 0 0 1 85 50 Z" />
      </svg>
      <svg className="absolute top-1/2 left-[45%] w-10 h-10 text-red-500 opacity-60 rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 15 L58 38 L85 38 L62 55 L70 80 L50 62 L30 80 L38 55 L15 38 L42 38 Z" />
      </svg>
    </div>

    <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl pl-4 md:pl-8">
        <div className="inline-block mb-4 relative">
          <span style={{ fontFamily: 'Caveat, cursive', transform: 'rotate(-2deg)', display: 'inline-block' }} className="text-3xl md:text-4xl text-green-600 bg-white/80 px-4 py-1 rounded-lg border-2 border-dashed border-green-600 shadow-sm">
            Spread joy daily ✨
          </span>
          <svg className="absolute -top-4 -right-6 w-8 h-8 text-red-500 rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h1 style={{ fontFamily: 'Caveat, cursive' }} className="text-7xl md:text-8xl leading-[0.9] text-amber-950 mb-6 drop-shadow-sm">
          the Importance of <br />
          <span className="text-8xl md:text-[140px] text-red-500 font-bold uppercase tracking-tight block mt-2">GRATITUDE</span>
        </h1>

        <p className="text-xl text-amber-950/80 mb-10 font-medium leading-relaxed max-w-md">
          Turn your fleeting thoughts of appreciation into beautiful, hand-crafted digital cards. Share a little warmth with the people who matter most.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={onCreateCard}
            className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-[4px_4px_0px_rgba(62,39,35,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all border-2 border-amber-950 flex items-center justify-center gap-2 group"
          >
            Create a Thank You Card
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="bg-white hover:bg-amber-50 text-amber-950 text-xl font-bold py-4 px-8 rounded-full border-2 border-dashed border-amber-950 shadow-sm transition-all flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            See How It Works
          </button>
        </div>
      </div>

      <div className="relative h-[600px] w-full flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-square">
          <div className="absolute inset-4 rounded-full border-4 border-dashed border-amber-50/40" style={{ animation: 'spin 60s linear infinite' }}></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-red-500 rounded-full mix-blend-multiply opacity-80 blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-600 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 w-64 h-80">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-40 bg-[#8CB388] rounded-t-[100px] border-4 border-amber-950"></div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FFD1B3] rounded-full border-4 border-amber-950 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                  <path d="M25 45 Q35 35 45 45" fill="none" stroke="#3E2723" strokeWidth="4" strokeLinecap="round" />
                  <path d="M55 45 Q65 35 75 45" fill="none" stroke="#3E2723" strokeWidth="4" strokeLinecap="round" />
                  <path d="M40 65 Q50 75 60 65" fill="none" stroke="#3E2723" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="25" cy="55" r="8" fill="#E85D4E" opacity="0.4" />
                  <circle cx="75" cy="55" r="8" fill="#E85D4E" opacity="0.4" />
                  <path d="M10 50 Q10 10 50 10 Q90 10 90 50 L95 50 Q95 5 50 5 Q5 5 5 50 Z" fill="#3E2723" />
                </svg>
              </div>
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 h-24 flex justify-between z-20">
                <div className="w-24 h-12 bg-[#FFD1B3] rounded-full border-4 border-amber-950 rotate-[20deg] origin-right translate-y-8"></div>
                <div className="w-24 h-12 bg-[#FFD1B3] rounded-full border-4 border-amber-950 rotate-[-20deg] origin-left translate-y-8"></div>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 transform hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-28 h-28 text-red-500 drop-shadow-xl" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          <svg className="absolute top-12 left-0 w-10 h-10 text-amber-50 rotate-[-15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg className="absolute bottom-24 right-0 w-8 h-8 text-amber-50 rotate-[25deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>

          <div className="absolute top-20 right-[-20px] bg-white border-2 border-amber-950 rounded-[2rem] rounded-bl-none p-4 shadow-md rotate-3 z-40">
            <span style={{ fontFamily: 'Caveat, cursive' }} className="text-2xl text-amber-950 font-bold">You're amazing!</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
