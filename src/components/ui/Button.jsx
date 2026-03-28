/**
 * Button — Thankly's core reusable button.
 *
 * Variants:
 *   primary   — red fill, hard ink shadow (main CTAs)
 *   secondary — white fill, dashed ink border
 *   ghost     — text-only, no background
 *   accent    — orange fill (e.g. "Read Full Story")
 *   success   — green fill (e.g. post-send state)
 *
 * Sizes:
 *   sm — compact (nav, inline actions)
 *   md — default
 *   lg — hero / section CTAs
 */
const variantClasses = {
  primary:
    "bg-brand hover:bg-brand-dark text-white border-2 border-ink " +
    "shadow-hard hover:shadow-none hover:translate-y-0.5 hover:translate-x-0.5",
  secondary:
    "bg-white hover:bg-cream text-ink border-2 border-dashed border-ink shadow-sm",
  ghost: "bg-transparent text-ink hover:text-brand",
  accent: "bg-accent hover:bg-accent-dark text-white",
  success:
    "bg-success text-white border-2 border-ink shadow-hard-sm hover:shadow-none hover:translate-y-px",
  raw: "",
};

const sizeClasses = {
  sm: "py-2 px-6 text-base",
  md: "py-3 px-6 text-lg",
  lg: "py-4 px-8 text-xl",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => (
  <button
    type="button"
    className={[
      variant !== "raw" &&
        "group font-bold rounded-full transition-all inline-flex items-center justify-center gap-2",
      variantClasses[variant],
      variant !== "raw" && sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </button>
);

export default Button;
