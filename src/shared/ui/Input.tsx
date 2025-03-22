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
    <div className="relative flex flex-col">
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
            'h-11 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none',
            'transition-all duration-300 ease-in-out hover:shadow-[0px_4px_6px_2px_#0a1828]',
            error ? 'border-red-500' : 'border-gray-300',
            className,
          )}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
      </div>
      {validate && error && <ValidationError error={error} />}
    </div>
  )
}
