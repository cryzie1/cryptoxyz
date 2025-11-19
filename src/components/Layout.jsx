import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bitcoin, Wallet, Link as ChainIcon, Layers } from 'lucide-react';
import clsx from 'clsx';

const NavLink = ({ to, children, icon: Icon, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                isActive
                    ? "bg-primary/10 text-primary font-medium shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    : "text-muted hover:text-text hover:bg-surface"
            )}
        >
            {Icon && <Icon size={18} />}
            {children}
        </Link>
    );
};

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary/30">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-surface/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                                C
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                cryptovhl
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            <NavLink to="/" icon={Layers}>Home</NavLink>
                            <NavLink to="/bitcoin" icon={Bitcoin}>Bitcoin</NavLink>
                            <NavLink to="/web3-wallet" icon={Wallet}>Web3 Wallet</NavLink>
                            <NavLink to="/multichains" icon={ChainIcon}>Multichains</NavLink>
                            <NavLink to="/defi" icon={Layers}>DeFi</NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-surface/50 bg-background/95 backdrop-blur-xl absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <NavLink to="/" icon={Layers} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                            <NavLink to="/bitcoin" icon={Bitcoin} onClick={() => setIsMobileMenuOpen(false)}>Bitcoin</NavLink>
                            <NavLink to="/web3-wallet" icon={Wallet} onClick={() => setIsMobileMenuOpen(false)}>Web3 Wallet</NavLink>
                            <NavLink to="/multichains" icon={ChainIcon} onClick={() => setIsMobileMenuOpen(false)}>Multichains</NavLink>
                            <NavLink to="/defi" icon={Layers} onClick={() => setIsMobileMenuOpen(false)}>DeFi</NavLink>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-surface/50 bg-surface/30 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-muted text-sm">
                            @ 2025 cryptovhl by fer. Educational Purpose only.
                        </div>
                        <div className="flex gap-6 text-muted">
                            <a href="https://x.com/azukiaraixxz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
