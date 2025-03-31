export interface AdsState {
  ads: Ad[]
  isLoading: boolean
  error: string | null
}

// Type for Category
export interface Category {
  id: string
  name: string
}

// Type for Ad Image
export interface AdImage {
  id: string
  url: string
  createdAt: string
  updatedAt: string
}

// Type for Comment
export interface Comment {
  id: string
  text: string
  userId: string
  createdAt: string
  updatedAt: string
}

// Type for User
export interface User {
  id: string
  username: string
  email: string
  // Add additional fields if needed
}

// Type for Ad Status
export type AdStatus = 'PENDING' | 'ACTIVE' | 'SOLD' | 'ARCHIVED'

// Type for Payment
export interface Payment {
  id: string
  amount: number
  date: string
  // Additional payment fields
}

// Type for Favorite
export interface Favorite {
  id: string
  userId: string
  createdAt: string
}

// Interface for Ad
export interface Ad {
  id: string
  title: string
  description: string
  price: string // Use string for Decimal type
  user: User
  userId: string
  category?: Category
  categoryId?: string
  subcategory?: Category
  subcategoryId?: string
  status: AdStatus
  location?: string
  views: number
  createdAt: string
  updatedAt: string
  images: AdImage[]
  comments: Comment[]
  favorites: Favorite[]
  payments: Payment[]
  autoContinue: boolean;
  contactPerson: string;
  email: string;
  phone: string;
  name: string;
}

export interface AdsItemProps {
  ad: Ad
}
