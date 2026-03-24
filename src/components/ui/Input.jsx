/**
 * Input — Thankly's styled text input.
 * Passes all native input props through.
 */
const Input = ({ className = '', ...props }) => (
  <input
    className={[
      'w-full border-2 border-ink rounded-xl px-4 py-3 bg-white',
      'focus:outline-none focus:ring-2 focus:ring-brand',
      'transition-colors',
      className,
    ].join(' ')}
    {...props}
  />
);

export default Input;
