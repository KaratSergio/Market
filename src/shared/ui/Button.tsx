import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const buttonClass = twMerge(
    'w-full rounded-full flex items-center justify-center px-5 py-3 cursor-pointer',
    // PRIMARY
    variant === 'primary' && 'bg-black text-white hover:bg-gray-800',
    // SECONDARY
    variant === 'secondary' &&
      'bg-white text-black border border-gray-300 hover:bg-gray-100',
    // TERTIARY
    variant === 'tertiary' && 'bg-blue-400 text-white border-0 hover:bg-blue-300',
    // QUATERNARY
    variant === 'quaternary' && 'bg-sky-400 text-yellow-400',
    className,
  )

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
