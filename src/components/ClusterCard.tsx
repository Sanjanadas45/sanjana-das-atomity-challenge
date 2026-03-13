import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, ChevronDown, Zap, Cpu } from 'lucide-react';

interface ClusterProps { name: string; cost: number; index: number; }

export const ClusterCard = ({ name, cost, index }: ClusterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Logic for the "Potential Savings" surprise element
  const potentialSavings = (cost * 0.18).toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className="@container">
      <motion.div
        layout // Automatically animates the height change
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: index * 0.1, 
          duration: 0.5,
          layout: { duration: 0.3, type: "spring", stiffness: 200, damping: 25 } 
        }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer bg-brand-card border rounded-2xl p-6 transition-colors duration-300 ${
          isOpen ? 'border-brand-primary' : 'border-white/10 hover:border-white/30'
        }`}
      >
        <div className="flex flex-col @[500px]:flex-row justify-between items-start @[500px]:items-center">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg transition-colors ${
              isOpen ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'
            }`}>
              <Activity size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{name}</h3>
                <ShieldCheck size={14} className="text-brand-success" />
              </div>
              <p className="text-brand-muted text-sm font-mono uppercase tracking-tighter">
                {isOpen ? 'reconciling data...' : 'us-east-1 • Active'}
              </p>
            </div>
          </div>

          <div className="mt-4 @[500px]:mt-0 flex items-center gap-6">
            <div className="text-left @[500px]:text-right">
              <p className="text-brand-muted text-xs uppercase mb-1">Monthly Spend</p>
              <p className="text-2xl font-bold text-brand-accent tracking-tight">
                ${cost.toLocaleString()}
              </p>
            </div>
            <motion.div 
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="text-brand-muted"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </div>

        {/* The Expansion Slot */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 @[400px]:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-3">
                  <Cpu size={18} className="text-brand-primary" />
                  <div>
                    <p className="text-brand-muted text-[10px] uppercase">Node Efficiency</p>
                    <p className="font-semibold text-white">92.4%</p>
                  </div>
                </div>
                
                <div className="bg-brand-primary/5 p-4 rounded-xl flex items-center justify-between border border-brand-primary/20">
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="text-brand-accent animate-pulse" />
                    <div>
                      <p className="text-brand-accent text-[10px] uppercase font-bold">Optimization Potential</p>
                      <p className="font-bold text-white">Save ${potentialSavings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};