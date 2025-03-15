import { AxiosError } from 'axios'

export const handleError = (error: unknown) =>
  error instanceof AxiosError ? error.response?.data : 'Unknown error occurred'
