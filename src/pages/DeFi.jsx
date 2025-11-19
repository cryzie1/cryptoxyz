import React from 'react';
import { DollarSign, Percent, Landmark, RefreshCw, TrendingUp, ShieldCheck, ArrowRight, Users, Database, Wallet, Server } from 'lucide-react';

const DefiCard = ({ icon: Icon, title, children, color }) => (
    <div className="bg-surface border border-surface/50 rounded-xl p-6 hover:border-primary/30 transition-colors h-full">
        <div className={`w-12 h-12 rounded-lg ${color} bg-opacity-10 flex items-center justify-center mb-4 text-white`}>
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
        <div className="text-muted text-sm leading-relaxed space-y-2">
            {children}
        </div>
    </div>
);

const DeFi = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 font-medium">
                    <Landmark size={16} />
                    <span>Be Your Own Bank</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text">Decentralized Finance (DeFi)</h1>
                <p className="text-xl text-muted max-w-2xl mx-auto">
                    Earn yield, borrow assets, and trade without intermediaries. Welcome to the open financial system.
                </p>
            </div>

            {/* Ethereum Staking Architecture */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-blue-500 pl-4">Ethereum Staking Architecture</h2>
                <div className="bg-surface border border-surface/50 rounded-xl p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mb-8">

                        {/* User */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">You (Staker)</h3>
                                <p className="text-sm text-muted">Holds ETH</p>
                            </div>
                        </div>

                        <ArrowRight size={24} className="text-muted rotate-90 md:rotate-0" />

                        {/* Liquid Staking Protocol */}
                        <div className="flex flex-col items-center gap-4 bg-background/50 p-6 rounded-xl border border-surface">
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                <Database size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Liquid Staking</h3>
                                <p className="text-sm text-muted">Lido / Rocket Pool</p>
                                <p className="text-xs text-purple-400 mt-1">Receives stETH/rETH</p>
                            </div>
                        </div>

                        <ArrowRight size={24} className="text-muted rotate-90 md:rotate-0" />

                        {/* Validator */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <Server size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Validator Node</h3>
                                <p className="text-sm text-muted">32 ETH Deposit</p>
                                <p className="text-xs text-green-400 mt-1">Secures Network</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-background/30 p-4 rounded-lg">
                            <h4 className="font-bold text-text mb-2 flex items-center gap-2">
                                <ShieldCheck size={16} className="text-green-500" /> Proof of Stake (PoS)
                            </h4>
                            <p className="text-sm text-muted">
                                Instead of miners burning energy, Validators lock up (stake) 32 ETH to propose and verify blocks. If they act maliciously, their ETH is slashed (destroyed).
                            </p>
                        </div>
                        <div className="bg-background/30 p-4 rounded-lg">
                            <h4 className="font-bold text-text mb-2 flex items-center gap-2">
                                <DollarSign size={16} className="text-yellow-500" /> Rewards Sources
                            </h4>
                            <ul className="text-sm text-muted space-y-1">
                                <li>1. <strong>Consensus Layer:</strong> New ETH issuance for proposing blocks.</li>
                                <li>2. <strong>Execution Layer:</strong> Priority fees (tips) + MEV (Maximal Extractable Value) from traders.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* AAVE Architecture Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-purple-500 pl-4">How Lending Works (AAVE Model)</h2>
                <div className="bg-surface border border-surface/50 rounded-xl p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                        {/* Supplier */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Supplier</h3>
                                <p className="text-sm text-muted">Deposits Assets</p>
                                <p className="text-xs text-green-400 mt-1">+ Earns Interest</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-muted">
                            <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                            <span className="text-xs">Liquidity</span>
                        </div>

                        {/* Liquidity Pool */}
                        <div className="flex flex-col items-center gap-4 bg-background/50 p-6 rounded-xl border border-surface">
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                <Database size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Lending Pool</h3>
                                <p className="text-sm text-muted">Smart Contract</p>
                                <p className="text-xs text-purple-400 mt-1">Algorithmic Rates</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-muted">
                            <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                            <span className="text-xs">Loans</span>
                        </div>

                        {/* Borrower */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                <Wallet size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Borrower</h3>
                                <p className="text-sm text-muted">Deposits Collateral</p>
                                <p className="text-xs text-red-400 mt-1">- Pays Interest</p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-8 text-center text-sm text-muted bg-background/30 p-4 rounded-lg">
                        <p>
                            In AAVE, suppliers deposit tokens into a "pool". Borrowers can borrow from this pool by over-collateralizing (depositing more value than they borrow). Interest rates fluctuate based on supply and demand.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stablecoins Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-green-500 pl-4">Stablecoins</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-surface p-6 rounded-xl border border-surface/50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">T</div>
                            <h3 className="font-bold text-text">USDT (Tether)</h3>
                        </div>
                        <p className="text-sm text-muted">The largest stablecoin by market cap. Centralized issuer.</p>
                    </div>
                    <div className="bg-surface p-6 rounded-xl border border-surface/50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">C</div>
                            <h3 className="font-bold text-text">USDC (Circle)</h3>
                        </div>
                        <p className="text-sm text-muted">Regulated, transparent, and widely used in DeFi. Centralized issuer.</p>
                    </div>
                    <div className="bg-surface p-6 rounded-xl border border-surface/50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs">D</div>
                            <h3 className="font-bold text-text">DAI / USDe</h3>
                        </div>
                        <p className="text-sm text-muted">Decentralized stablecoins backed by crypto collateral or delta-neutral strategies.</p>
                    </div>
                </div>
            </div>

            {/* Advanced Trading (Perps) */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-blue-500 pl-4">Perpetual DEXs (Perps)</h2>
                <p className="text-muted">Trade with leverage directly from your wallet. No KYC, self-custody.</p>
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://hyperliquid.xyz" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="bg-surface border border-surface/50 rounded-xl p-6 group-hover:border-primary/30 transition-colors h-full">
                            <h3 className="font-bold text-text mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">Hyperliquid</h3>
                            <p className="text-sm text-muted mb-3">High performance L1 optimized for trading. Order book model.</p>
                            <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded">Top Pick</span>
                        </div>
                    </a>
                    <a href="https://lighter.xyz" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="bg-surface border border-surface/50 rounded-xl p-6 group-hover:border-primary/30 transition-colors h-full">
                            <h3 className="font-bold text-text mb-2 text-purple-400 group-hover:text-purple-300 transition-colors">Lighter</h3>
                            <p className="text-sm text-muted">Optimized order book DEX on Ethereum Layer 2s.</p>
                        </div>
                    </a>
                    <a href="https://www.asterdex.com/en" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="bg-surface border border-surface/50 rounded-xl p-6 group-hover:border-primary/30 transition-colors h-full">
                            <h3 className="font-bold text-text mb-2 text-pink-400 group-hover:text-pink-300 transition-colors">Aster</h3>
                            <p className="text-sm text-muted">Emerging perp DEX with unique features.</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* DeFi Mechanics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DefiCard icon={Percent} title="Yield Farming" color="bg-pink-500">
                    <p>
                        <strong>Put your crypto to work.</strong> Instead of letting your assets sit idle, you can provide liquidity to a DEX or lend them out to earn interest (APY).
                    </p>
                    <p className="text-xs text-pink-400 mt-2">Risk: Impermanent Loss, Smart Contract Bugs.</p>
                </DefiCard>

                <DefiCard icon={RefreshCw} title="Lending & Borrowing" color="bg-purple-500">
                    <p>
                        Protocols like <strong>Aave</strong> or <strong>Compound</strong> allow you to deposit assets as collateral and borrow other assets against them.
                    </p>
                    <p className="mt-2">
                        Example: Deposit 1 ETH -&gt; Borrow 1000 USDC. If ETH price drops, you might get liquidated!
                    </p>
                </DefiCard>

                <DefiCard icon={ShieldCheck} title="Collateral" color="bg-blue-500">
                    <p>
                        DeFi is <strong>over-collateralized</strong>. To borrow $100, you typically need to deposit &gt;$120 worth of crypto.
                    </p>
                    <p className="mt-2">
                        This ensures the protocol stays solvent even if borrowers default.
                    </p>
                </DefiCard>
            </div>
        </div>
    );
};

export default DeFi;
