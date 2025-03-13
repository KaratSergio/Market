export interface User {
  id: string
  email: string
  password: string
  name: string | null
  phone: string | null
  avatar: string | null
  role: 'USER' | 'ADMIN' | 'MODERATOR'
}

export interface AuthState {
  isAuthenticated: boolean
  token: string | null
  user: User | null
  isLoading: boolean
  error: string | null
}

export interface LoginFormInputs {
  email: string
  password: string
}

export interface RegisterFormInputs {
  name: string
  email: string
  password: string
}
