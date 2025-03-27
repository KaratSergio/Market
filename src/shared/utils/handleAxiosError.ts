import { AxiosError } from 'axios'

export const handleAxiosError = (error: unknown) =>
  error instanceof AxiosError ? error.response?.data : 'Unknown error occurred'
