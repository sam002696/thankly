const Nav = ({ onSignIn }) => (
  <nav className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span style={{ fontFamily: 'Caveat, cursive' }} className="text-4xl font-bold text-amber-950 tracking-wide">Thank U App</span>
    </div>
    <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
      <a href="#mission" className="hover:text-red-500 transition-colors text-amber-950">Our Mission</a>
      <a href="#gallery" className="hover:text-red-500 transition-colors text-amber-950">Gallery</a>
      <a href="#pricing" className="hover:text-red-500 transition-colors text-amber-950">Pricing</a>
      <button
        onClick={onSignIn}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-md transform hover:-translate-y-0.5 transition-all border-2 border-transparent hover:border-amber-950"
      >
        Sign In
      </button>
    </div>
  </nav>
);

export default Nav;
