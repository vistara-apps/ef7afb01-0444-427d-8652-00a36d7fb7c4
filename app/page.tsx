'use client';

import { useState } from 'react';
import { Search, TrendingUp, Users, Bell, Star } from 'lucide-react';
import { LeaderboardTable } from './components/LeaderboardTable';
import { CallFeedCard } from './components/CallFeedCard';
import { SubscriptionModal } from './components/SubscriptionModal';
import { WalletConnect } from './components/WalletConnect';
import { StatsCard } from './components/StatsCard';

export default function Home() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">AlphaCaller</h1>
                <p className="text-xs text-muted">Track Top Callers</p>
              </div>
            </div>
            <WalletConnect />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="text"
            placeholder="Search callers, tokens, or contracts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface text-fg pl-12 pr-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
          />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            icon={<Users className="w-5 h-5" />}
            label="Total Callers"
            value="2,847"
            change="+12.5%"
            positive
          />
          <StatsCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Verified Calls"
            value="14,293"
            change="+8.3%"
            positive
          />
          <StatsCard
            icon={<Star className="w-5 h-5" />}
            label="Avg Accuracy"
            value="68.4%"
            change="+2.1%"
            positive
          />
          <StatsCard
            icon={<Bell className="w-5 h-5" />}
            label="Active Alerts"
            value="1,024"
            change="-3.2%"
            positive={false}
          />
        </div>

        {/* Featured Caller Card */}
        <div className="bg-gradient-to-br from-accent/20 to-surface rounded-lg p-6 border border-accent/30">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                CM
              </div>
              <div>
                <h3 className="text-lg font-bold text-fg">CryptoMaster</h3>
                <p className="text-sm text-muted">@cryptomaster_calls</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-success">89.2%</div>
              <p className="text-xs text-muted">Accuracy</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-muted">Total Calls</p>
              <p className="text-lg font-semibold text-fg">247</p>
            </div>
            <div>
              <p className="text-xs text-muted">Successful</p>
              <p className="text-lg font-semibold text-success">220</p>
            </div>
            <div>
              <p className="text-xs text-muted">Avg ROI</p>
              <p className="text-lg font-semibold text-accent">+342%</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">Telegram</span>
            <span className="px-3 py-1 bg-success/20 text-success text-xs rounded-full">Verified</span>
            <span className="px-3 py-1 bg-surface text-muted text-xs rounded-full">Top 1%</span>
          </div>
        </div>

        {/* Recent Calls Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-fg">Recent Calls</h2>
            <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-200">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CallFeedCard
              tokenName="PEPE 2.0"
              tokenSymbol="PEPE2"
              callerName="CryptoMaster"
              callerHandle="@cryptomaster_calls"
              priceChange="+156.3%"
              status="verified"
              timestamp="2 hours ago"
              initialLiquidity="$45.2K"
            />
            <CallFeedCard
              tokenName="MoonDoge"
              tokenSymbol="MDOGE"
              callerName="AlphaHunter"
              callerHandle="@alphahunter"
              priceChange="+89.7%"
              status="verified"
              timestamp="4 hours ago"
              initialLiquidity="$32.8K"
            />
            <CallFeedCard
              tokenName="SafeRocket"
              tokenSymbol="SRKT"
              callerName="GemFinder"
              callerHandle="@gemfinder_pro"
              priceChange="-12.4%"
              status="unverified"
              timestamp="6 hours ago"
              initialLiquidity="$18.5K"
            />
          </div>
        </section>

        {/* Leaderboard Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-fg">Top Callers Leaderboard</h2>
            <button
              onClick={() => setShowSubscriptionModal(true)}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 text-sm font-medium shadow-card hover:shadow-hover"
            >
              Upgrade for Full Access
            </button>
          </div>
          <LeaderboardTable />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent/10 to-surface rounded-lg p-8 text-center border border-accent/20">
          <h3 className="text-2xl font-bold text-fg mb-2">Ready to Find Alpha?</h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Join thousands of traders tracking the best memecoin callers. Get real-time alerts, 
            detailed analytics, and exclusive insights.
          </p>
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 font-medium shadow-card hover:shadow-hover"
          >
            Start Free Trial
          </button>
        </section>
      </main>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}
    </div>
  );
}
