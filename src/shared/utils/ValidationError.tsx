import { FC } from 'react'

interface ValidationErrorProps {
  error: string
}

export const ValidationError: FC<ValidationErrorProps> = ({ error }) => {
  return <p className="mt-1 text-sm text-red-500">{error}</p>
}
