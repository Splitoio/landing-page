import { forwardRef } from 'react'

// Simple utility function to merge class names
function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', showArrow = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl font-inter font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer'
    
    const variants = {
      primary: 'bg-[#09D1FD] text-black hover:bg-[#08c5f0]',
      secondary: 'bg-[#171717] text-[rgba(248,250,252,0.8)] hover:bg-[#252525]',
      outline: 'bg-white text-[#09090B] hover:bg-gray-50'
    }
    
    const sizes = {
      sm: 'h-[44px] px-[17px] py-[11.5px] text-[13.453125px] leading-[1.487]',
      md: 'h-[44px] px-[25px] py-[11.5px] text-[13.671875px] leading-[1.463]',
      lg: 'px-8 py-3 text-sm'
    }
    
    const fontWeights = {
      primary: 'font-semibold',
      secondary: 'font-medium',
      outline: 'font-semibold'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          fontWeights[variant],
          showArrow && 'gap-2',
          className
        )}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.92 7h8.17" stroke="currentColor" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 2.92L11.08 7 7 11.08" stroke="currentColor" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
