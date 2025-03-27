import { Input } from '@shared/ui'
import { FaSearch } from 'react-icons/fa'
import { SearchInputProps } from '../model/types'

export const SearchInput = ({
  error,
  className,
  placeholder = 'Search...',
  onChange,
}: SearchInputProps) => {
  return (
    <div className="relative flex w-full max-w-md flex-col">
      <Input
        type="text"
        name="search"
        error={error}
        className={`${className} h-20 rounded-full px-6 placeholder:text-2xl`}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <FaSearch
        className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-500"
        size={38}
      />
    </div>
  )
}
