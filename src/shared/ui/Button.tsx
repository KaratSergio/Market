import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const buttonClass = twMerge(
    'rounded-4 flex items-center justify-center p-4 cursor-pointer',
    variant === 'primary' && 'bg-black text-white px-5 py-[14px] rounded-full',
    variant === 'secondary' &&
      'bg-white text-black border border-[#e5e4df] rounded-full px-5 py-3 w-full max-w-90 h-12',
    variant === 'tertiary' && 'bg-black text-white border-0  rounded-full px-5 py-3 w-full max-w-90 h-12',
    variant === 'quaternary' && 'bg-sky-400 text-yellow-400',
    className,
  )

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
