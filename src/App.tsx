import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OptimizationSection } from './components/OptimizationSection';

// initializing the Query Client for Smart Caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache data for 5 minutes
      refetchOnWindowFocus: false, // to prevent annoying refetches when switching tabs
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary/30">
        
        <OptimizationSection />

        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-brand-muted text-xs uppercase tracking-widest font-mono">
            Atomity Frontend Challenge • 2026
          </p>
        </footer>

      </main>
    </QueryClientProvider>
  );
}

export default App;