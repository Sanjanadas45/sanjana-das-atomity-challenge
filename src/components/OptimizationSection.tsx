import { useCloudData } from '../hooks/useCloudData';
import { ClusterCard } from './ClusterCard';
import { motion } from 'framer-motion';

export const OptimizationSection = () => {
  const { data, isLoading, isError } = useCloudData();

  return (
    <section className="section-wrapper max-w-5xl mx-auto">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
          Infrastructure Intelligence
        </span>
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mt-4">
          Cluster Cost <br /> <span className="text-brand-muted">Reconciliation.</span>
        </h2>
      </motion.header>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 bg-white/5 animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : isError ? (
        <p className="text-red-400">Error connecting to cloud gateway...</p>
      ) : (
        <div className="grid gap-4">
          {data?.slice(0, 5).map((user: any, i: number) => (
            <ClusterCard 
              key={user.id} 
              name={user.company.name} 
              cost={Math.floor(Math.random() * 8000) + 1200} 
              index={i} />
          ))}
        </div>
      )}
    </section>
  );
};