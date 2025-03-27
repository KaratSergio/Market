import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  label?: string
  type?: 'text' | 'email' | 'password' | 'tel'
  name: Path<T> // REQUIRED FIELD NAME
  register?: UseFormRegister<T> // OPTIONAL REACT-HOOK-FORM REGISTER
  error?: string // ERROR MESSAGE FOR VALIDATION
  className?: string // CUSTOM STYLES
  showPasswordToggle?: boolean // ENABLE PASSWORD VISIBILITY TOGGLE
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // CUSTOM ONCHANGE HANDLER
}

export const Input = <T extends FieldValues>({
  label,
  type = 'text',
  name,
  register,
  error,
  className,
  showPasswordToggle = false,
  placeholder = '',
  onChange,
}: InputProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false) // STATE FOR PASSWORD VISIBILITY

  return (
    <div className="flex flex-col">
      {/* LABEL FOR INPUT */}
      {label && (
        <label htmlFor={name} className="mb-2 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        {/* MAIN INPUT FIELD */}
        <input
          id={name}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          {...register?.(name)} // APPLY REACT-HOOK-FORM REGISTER IF PROVIDED
          onChange={onChange}
          className={twMerge(
            'h-11 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-gray-200 focus:outline-none',
            'transition-all duration-300 ease-in-out hover:shadow-[1px_0px_3px_0px_#c6c8cb]',
            error ? 'border-red-500' : 'border-gray-300',
            className,
          )}
        />

        {/* PASSWORD TOGGLE BUTTON */}
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)} // TOGGLE PASSWORD VISIBILITY
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
      </div>

      {/* ERROR MESSAGE IF EXISTS */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
