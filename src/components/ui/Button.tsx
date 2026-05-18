import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-secondary box-glow",
      secondary: "bg-white text-brand-dark hover:bg-slate-100",
      outline: "border border-brand-neon/50 text-brand-neon hover:bg-brand-neon/10",
      ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-10 py-4 text-lg font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-neon focus:ring-offset-2 focus:ring-offset-brand-darker",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
