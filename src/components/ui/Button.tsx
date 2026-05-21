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
      primary: "bg-brand-primary text-white hover:bg-brand-secondary shadow-md shadow-blue-900/20",
      secondary: "bg-white text-brand-primary hover:bg-blue-50 border border-blue-100 shadow-sm",
      outline: "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
      ghost: "text-white/70 hover:text-white hover:bg-white/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-10 py-4 text-lg font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          initial: { scale: 1 },
          hover: { 
            scale: 1.04,
            boxShadow: "0 10px 25px -5px rgba(26, 86, 196, 0.4), 0 8px 10px -6px rgba(26, 86, 196, 0.4)",
            transition: { type: "spring", stiffness: 400, damping: 15 }
          },
          tap: { 
            scale: 0.96,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }
        }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-neon focus:ring-offset-2 focus:ring-offset-brand-darker overflow-hidden cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Efeito Shimmer (Brilho dinâmico) ao passar o mouse */}
        {variant !== "ghost" && (
          <motion.div
            variants={{
              initial: { x: "-150%" },
              hover: { 
                x: "150%",
                transition: { 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  duration: 1.2, 
                  ease: "easeInOut" 
                } 
              }
            }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-0"
          />
        )}
        
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
