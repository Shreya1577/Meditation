import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = React.useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav style={{ padding: '1.5rem 0', position: 'absolute', width: '100%', zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--gradient-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>A</div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--text-main)' }}>Aura Flow</span>
                </Link>

                <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '0.8rem 2.5rem', borderRadius: '50px', background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)' }}>
                    <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
                    <a href="#footer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
                    {user ? (
                        <>
                            <Link to="/dashboard" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Dashboard</Link>
                            {user.role === 'admin' && <Link to="/admin" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Admin</Link>}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', padding: '8px 16px', borderRadius: '50px', boxShadow: 'var(--shadow-soft)' }}>
                                    <User size={16} color="var(--primary-purple)" />
                                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{user.name}</span>
                                </div>
                                <button onClick={logout} style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                                    <LogOut size={20} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link to="/auth" className="btn-primary" style={{ padding: '0.6rem 2rem' }}>Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
