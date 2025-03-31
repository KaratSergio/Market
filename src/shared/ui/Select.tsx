import { useState, useRef, useEffect } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { FaChevronDown } from 'react-icons/fa';

type SelectProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  options: string[];
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Select = <T extends FieldValues>({
  label,
  name,
  register,
  options = [],
  error,
  className,
  placeholder = 'Choose an option',
  onChange,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (register) {
      register(name).onChange({ target: { name, value: option } });
    }
    onChange?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className={twMerge('relative flex flex-col', className)}>
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}

      <div
        className={twMerge(
          'flex items-center justify-between h-11 px-4 bg-white border border-gray-300 rounded-lg cursor-pointer',
          'transition-all duration-300 ease-in-out hover:shadow-md',
          error ? 'border-red-500' : 'border-gray-300'
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={selectedValue ? 'text-gray-800' : 'text-gray-400'}>
          {selectedValue || placeholder}
        </span>
        <FaChevronDown className="text-gray-500" />
      </div>

      {isOpen && (
        <ul className="absolute right-0 left-0 z-10 mt-2 max-h-60 overflow-y-auto rounded-xl border border-gray-300 bg-white shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 text-gray-700 transition hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
