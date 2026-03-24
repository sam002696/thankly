const CTASection = ({ onGetStarted }) => (
  <section className="py-32 bg-brand text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.04\\'/%3E%3C/svg%3E')" }}></div>

    <svg className="absolute top-10 left-10 w-40 h-40 text-white opacity-20 rotate-12" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 0 L60 35 L95 35 L68 55 L78 90 L50 70 L22 90 L32 55 L5 35 L40 35 Z" />
    </svg>
    <svg className="absolute bottom-10 right-10 w-32 h-32 text-accent opacity-40 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
      <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
    </svg>

    <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
      <div className="inline-block relative mb-8">
        <div className="absolute -top-16 -left-12 w-24 h-24 bg-cream rounded-full border-4 border-dashed border-ink flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-transform" style={{ transform: 'rotate(-10deg)' }}>
          <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-6xl md:text-8xl text-white drop-shadow-md">
          Start Your <br />
          <span className="text-accent underline decoration-wavy decoration-4 underline-offset-8">Gratitude Journey</span> <br />
          Today
        </h2>
      </div>

      <p className="text-2xl text-white/90 font-medium mb-12 max-w-xl mx-auto">
        Join thousands of others spreading joy, one thoughtful message at a time. It's free to start.
      </p>

      {/* Unique large CTA button — kept as custom due to special sizing + styling */}
      <button
        onClick={onGetStarted}
        className="group bg-cream hover:bg-white text-ink text-2xl font-bold py-5 px-10 rounded-full shadow-hard-lg hover:shadow-hard-sm hover:translate-y-1 hover:translate-x-1 transition-all border-4 border-ink flex items-center gap-4"
      >
        <span style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl mt-1">Get Started Now</span>
        <svg className="w-8 h-8 text-brand group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </section>
);

export default CTASection;
