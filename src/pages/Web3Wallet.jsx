import React from 'react';
import { Wallet, Shield, Globe, Smartphone, ExternalLink } from 'lucide-react';

const StepCard = ({ number, title, children }) => (
    <div className="relative pl-8 md:pl-0">
        <div className="hidden md:flex absolute -left-4 top-0 bottom-0 w-px bg-surface/50"></div>
        <div className="md:flex gap-6 items-start group">
            <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-surface/50 items-center justify-center text-sm font-bold text-muted group-hover:border-primary group-hover:text-primary transition-colors z-10">
                {number}
            </div>
            <div className="flex-grow bg-surface border border-surface/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {number}
                    </div>
                    <h3 className="text-xl font-bold text-text">{title}</h3>
                </div>
                <h3 className="hidden md:block text-xl font-bold text-text mb-4">{title}</h3>
                <div className="text-muted space-y-4">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

const WalletLink = ({ name, url, recommended }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-primary/10 border border-surface/50 hover:border-primary/30 transition-all group"
    >
        <span className="flex items-center gap-2 text-sm font-medium text-text group-hover:text-primary">
            {name}
            {recommended && <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary">Rec</span>}
        </span>
        <ExternalLink size={14} className="text-muted group-hover:text-primary" />
    </a>
);

const Web3Wallet = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 font-medium">
                    <Wallet size={16} />
                    <span>Your Gateway to Web3</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text">Web3 Wallet Setup</h1>
                <p className="text-xl text-muted max-w-2xl mx-auto">
                    Secure your assets and interact with decentralized applications. Choose the right wallet for your needs.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                <StepCard number="1" title="Choose Your Wallet">
                    <p>
                        A crypto wallet is your gateway to the blockchain. It stores your private keys, which allow you to access your funds.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div className="bg-background/50 p-4 rounded-lg border border-surface/50">
                            <div className="flex items-center gap-2 mb-4 text-text font-bold">
                                <Globe size={18} className="text-primary" /> Browser Extension
                            </div>
                            <div className="space-y-2">
                                <WalletLink name="Rabby Wallet" url="https://rabby.io" recommended />
                                <WalletLink name="MetaMask" url="https://metamask.io" />
                                <WalletLink name="Phantom (Solana)" url="https://phantom.app" />
                            </div>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg border border-surface/50">
                            <div className="flex items-center gap-2 mb-4 text-text font-bold">
                                <Smartphone size={18} className="text-primary" /> Mobile App
                            </div>
                            <div className="space-y-2">
                                <WalletLink name="Zerion Wallet" url="https://zerion.io" />
                                <WalletLink name="Coinbase Wallet" url="https://www.coinbase.com/wallet" />
                                <WalletLink name="Uniswap Wallet" url="https://wallet.uniswap.org" />
                            </div>
                        </div>
                    </div>
                </StepCard>

                <StepCard number="2" title="Secure Your Seed Phrase">
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg mb-4">
                        <h4 className="text-red-400 font-bold flex items-center gap-2 mb-2">
                            <Shield size={18} /> CRITICAL WARNING
                        </h4>
                        <p className="text-sm text-red-300">
                            Your seed phrase (12-24 words) is the ONLY way to recover your funds. Never share it. Never type it into a website unless you are recovering a wallet.
                        </p>
                    </div>
                    <p>
                        Write it down on paper. Store it in a fireproof safe or multiple secure locations. Do not take a screenshot or save it in a text file on your computer.
                    </p>
                </StepCard>

                <StepCard number="3" title="Get Funds on an Exchange (CEX)">
                    <p>
                        To get crypto, you usually need to buy it with fiat currency (USD, EUR, etc.) on a Centralized Exchange (CEX).
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 rounded-full bg-surface border border-surface/50 text-sm">Binance</span>
                        <span className="px-3 py-1 rounded-full bg-surface border border-surface/50 text-sm">Bybit</span>
                        <span className="px-3 py-1 rounded-full bg-surface border border-surface/50 text-sm">Coinbase</span>
                        <span className="px-3 py-1 rounded-full bg-surface border border-surface/50 text-sm">Kraken</span>
                    </div>
                    <p className="mt-4 text-sm italic">
                        *Complete KYC (Know Your Customer) verification to enable fiat deposits.
                    </p>
                </StepCard>

                <StepCard number="4" title="Withdraw to Web3 Wallet">
                    <p>
                        Once you bought crypto (e.g., ETH, SOL, USDT), withdraw it to your personal wallet address.
                    </p>
                    <div className="bg-background/50 p-4 rounded-lg border border-surface/50 mt-4">
                        <h4 className="font-bold text-text mb-2">Checklist before withdrawing:</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">✓</div>
                                Correct Network (e.g., ERC20 for Ethereum, BEP20 for BNB Chain)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">✓</div>
                                Correct Address (Copy & Paste, check first and last 4 chars)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">✓</div>
                                Send a small test amount first!
                            </li>
                        </ul>
                    </div>
                </StepCard>

                <StepCard number="5" title="Explore DEX & Advanced Trading">
                    <p>
                        Now you are on-chain! You can use Decentralized Exchanges (DEX) to swap tokens without an intermediary.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <h4 className="font-bold text-text mb-2">Spot DEXs</h4>
                            <p className="text-sm mb-2">Swap tokens instantly.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Uniswap</span>
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Raydium</span>
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Jupiter</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-text mb-2">Perp DEXs & Prediction</h4>
                            <p className="text-sm mb-2">Trade with leverage or bet on outcomes.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Hyperliquid</span>
                                <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Lighter</span>
                                <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Aster</span>
                            </div>
                        </div>
                    </div>
                </StepCard>
            </div>
        </div>
    );
};

export default Web3Wallet;
