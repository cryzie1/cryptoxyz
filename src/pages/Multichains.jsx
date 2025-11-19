import React from 'react';
import { Link as ChainIcon, Fuel, AlertTriangle, CheckCircle, XCircle, Search } from 'lucide-react';

const ChainCard = ({ name, type, gas, speed, color }) => (
    <div className="bg-surface border border-surface/50 rounded-xl p-6 hover:border-primary/30 transition-colors group">
        <div className="flex items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${color}`}>{name}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-surface border border-surface/50 text-muted">
                {type}
            </span>
        </div>
        <div className="space-y-2 text-sm">
            <div className="flex justify-between">
                <span className="text-muted">Gas Fee:</span>
                <span className="text-text font-medium">{gas}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-muted">Speed:</span>
                <span className="text-text font-medium">{speed}</span>
            </div>
        </div>
    </div>
);

const Multichains = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-500 font-medium">
                    <ChainIcon size={16} />
                    <span>The Multi-Chain Universe</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text">Multichains Explained</h1>
                <p className="text-xl text-muted max-w-2xl mx-auto">
                    Not all chains are created equal. Understand the differences to save money and avoid mistakes.
                </p>
            </div>

            {/* Chains Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ChainCard
                    name="Ethereum (ETH)"
                    type="Layer 1"
                    gas="High ($2 - $50+)"
                    speed="Moderate"
                    color="text-blue-400"
                />
                <ChainCard
                    name="BNB Chain (BEP20)"
                    type="Layer 1"
                    gas="Low ($0.05 - $0.20)"
                    speed="Fast"
                    color="text-yellow-400"
                />
                <ChainCard
                    name="Solana (SOL)"
                    type="Layer 1"
                    gas="Very Low (<$0.01)"
                    speed="Blazing Fast"
                    color="text-purple-400"
                />
                <ChainCard
                    name="Tron (TRC20)"
                    type="Layer 1"
                    gas="Low ($1 - $2)"
                    speed="Fast"
                    color="text-red-400"
                />
                <ChainCard
                    name="Arbitrum (ARB)"
                    type="Layer 2"
                    gas="Low ($0.01 - $0.10)"
                    speed="Fast"
                    color="text-blue-300"
                />
                <ChainCard
                    name="HyperEVM"
                    type="High Perf L1"
                    gas="Variable"
                    speed="Very Fast"
                    color="text-green-400"
                />
            </div>

            {/* Concepts Section */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface border border-surface/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                        <Fuel className="text-orange-400" /> Gas Fees
                    </h3>
                    <p className="text-muted mb-4">
                        "Gas" is the fee you pay to validators to process your transaction. It varies by chain and network congestion.
                    </p>
                    <div className="bg-background/50 p-4 rounded-lg text-sm space-y-2">
                        <div className="flex justify-between">
                            <span>Sending ETH on Ethereum:</span>
                            <span className="text-red-400">Expensive</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sending USDT on Tron:</span>
                            <span className="text-green-400">Cheap</span>
                        </div>
                    </div>
                </div>

                <div className="bg-surface border border-surface/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                        <Search className="text-blue-400" /> Transaction Hash (TxID)
                    </h3>
                    <p className="text-muted mb-4">
                        Every transaction has a unique ID (TxID). You can use this to track the status of your transfer on a "Block Explorer" (e.g., Etherscan, BscScan).
                    </p>
                    <div className="bg-background/50 p-3 rounded-lg text-xs font-mono text-muted break-all">
                        0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
                    </div>
                </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text text-center">Cross-Chain Safety</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                            <CheckCircle size={20} /> Do's
                        </h3>
                        <ul className="space-y-3 text-sm text-muted">
                            <li className="flex gap-2">
                                <span className="text-green-400">•</span>
                                Always double-check the network (e.g., don't send BEP20 tokens to an ERC20 address unless supported).
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-400">•</span>
                                Use a "Bridge" to move assets between chains.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-400">•</span>
                                Keep some native token (ETH, BNB, SOL) for gas fees.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                            <XCircle size={20} /> Don'ts
                        </h3>
                        <ul className="space-y-3 text-sm text-muted">
                            <li className="flex gap-2">
                                <span className="text-red-400">•</span>
                                NEVER send tokens directly from one chain to another without a bridge (e.g., Ethereum to Solana). They will be lost.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-400">•</span>
                                Don't assume all addresses are the same across chains.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Multichains;
