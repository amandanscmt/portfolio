import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  href,
  target,
  rel,
  className = '',
  ...rest
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase text-sm tracking-wide';

  const variants = {
    primary: 'bg-gradient-to-r from-text-secondary to-accent hover:from-text-secondary/70 hover:to-accent-soft text-white shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95',
    secondary: 'bg-surface border-2 border-primary text-primary hover:bg-primary/10 hover:border-primary-soft active:scale-95',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base w-full sm:w-auto',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2"
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    // @ts-expect-error - Framer Motion button type compatibility
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      disabled={isLoading}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
