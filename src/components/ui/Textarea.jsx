/**
 * Textarea — Thankly's styled multiline text input.
 * Passes all native textarea props through.
 */
const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={[
      'w-full border-2 border-ink rounded-xl px-4 py-3 bg-white',
      'focus:outline-none focus:ring-2 focus:ring-brand',
      'transition-colors resize-none',
      className,
    ].join(' ')}
    {...props}
  />
);

export default Textarea;
