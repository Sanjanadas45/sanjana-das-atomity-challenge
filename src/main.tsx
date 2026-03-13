import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OptimizationSection } from './components/OptimizationSection'
import './styles/tokens.css' 

// 1. Initialize the Query Client for Caching (Requirement #3)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents annoying re-fetches when switching tabs
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Wrap the app in the Provider */}
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen">
        {/* You can add a simple Navbar or Hero here if you want, 
            but the focus is the OptimizationSection 
        */}
        <OptimizationSection />
      </main>
    </QueryClientProvider>
  </React.StrictMode>,
)