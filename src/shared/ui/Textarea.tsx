import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type TextareaProps<T extends FieldValues = FieldValues> = Partial<{
  label?: string
  name: Path<T>
  register?: UseFormRegister<T>
  error?: string
  className?: string
  placeholder?: string
}>

export const Textarea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  className,
  placeholder = '',
}: TextareaProps<T>) => {
  return (
    <div className="relative flex flex-col">
      {label && <label htmlFor={name} className="mb-2 text-sm font-medium">{label}</label>}
      <textarea
        id={name}
        placeholder={placeholder}
        rows={4}
        {...(register && name ? register(name) : {})}
        className={twMerge(
          'w-full bg-white rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-gray-200 focus:outline-none',
          'transition-all duration-300 ease-in-out hover:shadow-[1px_0px_3px_0px_#c6c8cb]',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
      />
       {/* ERROR MESSAGE IF EXISTS */}
       {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
