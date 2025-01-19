# Mini Component Library

This project is a mini component library built using React, TypeScript, and Vite. It provides a minimal setup to get started with component development and testing.

## Strategy

- Vite boilerplate for quick setup and industry standard
- TypeScript for compile-time checks
- SCSS for mixins
- Component imports/exports via `index.ts`
- Testing with Vitest and React Testing Library
- `App.ts` as a pseudo-Storybook

## Prerequisites

- **Node.js**: Ensure you have Node.js version 18.x or later installed.

## Getting Started

### Running the Local Environment

1. **Install Dependencies**: First, install the necessary dependencies by running:

   ```bash
   npm install
   ```

2. **Start the Development Server**: To start the local development server, run:

   ```bash
   npm run dev
   ```

   This will start the Vite development server, and you can view your project at `http://localhost:5173/`.

### Running Tests

To run the unit tests for the components, use the following command:

```bash
npm run test
```

This will execute the tests using Vitest, a Vite-native unit test framework.

## Additional Information

- **Build the Project**: To build the project for production, run:

  ```bash
  npm run build
  ```

- **Lint the Code**: To check for linting errors, use:

  ```bash
  npm run lint
  ```

- **Preview the Production Build**: To preview the production build locally, run:

  ```bash
  npm run preview
  ```

## Dependencies

- "@eslint/js": ESLint configuration for JavaScript
- "@testing-library/dom": DOM testing utilities
- "@testing-library/jest-dom": Custom jest matchers for DOM nodes
- "@testing-library/react": React testing utilities
- "@types/react": TypeScript definitions for React
- "@types/react-dom": TypeScript definitions for ReactDOM
- "@vitejs/plugin-react-swc": Vite plugin for React with SWC
- "eslint": Linter for JavaScript and TypeScript
- "eslint-plugin-react-hooks": ESLint rules for React Hooks
- "eslint-plugin-react-refresh": ESLint plugin for React Refresh
- "globals": Global variables for ESLint
- "jsdom": JavaScript implementation of the DOM and HTML standards
- "sass-embedded": Embedded Sass compiler
- "typescript": TypeScript language
- "typescript-eslint": TypeScript plugin for ESLint
- "vite": Frontend build tool
- "vitest": A Vite-native unit test framework

## Notes

- This setup uses Vite for fast development and build processes.
- Ensure your Node.js version is compatible to avoid any runtime issues.

Feel free to expand and modify this setup to suit your development needs!