import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User, Mail, Lock, Sparkles } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login, register } = React.useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await login(formData.email, formData.password);
            } else {
                await register(formData.name, formData.email, formData.password);
            }
        } catch (err) {
            alert(err.response?.data?.message || 'Authentication failed');
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '14px 14px 14px 44px',
        borderRadius: '16px',
        background: 'var(--bg-main)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-main)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    };

    const iconStyle = {
        position: 'absolute',
        left: '14px',
        top: '15px',
        color: 'var(--primary-purple)',
        opacity: 0.6
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '480px', padding: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--gradient-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'white' }}>
                        <Sparkles size={30} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>{isLogin ? 'Welcome Back' : 'Join Aura Flow'}</h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem' }}>{isLogin ? 'Continue your spiritual journey' : 'Start your transformation today'}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={iconStyle} />
                                <input 
                                    type="text" 
                                    placeholder="Enter your name"
                                    style={inputStyle}
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                        </div>
                    )}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={iconStyle} />
                            <input 
                                type="email" 
                                placeholder="name@example.com"
                                style={inputStyle}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={iconStyle} />
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                style={inputStyle}
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                
                <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-dim)', fontWeight: 500 }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span 
                        style={{ color: 'var(--primary-purple)', cursor: 'pointer', fontWeight: 800 }}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );

};

export default Auth;
