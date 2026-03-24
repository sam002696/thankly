import { useState } from 'react';
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-amber-950/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-amber-50 border-4 border-amber-950 rounded-[2rem] p-8 shadow-[8px_8px_0px_rgba(62,39,35,1)] w-full max-w-md mx-4 z-10">
        <Tape style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', width: '100px', height: '28px' }} />

        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white border-2 border-amber-950 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 style={{ fontFamily: 'Caveat, cursive' }} className="text-5xl text-amber-950 text-center mb-8">Welcome Back!</h2>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <p style={{ fontFamily: 'Caveat, cursive' }} className="text-3xl text-green-600">Signed in successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-bold text-amber-950 block mb-1 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border-2 border-amber-950 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="font-bold text-amber-950 block mb-1 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border-2 border-amber-950 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full mt-2 border-2 border-amber-950 shadow-[3px_3px_0px_rgba(62,39,35,1)] hover:shadow-none hover:translate-y-1 transition-all"
            >
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
