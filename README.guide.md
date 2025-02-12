## Style Guide for React Marketplace (FSD)

### Table of Contents

- [Project Principles](#project-principles)
- [Project Structure (FSD)](#project-structure-fsd)
- [Code Style](#code-style)
- [Modularity](#modularity)
- [Folder Organization](#folder-organization)
- [Naming Conventions](#naming-conventions)

## Project Principles

- **✅** Feature-Sliced Design (FSD) for project structure.
- **✅** TypeScript for strict typing.
- **✅** Redux Toolkit for state management.
- **✅** React Hook Form + Yup for form handling and validation.
- **✅** Tailwind CSS for styling.
- **✅** Axios + interceptors for API requests.
- **✅** ESLint + Prettier for code formatting.

## Project Structure (FSD)

```
├── **APP/ # App layer (global application setup)
│ ├── providers/ # Providers (Redux, Router, Theme, etc.)
│ │ ├── StoreProvider.tsx # Redux provider setup
│ │ ├── RouterProvider.tsx # React Router provider
│ │
│ ├── appRouter.tsx # Router configuration
│ ├── appStore.ts # Redux store setup
│ ├── appEntry.tsx # Application entry point
│ ├── rootReducer.ts # Root reducer (combines all slices)
│
├── **PAGES/ # Pages (full pages or major parts of pages)
│ ├── MainPage/ # Main page
│ │ ├── ui/ # UI components for the main page
│ │ │ ├── Page.tsx
│ │ ├── model/ # Models and business logic for the main page
│ │ │ ├── mainPageModel.ts
│ │ ├── index.ts
│ │
│ ├── ListingPage/ # Listing page
│ │ ├── ui/ # UI components for the listing page
│ │ │ ├── Page.tsx
│ │ ├── model/ # Models and business logic for the listing page
│ │ │ ├── listingModel.ts
│ │ ├── index.ts
│ │
│ ├── ProfilePage/ # User profile page
│ │ ├── ui/ # UI components for the profile page
│ │ │ ├── Page.tsx
│ │ ├── model/ # Models and business logic for the profile page
│ │ │ ├── profileModel.ts
│ │ ├── index.ts
│
├── **WIDGETS/ # Widgets (self-contained functional UI blocks)
│ ├── ListingWidget/ # Listing widget
│ │ ├── ui/ # UI components for the listing widget
│ │ │ ├── Widget.tsx
│ │ ├── model/ # Models and business logic for the listing widget
│ │ │ ├── listingWidgetModel.ts
│ │ ├── index.ts
│ │
│ ├── FiltersWidget/ # Filters widget
│ │ ├── ui/ # UI components for the filter widget
│ │ │ ├── FilterBar.tsx
│ │ ├── model/ # Models and business logic for the filter widget
│ │ │ ├── filtersWidgetModel.ts
│ │ ├── index.ts
│ ├── index.ts # Export of all widgets
│
├── **FEATURES/ # Features (reusable functionality that brings business value)
│ ├── Auth/ # Authentication
│ │ ├── ui/ # UI components for authentication (forms, buttons)
│ │ │ ├── LoginForm.tsx
│ │ │ ├── RegisterForm.tsx
│ │ ├── model/ # Models and business logic for authentication
│ │ │ ├── authModel.ts
│ │ ├── api/ # API interactions for authentication
│ │ │ ├── authApi.ts
│ │ ├── index.ts
│ │
│ ├── AddListing/ # Add new listing
│ │ ├── ui/ # UI components for adding a listing
│ │ │ ├── AddListingForm.tsx
│ │ ├── model/ # Models and business logic for adding a listing
│ │ │ ├── addListingModel.ts
│ │ ├── api/ # API interactions for adding a listing
│ │ │ ├── addListingApi.ts
│ │ ├── index.ts
│ │
│ ├── index.ts # Export of all features
│
├── **ENTITIES/ # Entities (business entities the project works with)
│ ├── User/ # User entity
│ │ ├── ui/ # UI components for user
│ │ │ ├── UserProfile.tsx
│ │ ├── model/ # Models and business logic for user
│ │ │ ├── userModel.ts
│ │ ├── api/ # API interactions for user
│ │ │ ├── userApi.ts
│ │ ├── index.ts
│ │
│ ├── Listing/ # Listing entity
│ │ ├── ui/ # UI components for products
│ │ │ ├── ListingCard.tsx
│ │ ├── model/ # Models and business logic for products
│ │ │ ├── ListingModel.ts
│ │ ├── api/ # API interactions for products
│ │ │ ├── ListingApi.ts
│ │ ├── index.ts
│ ├── index.ts # Export of all entities
│
├── **SHARED/ # Shared (reusable code, independent of project-specific logic)
│ ├── ui/ # UI components that can be used across the app
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Modal.tsx
│ │ ├── index.ts
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.ts
│ │ ├── useTheme.ts
│ ├── api/ # Shared API logic and configuration
│ │ ├── apiClient.ts # Axios setup
│ ├── utils/ # Utility functions
│ │ ├── formatDate.ts
│ │ ├── formatPrice.ts
│ ├── config/ # Application configurations, global settings
│ │ ├── constants.ts
│ │ ├── themes.ts
│ ├── index.ts

```

\*\* the structure is general and can be modified during the development process

### Explanation:

- **App:** This layer includes the global application setup, such as routing, providers (e.g., Redux, Router, Theme), store configuration, and global settings (e.g., constants and themes).

- **Pages:** Represents full pages or major sections of a page, such as the main page, listing page, and profile page.

- **Widgets:** Self-contained blocks of functionality that are typically used for specific user scenarios, like a listing widget or filter widget. These widgets include both UI and business logic.

- **Features:** Reusable functionalities that add business value to the app, such as authentication or adding new listings. Features are often large, self-contained functionalities.

- **Entities:** Business entities, such as users or products, which consist of UI components, models, and API logic for interacting with these entities.

- **Shared:** This layer includes reusable code that can be used across the application, such as UI components, custom hooks, API clients, utilities, and configuration files. It is independent of the specific business logic of the application.

### Structure:

- **Each layer** contains segments (e.g., ui, api, model) to organize code by its purpose. For example, Widgets contains ui for displaying widgets, and Features contains model for handling business logic related to that feature.

- **Each layer** may have multiple slices, which group code related to a specific domain (e.g., user or listing slices) for better code organization. Slices help to maintain tight cohesion within a slice while ensuring loose coupling between slices.

## Code Style

- Use TypeScript to ensure strict typing.

- Follow ESLint + Prettier rules for formatting and code consistency.

- Use camelCase for variables and function names.

- Use PascalCase for components and class names.

- Prefer single quotes (' ') for strings.

- Organize imports: external libraries first, then internal modules.

## Modularity

- Divide functionality into independent modules to enhance maintainability.

- Keep UI components separate from business logic.

- Follow FSD principles to ensure separation of concerns.

- Avoid large files—split logic into smaller, manageable parts.

## Folder Organization

- Each feature has its own folder within FEATURES/.

- Each business entity (like User or Listing) is defined inside ENTITIES/.

- Reusable UI components are inside SHARED/ui/.

- Custom hooks go inside SHARED/hooks/.

- API logic is centralized in SHARED/api/.

## Naming Conventions

- Use clear and descriptive names for files and functions.

- Follow a consistent file structure:

- UI components: ComponentName.tsx

- Business logic: featureModel.ts

- API functions: featureApi.ts

- Hooks: useFeature.ts

- Use index.ts to manage exports within each module.
