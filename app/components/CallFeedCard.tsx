import { CheckCircle2, AlertCircle, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';

interface CallFeedCardProps {
  tokenName: string;
  tokenSymbol: string;
  callerName: string;
  callerHandle: string;
  priceChange: string;
  status: 'verified' | 'unverified' | 'rug_pulled';
  timestamp: string;
  initialLiquidity: string;
}

export function CallFeedCard({
  tokenName,
  tokenSymbol,
  callerName,
  callerHandle,
  priceChange,
  status,
  timestamp,
  initialLiquidity,
}: CallFeedCardProps) {
  const isPositive = priceChange.startsWith('+');
  const isVerified = status === 'verified';
  const isRugPulled = status === 'rug_pulled';

  return (
    <div className={`bg-surface rounded-lg p-4 border transition-all duration-200 hover:shadow-card ${
      isRugPulled ? 'border-danger/40' : isVerified ? 'border-success/40' : 'border-accent/20'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-fg">{tokenName}</h3>
          <p className="text-sm text-muted">${tokenSymbol}</p>
        </div>
        {isVerified && <CheckCircle2 className="w-5 h-5 text-success" />}
        {isRugPulled && <AlertCircle className="w-5 h-5 text-danger" />}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
          {callerName.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="text-xs font-medium text-fg">{callerName}</p>
          <p className="text-xs text-muted">{callerHandle}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-xs text-muted mb-1">Price Change</p>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-success" />
            ) : (
              <TrendingDown className="w-4 h-4 text-danger" />
            )}
            <span className={`text-sm font-bold ${isPositive ? 'text-success' : 'text-danger'}`}>
              {priceChange}
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">Initial Liquidity</p>
          <p className="text-sm font-semibold text-fg">{initialLiquidity}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-accent/10">
        <span className="text-xs text-muted">{timestamp}</span>
        <button className="flex items-center gap-1 text-accent hover:text-accent/80 text-xs font-medium transition-colors duration-200">
          View Details
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
