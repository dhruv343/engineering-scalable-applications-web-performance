# Performance Engineering Lab 🚀

A comprehensive React application demonstrating advanced web performance optimization concepts through interactive demonstrations and real-world examples.

**Final Year Project** - Built with React, Vite, and modern web performance patterns.

---

## 📋 Features

### Core Concepts
- **AppShell Architecture** - Lightweight shell that loads instantly with lazy-loaded features
- **Sequential vs Parallel Fetching** - Compare data fetching strategies for optimal performance
- **Import Optimization** - Tree-shaking and efficient module loading techniques
- **Performance Dashboard** - Overview of all performance engineering concepts

### Performance Patterns
- **SequentialFetchDemo** - Demonstrate sequential API calls and their impact
- **ParallelFetchDemo** - Show parallel fetching with progress tracking
- **BarrelImportIssue** - Highlight problems with barrel imports
- **OptimizedImportExample** - Best practices for direct imports
- **Feature Modules** - Lazy-loaded feature components (A, B, C)

### Design System
- **Professional UI** - Navy blue, sophisticated color palette
- **Responsive Layout** - Works seamlessly on desktop and mobile
- **Sidebar Navigation** - Clean, intuitive navigation with active states
- **Interactive Components** - Gradient buttons, progress bars, code examples

---

## 📂 Project Structure

```
src/
├── appshell/
│   ├── AppShell.jsx          # Main app container with routing
│   ├── RouterConfig.jsx      # Route configuration
│   └── LazyLoader.jsx        # Lazy loading wrapper
├── components/
│   ├── Home.jsx              # Landing page with concept overview
│   └── index.js              # Component exports
├── dashboards/
│   └── PerformanceDashboard.jsx  # Performance concepts overview
├── features/
│   ├── FeatureA/             # Lazy-loaded feature A
│   ├── FeatureB/             # Lazy-loaded feature B
│   └── FeatureC/             # Lazy-loaded feature C
├── performance-patterns/
│   ├── SequentialFetchDemo.jsx      # Sequential fetch example
│   ├── ParallelFetchDemo.jsx        # Parallel fetch example
│   ├── BarrelImportIssue.jsx        # Import optimization issue
│   └── OptimizedImportExample.jsx   # Import optimization solution
├── utils/
│   ├── mockApi.js            # Mock API for demos
│   ├── largeModule.js        # Large module for import demos
│   └── timers.js             # Utility functions
├── App.jsx                   # Main React component
├── main.jsx                  # Vite entry point
└── styles.css                # Professional design system

```

---

## 🔧 Tech Stack

- **React 18** - UI library with hooks
- **Vite 4** - Modern build tool
- **React Router** - Client-side routing
- **Vanilla CSS** - Custom design system with CSS variables
- **ES6 Modules** - Modern JavaScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the next available port)

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

---

## 🎓 Learning Outcomes

This project demonstrates:

- **AppShell Architecture** - Component lazy loading and code splitting
- **Performance Optimization** - Efficient data fetching patterns
- **Module Loading** - Tree-shaking and bundle optimization
- **UI/UX Design** - Professional component design and responsive layouts
- **React Concepts** - Hooks, routing, lazy loading, suspension
- **Web Standards** - Modern CSS, semantic HTML, accessibility

---

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy Blue (#1a365d)
- **Accent**: Professional Blue (#3182ce)
- **Success**: Professional Green (#38a169)
- **Background**: Off-white (#f7fafc)

### Typography
- **Font**: Inter (system fallback: -apple-system, BlinkMacSystemFont)
- **Sizes**: 8-step scale from xs to 4xl
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- **System**: 12-step scale (0.25rem to 3rem)
- **Consistent**: Based on 0.25rem units

---

## 🔍 Performance Metrics

The application demonstrates:
- **Code Splitting** - Lazy-loaded routes reduce initial bundle
- **Sequential vs Parallel** - API fetch optimization patterns
- **Import Optimization** - Efficient module resolution
- **Responsive Design** - Mobile-first approach

---

## 📝 Notes

- This is an educational project showcasing performance engineering concepts
- Mock APIs are used for demonstrations
- All features are interactive with real-time feedback
- The app works offline after initial load (due to lazy loading)

---

## 👤 Author

**DHRUV KAPOOR** - Final Year Project

---

## 📄 License

Educational Project - For academic purposes


The application will be running on `http://localhost:3000`.

## Usage

You can modify the `src/App.js` file to change the main application logic and add components in the `src/components` directory.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.