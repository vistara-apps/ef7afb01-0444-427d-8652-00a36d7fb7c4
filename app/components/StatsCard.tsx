import { type ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export function StatsCard({ icon, label, value, change, positive }: StatsCardProps) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-accent/20 hover:border-accent/40 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="text-muted">{icon}</div>
        <span className={`text-xs font-medium ${positive ? 'text-success' : 'text-danger'}`}>
          {change}
        </span>
      </div>
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-2xl font-bold text-fg">{value}</p>
    </div>
  );
}
