import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut, User, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const { user, logout, darkMode, toggleDarkMode } = React.useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav style={{ 
            padding: '1rem 0', 
            position: 'fixed', 
            width: '100%', 
            zIndex: 1000,
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--gradient-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>A</div>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--text-main)' }}>Aura Flow</span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '0.6rem 1.5rem', borderRadius: '50px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
                        <a href="#footer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
                        {user && (
                            <>
                                <Link to="/dashboard" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Dashboard</Link>
                                {user.role === 'admin' && <Link to="/admin" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Admin</Link>}
                            </>
                        )}
                    </div>

                    <button 
                        onClick={toggleDarkMode} 
                        style={{ background: 'var(--card-bg)', border: '1px solid var(--glass-border)', padding: '10px', borderRadius: '50%', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--card-bg)', padding: '6px 12px', borderRadius: '50px', boxShadow: 'var(--shadow-soft)', border: '1px solid var(--glass-border)' }}>
                                <User size={14} color="var(--primary-purple)" />
                                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{user.name}</span>
                            </div>
                            <button onClick={logout} style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/auth" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Login</Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div style={{ display: 'none' }} className="mobile-toggle">
                    <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: 'var(--text-main)', marginRight: '1rem' }}>
                        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)' }}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (
                <div style={{ 
                    position: 'absolute', 
                    top: '100%', 
                    left: 0, 
                    width: '100%', 
                    background: 'var(--card-bg)', 
                    padding: '2rem', 
                    borderBottom: '1px solid var(--glass-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-soft)'
                }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '1.2rem' }}>Home</Link>
                    <a href="#footer" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '1.2rem' }}>Contact</a>
                    {user ? (
                        <>
                            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '1.2rem' }}>Dashboard</Link>
                            {user.role === 'admin' && <Link to="/admin" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '1.2rem' }}>Admin</Link>}
                            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ fontWeight: 700 }}>{user.name}</span>
                                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="btn-primary" style={{ width: '100%' }}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="btn-primary">Login</Link>
                    )}
                </div>
            )}

            <style>{`
                @media (max-width: 968px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: flex !important; align-items: center; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
