import { useState } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { ValidationError } from '../utils'

type InputProps<T extends FieldValues = FieldValues> = Partial<{
  label: string
  type: 'text' | 'email' | 'password' | 'tel'
  name: Path<T>
  register: UseFormRegister<T>
  error: string
  className: string
  validate: boolean
  showPasswordToggle: boolean
  placeholder: string
}>

export const Input = <T extends FieldValues>({
  label,
  type = 'text',
  name,
  register,
  error,
  className,
  validate = true,
  showPasswordToggle = false,
  placeholder = '',
}: InputProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="flex flex-col relative">
      {label && (
        <label htmlFor={name} className="mb-2 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          {...(validate && register && name ? register(name) : {})}
          className={twMerge(
            'w-full max-w-90 h-11 rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none',
            error ? 'border-red-500' : 'border-gray-300',
            className
          )}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
      </div>
      {validate && error && <ValidationError error={error} />}
    </div>
  )
}
