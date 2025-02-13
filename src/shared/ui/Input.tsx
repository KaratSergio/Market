import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { ValidationError } from '../utils'

type InputProps<T extends FieldValues = FieldValues> = Partial<{
  label: string
  type: 'text' | 'email' | 'password' | 'tel'
  name: Path<T>
  register: UseFormRegister<T>
  error: string
  className: string
  validate: boolean
}>

export const Input = <T extends FieldValues>({
  label,
  type = 'text',
  name,
  register,
  error,
  className,
  validate = true,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="mb-2 text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        {...(validate && register && name ? register(name) : {})}
        className={twMerge(
          'w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
      />
      {validate && error && <ValidationError error={error} />}
    </div>
  )
}
