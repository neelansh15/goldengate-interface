# GoldenWhales TWAP Interface

A sophisticated Time-Weighted Average Price (TWAP) trading interface built for decentralized exchanges. This application enables users to execute large trades efficiently by breaking them into smaller batches over time, reducing market impact and achieving better average prices.

## 🌟 Features

### Core TWAP Functionality
- **Batch Trading**: Split large orders into configurable smaller batches
- **Time Intervals**: Set custom intervals between trade executions
- **Limit Price Control**: Set maximum acceptable price for trade execution
- **Multi-Chain Support**: Currently supports BSC and Ethereum networks
- **Real-time Monitoring**: Track order status and execution history

### User Interface
- **Modern Design**: Clean, responsive interface built with Next.js and TailwindCSS
- **TradingView Integration**: Professional charting with real-time price data
- **Token Selection**: Easy token selection with comprehensive token lists
- **Order Management**: View and manage all active and historical orders
- **Dark/Light Theme**: Customizable theme support

### Technical Features
- **Wallet Integration**: RainbowKit integration for seamless wallet connections
- **State Management**: Efficient state management with Jotai
- **Type Safety**: Full TypeScript implementation
- **Real-time Updates**: React Query for efficient data fetching and caching

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, Radix UI components
- **Web3**: Wagmi, Viem, RainbowKit
- **State Management**: Jotai
- **Data Fetching**: TanStack React Query
- **Charts**: TradingView widgets
- **Notifications**: React Hot Toast

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- A Web3 wallet (MetaMask, WalletConnect, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/goldengate-interface.git
cd goldengate-interface
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
NEXT_PUBLIC_1INCH_AUTH_KEY=your_1inch_api_key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

5. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## 📱 Usage

### Creating a TWAP Order

1. **Connect Wallet**: Click "Connect Wallet" and select your preferred wallet
2. **Select Tokens**: Choose the tokens you want to trade (sell/buy pair)
3. **Set Parameters**:
   - **Amount**: Enter the total amount you want to trade
   - **Limit Price**: Set the maximum price you're willing to pay
   - **Batch Size**: Number of smaller orders to split the total into
   - **Interval**: Time between each batch execution (in minutes)
   - **Max Interval**: Maximum time to wait for favorable conditions

4. **Review & Submit**: Review your order details and click "Place Order"

### Managing Orders

- View all your orders in the "User Orders" section
- Monitor execution status and progress
- Track individual batch executions
- Cancel orders if needed (implementation dependent)

## 🏗️ Architecture

### Frontend Structure
```
src/
├── atoms/           # Jotai state atoms
├── components/      # Reusable UI components
├── constants/       # Configuration and constants
├── hooks/          # Custom React hooks
├── pages/          # Next.js pages
├── styles/         # Global styles
├── types.ts        # TypeScript type definitions
└── views/          # Page-level components
```

### Key Components

- **SwapForm**: Main trading interface
- **UserOrders**: Order history and management
- **TradingViewChart**: Price charting integration
- **CurrencyInput**: Token selection and amount input
- **CommitButton**: Order submission logic

### State Management

The application uses Jotai for atomic state management:
- `currencyAtoms`: Token selection state
- `fieldAtoms`: Trading parameters (batch size, intervals, etc.)
- `inputAtoms`: Form input values and validation

## 🔗 Integration

### Backend API

The interface connects to a backend service running on `http://localhost:8008` with the following endpoints:

- `POST /order` - Submit new TWAP orders
- `GET /orders` - Retrieve user orders
- `GET /executions` - Get order execution history

### Smart Contracts

- **Operator Address**: `0x3230B799d1E7dDE6cF1B97Cd8AE991EfAe705e41`
- **1inch Integration**: Uses 1inch Limit Order SDK for order execution
- **Multi-chain Support**: BSC and Ethereum networks

## 🛡️ Security Considerations

- All transactions require user wallet signatures
- Orders are submitted to a trusted operator contract
- Token approvals are handled securely through standard ERC-20 interfaces
- No private keys are stored or transmitted

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm dev:turbo` - Development with Turbopack
- `pnpm build:turbo` - Build with Turbopack

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Follow us on Twitter

## 🙏 Acknowledgments

- Built for ETHDelhi hackathon
- Powered by 1inch Protocol
- TradingView for charting capabilities
- The amazing Web3 community

---

**⚠️ Disclaimer**: This software is in development. Use at your own risk and never trade more than you can afford to lose. Always do your own research before making any trading decisions.
