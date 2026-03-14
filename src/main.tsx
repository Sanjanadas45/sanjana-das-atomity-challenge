import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OptimizationSection } from './components/OptimizationSection'
import './styles/tokens.css' 

// 1. Initialized the Query Client for Caching (#3)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Wrapping the app in the Provider */}
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen">
        <OptimizationSection />
      </main>
    </QueryClientProvider>
  </React.StrictMode>,
)