import { FC, ReactNode, useRef } from 'react'

interface DropdownProps {
  isOpen?: boolean
  onToggle?: () => void
  label: string
  content: ReactNode
  className?: string
}

export const Dropdown: FC<DropdownProps> = ({
  isOpen,
  label,
  content,
  className,
  onToggle,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const closeDropdown = () => {
    detailsRef.current?.removeAttribute('open')
  }

  return (
    <details
      open={isOpen}
      className={`group overflow-hidden rounded-2xl border-none bg-white ${className}`}
      onClick={(e) => {
        e.preventDefault()
        onToggle?.()
      }}
    >
      <summary
        className={`flex h-14 max-w-6xl cursor-pointer items-center justify-between border-t-1 border-gray-200 bg-white p-4 font-medium ${className}`}
      >
        {label}
        {/* CUSTOM TOGGLE ICON */}
        <span className="relative ml-2 flex min-h-8 min-w-8 items-center justify-center rounded-full border border-gray-200 transition-all duration-300">
          <span
            className={`absolute h-0.5 w-4 bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`}
          />
          <span className="absolute h-0.5 w-4 bg-gray-900" />
        </span>
      </summary>
      {/* DROPDOWN CONTENT */}
      <div className={`px-4 text-start text-gray-500 ${className}`}>
        {content}
        <button onClick={closeDropdown} />
      </div>
    </details>
  )
}
