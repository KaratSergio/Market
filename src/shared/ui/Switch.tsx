import { UseFormRegister, Path, FieldValues } from 'react-hook-form'

type SwitchProps<T extends FieldValues = FieldValues> = {
  name: Path<T>
  register: UseFormRegister<T>
}

export const Switch = <T extends FieldValues>({ name, register }: SwitchProps<T>) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        {...register(name)}
        className="sr-only peer"
      />
      <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-gray-400 rounded-full peer-checked:bg-gray-400 after:absolute after:top-0.5 after:left-1 after:w-4 after:h-4 after:bg-white after:border after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
    </label>
  )
}
