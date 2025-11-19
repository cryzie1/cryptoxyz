import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Wallet, Link as ChainIcon, Layers, ArrowRight } from 'lucide-react';

const FeatureCard = ({ to, icon: Icon, title, description, color }) => (
    <Link
        to={to}
        className="group relative overflow-hidden rounded-2xl bg-surface border border-surface/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
    >
        <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
            <Icon size={120} />
        </div>

        <div className="relative z-10">
            <div className={`w-12 h-12 rounded-xl bg-surface/50 flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} />
            </div>

            <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-muted mb-4 line-clamp-2">
                {description}
            </p>

            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Explore <ArrowRight size={16} className="ml-1" />
            </div>
        </div>
    </Link>
);

const Home = () => {
    return (
        <div className="space-y-16 py-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
                    Welcome to the Future of Finance
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-text via-text to-muted bg-clip-text text-transparent">
                    Master the <br />
                    <span className="text-primary">Crypto Space</span>
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    Your comprehensive guide to understanding Bitcoin, Blockchains, DeFi, and how to navigate the decentralized web safely.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Link to="/web3-wallet" className="px-8 py-3 rounded-xl bg-primary text-background font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                        Start Learning
                    </Link>
                    <Link to="/bitcoin" className="px-8 py-3 rounded-xl bg-surface text-text font-medium hover:bg-surface/80 transition-colors border border-surface/50">
                        Explore Topics
                    </Link>
                </div>
            </div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                    to="/bitcoin"
                    icon={Bitcoin}
                    title="Bitcoin Fundamentals"
                    description="Understand the first cryptocurrency, its technology, SHA256, and why it is secure."
                    color="text-orange-400"
                />
                <FeatureCard
                    to="/web3-wallet"
                    icon={Wallet}
                    title="Web3 Wallet"
                    description="Setup your first wallet, learn about exchanges, DEXs, and essential security practices."
                    color="text-blue-400"
                />
                <FeatureCard
                    to="/multichains"
                    icon={ChainIcon}
                    title="Multichains"
                    description="Deep dive into different chains (ETH, BSC, TRX), gas fees, and transaction mechanics."
                    color="text-purple-400"
                />
                <FeatureCard
                    to="/defi"
                    icon={Layers}
                    title="DeFi & Stablecoins"
                    description="Explore Decentralized Finance, yield farming, lending, borrowing, and stablecoin types."
                    color="text-green-400"
                />
            </div>
        </div>
    );
};

export default Home;
