Welcome to **Market**, an online marketplace platform built with modern technologies like React, Vite, TypeScript, and Tailwind CSS. This project aims to provide a smooth and intuitive user experience for buying and selling items online.

## Features
- **User Authentication**: Secure login and registration.
- **Responsive Design**: Mobile-first approach with Tailwind CSS for styling.
- **Real-time Data**: Seamless data updates with Redux and React hooks.
- **Modern UI**: Dynamic, user-friendly interface built with React and styled using Tailwind CSS.

## Project Structure
The project follows a modular architecture with a focus on scalability. Below is the folder structure:

- **src/**
  - **app/**: Global application logic (routing, store, etc.).
  - **pages/**: Page-level components.
  - **widgets/**: Reusable UI components and widgets.
  - **features/**: Business logic & domain-specific features.
  - **entities/**: Core entities or models representing domain-specific data.
  - **shared/**: Shared components, utilities, and hooks.

## Technologies Used

  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A modern build tool that provides fast development and production builds.
  - **TypeScript**: A superset of JavaScript that adds static typing to the language.
  - **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
  - **Redux**: State management for React applications.

## Getting Started

### 1. Install Dependencies
First, clone the repository and navigate to the project folder. Then install the dependencies:

```bash
npm install
```

### 2. Set Up Environment Variables
Copy the .env.example file to .env.local and configure any environment-specific settings.

```bash
cp .env.example .env
```

### Start Development Server 
Run the development server using the following command:

```bash
npm run dev
```

The application should now be running locally at http://localhost:5173.