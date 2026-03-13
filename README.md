# Atomity Challenge - Option A (Cluster Analysis)

## 🚀 Features
- **Custom Design System:** Built from scratch using CSS Variables + Tailwind v4.
- **Smart Caching:** Integrated TanStack Query to manage async state and prevent redundant API calls.
- **Modern Layouts:** Leveraged CSS Container Queries for component-level responsiveness.
- **Accessibility:** Respected `prefers-reduced-motion` for a smoother user experience.

## 🛠️ Technical Decisions & Trade-offs
- **Why TanStack Query?** I chose this over a simple `useEffect` to demonstrate production-ready data fetching, including built-in caching and loading states.
- **Why Container Queries?** Unlike Media Queries, Container Queries allow the Cluster Cards to be used in any layout (sidebar, grid, or full-width) while maintaining their internal proportions.