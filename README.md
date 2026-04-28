# 🚀 Performance Engineering in Modern Web Applications

A research study on advanced web performance optimization techniques in React applications, accompanied by a working showcase that demonstrates the concepts in practice.

---

## 📚 Research & Publications

This repository is built around a research study on performance engineering in modern frontend applications. The accompanying React application serves as a **practical showcase** of the patterns and findings discussed in the paper.

### 📄 Research Paper

**_Engineering Scalable Applications with Optimized Web Perf_**

**Authors**

| Name | Roll Number |
|------|-------------|
| Ananya Gupta | 2210991258 |
| Diya Goyal | 2210991544 |
| Dhruv Gupta | 2210991507 |
| Jaskirat Singh | 2210990446 |

*B.E. CSE, Chitkara University Institute of Engineering and Technology, Rajpura, India*

The core deliverable of this work is a peer-reviewed research paper covering:

- React performance optimization techniques
- AppShell architecture and lazy loading strategies
- Sequential vs. parallel data fetching trade-offs
- Bundle optimization, tree-shaking, and import hygiene
- Measurement methodology and observed performance gains

The paper formalizes the theoretical background behind the patterns implemented in the showcase application and presents empirical observations from the experiments conducted during the study.

📎 *See the included paper PDF in the repository.*

### 🏅 Acceptance Certificate

The repository includes the **official acceptance certificate** for the research paper, confirming its acceptance for publication.

📎 *See the included certificate in the repository.*

### 📑 Project Report

A detailed project report is also included, covering:

- **Problem statement** – the performance gaps motivating the study
- **Approach** – methodology, tools, and patterns evaluated
- **Implementation** – how each concept was built and tested
- **Key outcomes** – measurable improvements and observations
- **Conclusions** – takeaways and directions for future work

📎 *See the included project report in the repository.*

---

## 🧪 Showcase Application

To make the research tangible, this repository also contains a small React application that **demonstrates each concept from the paper as a live, interactive example**. The app is intended as supporting material — a way to see the optimization patterns running in a real browser — rather than as a standalone product.

### Concepts demonstrated

- **AppShell Architecture** – a lightweight shell that loads instantly with lazy-loaded features
- **Sequential vs. Parallel Fetching** – side-by-side comparison of data fetching strategies
- **Import Optimization** – barrel-import pitfalls vs. direct, tree-shakeable imports
- **Lazy-Loaded Feature Modules** – code-splitting in action across feature boundaries
- **Performance Dashboard** – a single overview tying all the concepts together

### Patterns implemented

- `SequentialFetchDemo` – sequential API calls and their cumulative latency cost
- `ParallelFetchDemo` – parallel fetching with progress tracking
- `BarrelImportIssue` – illustrates the cost of barrel imports on bundle size
- `OptimizedImportExample` – the recommended direct-import alternative
- `FeatureA / FeatureB / FeatureC` – independently lazy-loaded feature modules

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
│   ├── SequentialFetchDemo.jsx
│   ├── ParallelFetchDemo.jsx
│   ├── BarrelImportIssue.jsx
│   └── OptimizedImportExample.jsx
├── utils/
│   ├── mockApi.js
│   ├── largeModule.js
│   └── timers.js
├── App.jsx
├── main.jsx
└── styles.css
```

---

## 🔧 Tech Stack

- **React 18** – UI library with hooks
- **Vite 4** – modern build tool
- **React Router** – client-side routing
- **Vanilla CSS** – custom design system with CSS variables
- **ES6 Modules** – modern JavaScript

---

## 🚀 Running the Showcase

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd my-react-app
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

---

## 🎓 Learning Outcomes

Together, the paper, report, and showcase demonstrate:

- AppShell architecture, component lazy loading, and code splitting
- Efficient data fetching patterns and their measurable impact
- Tree-shaking and bundle optimization through better imports
- Practical application of React hooks, routing, and `Suspense`
- A reproducible methodology for measuring frontend performance

---

## 📝 Notes

- This repository is **primarily a research artifact**; the application is included as a live demonstration of the concepts discussed in the paper and report.
- Mock APIs are used so the demonstrations run without external dependencies.
- All demos are interactive and provide real-time feedback.

---

## 📄 License

Educational and academic project — for research and learning purposes.
