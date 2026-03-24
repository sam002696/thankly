import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Tape from '../components/ui/Tape';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-cream border-4 border-ink rounded-4xl p-8 shadow-hard-xl w-full max-w-md mx-4 z-10">
        <Tape style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', width: '100px', height: '28px' }} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white border-2 border-ink rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-5xl text-ink text-center mb-8">Welcome Back!</h2>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <p style={{ fontFamily: 'Caveat, cursive' }} className="text-3xl text-success">Signed in successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-bold text-ink block mb-1 text-sm">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="font-bold text-ink block mb-1 text-sm">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="mt-2 w-full shadow-hard-xs">
              Sign In
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
