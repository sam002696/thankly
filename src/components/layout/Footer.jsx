const Footer = () => (
  <footer className="bg-ink text-cream py-12 relative z-10 border-t-4 border-dashed border-cream/20">
    <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span style={{ fontFamily: 'Caveat, cursive' }} className="text-3xl font-bold">Thank U App</span>
      </div>
      <div className="flex gap-8 font-medium">
        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-accent transition-colors">Contact</a>
      </div>
      <p className="text-sm opacity-60">© 2024 Thank U App. Made with ❤️.</p>
    </div>
  </footer>
);

export default Footer;
