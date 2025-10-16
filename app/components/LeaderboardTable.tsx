'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface CallerData {
  rank: number;
  name: string;
  handle: string;
  accuracy: number;
  totalCalls: number;
  successfulCalls: number;
  avgROI: number;
  platform: string;
}

const mockData: CallerData[] = [
  { rank: 1, name: 'CryptoMaster', handle: '@cryptomaster_calls', accuracy: 89.2, totalCalls: 247, successfulCalls: 220, avgROI: 342, platform: 'Telegram' },
  { rank: 2, name: 'AlphaHunter', handle: '@alphahunter', accuracy: 86.5, totalCalls: 312, successfulCalls: 270, avgROI: 298, platform: 'X' },
  { rank: 3, name: 'GemFinder', handle: '@gemfinder_pro', accuracy: 84.3, totalCalls: 189, successfulCalls: 159, avgROI: 276, platform: 'Telegram' },
  { rank: 4, name: 'MoonSeeker', handle: '@moonseeker', accuracy: 82.1, totalCalls: 425, successfulCalls: 349, avgROI: 245, platform: 'X' },
  { rank: 5, name: 'DiamondHands', handle: '@diamond_hands', accuracy: 79.8, totalCalls: 198, successfulCalls: 158, avgROI: 223, platform: 'Telegram' },
];

export function LeaderboardTable() {
  return (
    <div className="bg-surface rounded-lg border border-accent/20 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-accent/10 border-b border-accent/20">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Rank</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Caller</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Accuracy</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Calls</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Avg ROI</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Platform</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-accent/10">
            {mockData.map((caller) => (
              <tr key={caller.rank} className="hover:bg-accent/5 transition-colors duration-150">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`text-sm font-bold ${caller.rank <= 3 ? 'text-accent' : 'text-fg'}`}>
                      #{caller.rank}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {caller.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-fg">{caller.name}</div>
                      <div className="text-xs text-muted">{caller.handle}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-success">{caller.accuracy}%</span>
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-fg">
                    <span className="font-semibold">{caller.successfulCalls}</span>
                    <span className="text-muted">/{caller.totalCalls}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold text-accent">+{caller.avgROI}%</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                    {caller.platform}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
