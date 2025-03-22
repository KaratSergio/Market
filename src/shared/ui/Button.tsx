import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const buttonClass = twMerge(
    'w-full rounded-full flex items-center justify-center px-5 py-3 cursor-pointer',
    variant === 'primary' && 'bg-black text-white px-5 py-[14px] w-fit',
    variant === 'secondary' && 'bg-white text-black border border-[#e5e4df]',
    variant === 'tertiary' && 'bg-black text-white border-0',
    variant === 'quaternary' && 'bg-sky-400 text-yellow-400',
    'transition-all duration-300 ease-in-out hover:shadow-[0px_4px_6px_2px_#0a1828]',
    className,
  )

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
