# AlphaCaller - Track Top Memecoin Callers

A production-ready Base Mini App for tracking and analyzing memecoin callers with objective performance metrics.

## Features

- 🎯 **Caller Leaderboards** - Ranked by accuracy and performance
- 📊 **Real-time Analytics** - Track price changes and liquidity
- 🔔 **Custom Alerts** - Get notified about top calls
- 💎 **Verified Calls** - On-chain verification system
- 🎨 **Modern UI** - Sleek, responsive design with BASE theme

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit (Coinbase)
- Wagmi & Viem

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
├── components/     # Reusable UI components
├── globals.css     # Global styles with BASE theme
├── layout.tsx      # Root layout with providers
└── page.tsx        # Main application page
```

## Features Roadmap

- [ ] Wallet integration with Monad
- [ ] Real-time call ingestion
- [ ] Advanced filtering and search
- [ ] Subscription payment system
- [ ] Telegram/Email alerts
- [ ] API for developers

## License

MIT
