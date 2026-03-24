import { useState } from 'react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WallOfThanksSection from '../components/sections/WallOfThanksSection';
import EditorSection from '../components/sections/EditorSection';
import CTASection from '../components/sections/CTASection';
import SignInModal from '../modals/SignInModal';
import { tornEdgeBottom, tornEdgeTop } from '../theme/shapes';
import { colors } from '../theme/colors';

const HomePage = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const scrollToEditor = () => {
    document.getElementById('editor-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      <Nav onSignIn={() => setSignInOpen(true)} />

      <HeroSection onCreateCard={scrollToEditor} />

      {/* Torn edge transition: hero → how it works */}
      <div className="w-full h-16 bg-cream relative z-20">
        <div className="absolute w-full h-8 bottom-0" style={{ ...tornEdgeBottom, backgroundColor: colors.accent }}></div>
      </div>

      <HowItWorksSection />

      {/* Torn edge transition: how it works → wall of thanks */}
      <div className="w-full h-12 bg-cream relative z-20 -mt-6" style={tornEdgeTop}></div>

      <WallOfThanksSection />

      {/* Wave transition: wall of thanks → editor */}
      <div className="w-full relative overflow-hidden leading-none text-accent bg-cream z-10 -mb-1">
        <svg className="block w-[calc(100%+1.3px)] h-15" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
        </svg>
      </div>

      <div id="editor-section">
        <EditorSection />
      </div>

      {/* Torn edge transition: editor → CTA */}
      <div className="w-full h-16 bg-brand relative z-20">
        <div className="absolute w-full h-8 bottom-0 rotate-180" style={{ ...tornEdgeBottom, backgroundColor: colors.accent }}></div>
      </div>

      <CTASection onGetStarted={scrollToEditor} />

      <Footer />

      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  );
};

export default HomePage;
