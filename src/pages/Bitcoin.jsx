import React, { useState, useEffect } from 'react';
import { Bitcoin as BitcoinIcon, Cpu, Lock, Shield, Server, Key, AlertTriangle } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, children }) => (
    <div className="bg-surface border border-surface/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-text">{title}</h3>
        </div>
        <div className="text-muted leading-relaxed">
            {children}
        </div>
    </div>
);

const Bitcoin = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
                const data = await response.json();
                setPrice(data.bitcoin);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch price:", err);
                setError("Failed to load price");
                setLoading(false);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header & Live Price */}
            <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 font-medium">
                    <BitcoinIcon size={16} />
                    <span>The King of Crypto</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text">Bitcoin (BTC)</h1>

                {/* Live Price Widget */}
                <div className="inline-block bg-surface border border-surface/50 rounded-2xl p-6 min-w-[300px] shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                    <p className="text-muted text-sm mb-1">Current Price</p>
                    {loading ? (
                        <div className="h-10 w-32 bg-surface/50 animate-pulse rounded mx-auto"></div>
                    ) : error ? (
                        <div className="text-red-400 flex items-center justify-center gap-2">
                            <AlertTriangle size={16} /> {error}
                        </div>
                    ) : (
                        <div className="space-y-1">
                            <div className="text-4xl font-bold text-text">
                                ${price.usd.toLocaleString()}
                            </div>
                            <div className={`text-sm font-medium ${price.usd_24h_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {price.usd_24h_change >= 0 ? '+' : ''}{price.usd_24h_change.toFixed(2)}% (24h)
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Technology & Architecture */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text border-l-4 border-orange-500 pl-4">Network Architecture</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <InfoCard icon={Server} title="Decentralized Nodes">
                        <p className="mb-4">
                            Bitcoin runs on thousands of computers (nodes) worldwide. Each node keeps a full copy of the blockchain ledger.
                        </p>
                        <p>
                            This redundancy makes it impossible to shut down. To kill Bitcoin, you would have to destroy the internet itself.
                        </p>
                    </InfoCard>
                    <InfoCard icon={Cpu} title="Miners & PoW">
                        <p className="mb-4">
                            Miners secure the network by expending energy (Proof of Work) to solve SHA-256 puzzles.
                        </p>
                        <p>
                            This energy cost creates a "wall of security". Attacking the network would cost billions of dollars in hardware and electricity per hour.
                        </p>
                    </InfoCard>
                </div>
            </div>

            {/* Security Deep Dive */}
            <div className="bg-surface/30 border border-surface/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-primary" size={32} />
                    <h2 className="text-2xl font-bold text-text">Why It Can't Be Broken</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-text mb-2 flex items-center gap-2">
                            <Lock size={18} className="text-orange-400" /> 51% Attack Difficulty
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                            To hack Bitcoin, an attacker needs more computing power than all other miners combined (51%). Given the sheer size of the network today, this is physically and economically impossible for any single entity or nation-state.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-text mb-2 flex items-center gap-2">
                            <Key size={18} className="text-orange-400" /> Cryptographic Certainty
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Bitcoin uses SHA-256 and Elliptic Curve Cryptography (secp256k1). These are military-grade standards. Guessing a private key is as likely as picking a specific atom in the universe.
                        </p>
                    </div>
                </div>
            </div>

            {/* Wallet Mechanics */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-blue-500 pl-4">How Wallets Work</h2>
                <div className="bg-surface border border-surface/50 rounded-xl p-6">
                    <p className="text-lg text-text mb-4">
                        A common misconception: <strong>Your wallet does not store coins.</strong> It stores keys.
                    </p>
                    <ul className="space-y-4 text-muted">
                        <li className="flex gap-3">
                            <div className="mt-1 min-w-[24px] h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">1</div>
                            <div>
                                <strong className="text-text">Private Key:</strong> The secret password that signs transactions. Whoever has this owns the funds.
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="mt-1 min-w-[24px] h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">2</div>
                            <div>
                                <strong className="text-text">Public Key:</strong> Derived from the private key. It's like your email address—safe to share.
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="mt-1 min-w-[24px] h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">3</div>
                            <div>
                                <strong className="text-text">The Blockchain:</strong> The actual record of who owns what. Your wallet just reads this record.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* How to Transfer Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-green-500 pl-4">How to Transfer Bitcoin</h2>
                <div className="bg-surface border border-surface/50 rounded-xl p-6 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-text mb-2">1. Address Types Matter</h3>
                        <p className="text-muted mb-4">
                            Unlike Ethereum's single address format (`0x...`), Bitcoin has evolved. You should use <strong>Native SegWit</strong> addresses for lower fees.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-background/50 rounded-lg border border-green-500/30">
                                <span className="text-green-400 font-bold">Recommended (Native SegWit)</span>
                                <p className="text-sm text-muted mt-1">Starts with <strong>bc1q...</strong></p>
                                <p className="text-xs text-muted mt-2">Lowest fees, modern standard.</p>
                            </div>
                            <div className="p-4 bg-background/50 rounded-lg border border-surface">
                                <span className="text-muted font-bold">Legacy</span>
                                <p className="text-sm text-muted mt-1">Starts with <strong>1...</strong></p>
                                <p className="text-xs text-muted mt-2">Higher fees, older standard.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-text mb-2">2. The UTXO Model</h3>
                        <p className="text-muted">
                            Bitcoin doesn't have "accounts" with balances like a bank. It has <strong>Unspent Transaction Outputs (UTXOs)</strong>.
                        </p>
                        <p className="text-sm text-muted mt-2 italic">
                            Think of it like cash. If you have a $50 bill and buy something for $20, you don't edit the $50 bill. You hand it over and get $30 back in change. Bitcoin transactions work the same way—you often get "change" sent back to your own address.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-text mb-2">3. Sending Messages (OP_RETURN)</h3>
                        <p className="text-muted">
                            You can embed a small amount of data (80 bytes) into the blockchain using <code>OP_RETURN</code>. This allows you to leave an immutable message on the ledger forever.
                        </p>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text border-l-4 border-red-500 pl-4">Maximum Security (Cold Storage)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-surface border border-surface/50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-primary" size={24} />
                            <h3 className="text-xl font-bold text-text">Hardware Wallets</h3>
                        </div>
                        <p className="text-muted mb-4">
                            The gold standard for security. Your private keys never touch the internet.
                        </p>
                        <ul className="space-y-2 text-sm text-muted mb-4">
                            <li className="flex items-center gap-2">✓ Physical device required to sign</li>
                            <li className="flex items-center gap-2">✓ Immune to computer viruses</li>
                        </ul>
                        <a href="https://trezor.io/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium">
                            Recommended: Trezor
                        </a>
                    </div>

                    <div className="bg-surface border border-surface/50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="text-primary" size={24} />
                            <h3 className="text-xl font-bold text-text">The Golden Rule</h3>
                        </div>
                        <blockquote className="text-xl font-bold text-text italic border-l-2 border-primary pl-4 my-4">
                            "Not your keys, not your coins."
                        </blockquote>
                        <p className="text-muted text-sm">
                            If you leave your Bitcoin on an exchange (Binance, Coinbase), <strong>you do not own it</strong>. You have an IOU. If the exchange goes bankrupt (like FTX), your money is gone. Always withdraw to your own wallet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bitcoin;
