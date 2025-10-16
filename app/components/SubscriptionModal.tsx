'use client';

import { X, Check } from 'lucide-react';

interface SubscriptionModalProps {
  onClose: () => void;
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Basic call tracking',
      'Public leaderboards',
      'Limited search',
      'Community access',
    ],
    cta: 'Current Plan',
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$29',
    period: 'per month',
    features: [
      'Real-time alerts',
      'Customizable feeds',
      'Advanced analytics',
      'Priority support',
      'Email notifications',
      'Telegram integration',
    ],
    cta: 'Upgrade to Standard',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$99',
    period: 'per month',
    features: [
      'Everything in Standard',
      'Exclusive insights',
      'Advanced filtering',
      'Early feature access',
      'API access',
      'Dedicated support',
      'Custom alerts',
    ],
    cta: 'Upgrade to Premium',
    highlighted: false,
  },
];

export function SubscriptionModal({ onClose }: SubscriptionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-sm">
      <div className="bg-surface rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-accent/20">
        <div className="sticky top-0 bg-surface border-b border-accent/20 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-fg">Choose Your Plan</h2>
            <p className="text-sm text-muted mt-1">Upgrade to unlock premium features</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-6 border transition-all duration-200 ${
                  tier.highlighted
                    ? 'border-accent bg-accent/5 shadow-hover'
                    : 'border-accent/20 hover:border-accent/40'
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-fg mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-fg">{tier.price}</span>
                  <span className="text-sm text-muted ml-2">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-fg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-accent text-white hover:bg-accent/90 shadow-card hover:shadow-hover'
                      : 'bg-surface border border-accent/20 text-fg hover:bg-accent/10'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-sm text-muted text-center">
              All plans include a 7-day free trial. Cancel anytime. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
