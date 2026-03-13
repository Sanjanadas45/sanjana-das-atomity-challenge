# Atomity Challenge - Option A (Cluster Analysis)
A high-performance Cluster Cost Analysis dashboard built for the Atomity Frontend Challenge. This project demonstrates high-fidelity animations, modern CSS, and efficient state management.

### Tech Stack
Framework: React + TypeScript (Vite)

Styling: Tailwind CSS v4 + Container Queries

Animation: Framer Motion

Data Fetching: TanStack Query (v5)

Icons: Lucide React

### Key Technical Highlights
Caching Strategy: Used TanStack Query with staleTime to ensure zero redundant API fetches and instant UI responsiveness on revisit.

Modern CSS: Implemented @container queries for component-level responsiveness and CSS Variables for a clean design token architecture.

Performance & A11y: Integrated useReducedMotion to respect system accessibility settings and used Skeleton States for graceful loading.

Product Thinking: Added an interactive "Drill-down" feature on cards to simulate real-world cost reconciliation workflows.

### Trade-offs & Decisions
Public API: I utilized JSONPlaceholder to simulate a cloud backend, focusing effort on frontend craftsmanship and async state handling (loading/error/success).

Component Structure: Built 100% custom components (no UI kits) to demonstrate deep knowledge of Tailwind and React composition.

### How to Run
1. npm install
2. npm run dev