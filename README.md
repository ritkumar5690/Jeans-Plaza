# Jeans Plaza - E-commerce Store

A modern React e-commerce website for Jeans Plaza, built with React 19, TypeScript, Vite, and Tailwind CSS.

## 🚀 Live Demo

**Website:** https://ritkumar5690.github.io/Jeans-Plaza/

## ✨ Features

- Modern React 19 with TypeScript
- Lightning-fast Vite build tool
- Responsive Tailwind CSS styling
- Client-side routing with React Router
- Lazy-loaded pages for better performance
- GitHub Pages deployment automation
- ESLint and code quality tools

## 📦 Pages

- **Home** - Landing page with featured products
- **About** - About Jeans Plaza
- **Products** - Product catalog
- **Contact** - Contact information

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Deployment:** GitHub Pages with GitHub Actions

## 📝 Setup Instructions

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment:

1. Push changes to `main` branch
2. GitHub Actions automatically builds the project
3. Site deploys to GitHub Pages at: https://ritkumar5690.github.io/Jeans-Plaza/

### Manual Deployment

```bash
npm run deploy
```

## 🔧 Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
