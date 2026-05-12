import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Video, Calendar, Clock, Award, Star, Zap, User } from 'lucide-react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [liveSession, setLiveSession] = useState(null);
    const [affirmation, setAffirmation] = useState("");

    const affirmations = [
        "Quiet the mind, and the soul will speak.",
        "Peace is within you, not in the world.",
        "Every breath is a new beginning.",
        "Your calm is your strength.",
        "The present moment is the only moment."
    ];

    useEffect(() => {
        setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
        
        const fetchLiveLink = async () => {
            try {
                const res = await axios.get('https://meditation-s0cf.onrender.com/api/admin/live-link');
                setLiveSession(res.data);
            } catch (err) {
                console.error("Error fetching live link", err);
            }
        };
        fetchLiveLink();
    }, []);

    const daysActive = user?.subscription?.isActive && user?.subscription?.startDate
        ? Math.max(1, Math.floor((new Date() - new Date(user.subscription.startDate)) / (1000 * 60 * 60 * 24)) + 1)
        : 0;

    return (
        <div style={{ paddingTop: '140px', paddingBottom: '100px' }} className="container">
            <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
                    Welcome back
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-1.5px' }}>
                    Namaste, <span className="gradient-text">{user?.name}</span>
                </h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginTop: '1rem' }}>"{affirmation}"</p>
            </header>

            <div className="dashboard-grid">
                {/* Main Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Live Class Section */}
                    <div className="glass-card" style={{ background: 'var(--glass-bg)', position: 'relative', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '50%' }}></div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Video size={22} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem' }}>Live Practice</h3>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Join the energy field.</p>
                                </div>
                            </div>
                            <span className="badge" style={{ background: '#ef4444', color: 'white', fontSize: '0.65rem' }}>LIVE NOW</span>
                        </div>

                        {user?.subscription?.isActive ? (
                            liveSession?.currentLink ? (
                                <div className="glass-card" style={{ background: 'var(--card-bg)', padding: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                                    <div>
                                        <h4 style={{ marginBottom: '0.3rem' }}>Evening Gratitude</h4>
                                        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Senior Mentor • 45m</p>
                                    </div>
                                    <a href={liveSession.currentLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                                        Join Now
                                    </a>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-main)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Next session starts at 08:00 PM.</p>
                                </div>
                            )
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem', background: 'rgba(124, 58, 237, 0.05)', borderRadius: '20px', border: '1px dashed var(--primary-purple)' }}>
                                <p style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.8rem' }}>Premium Access Required</p>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '1.2rem' }}>Activation required for live sessions.</p>
                                <a href="/#courses" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem' }}>View Courses</a>
                            </div>
                        )}

                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ background: 'var(--card-bg)', padding: '1rem 1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--glass-border)' }}>
                                <Clock size={18} color="var(--primary-purple)" />
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Evening Session</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>08:00 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                        <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 800 }}>Elevate Your Practice</h3>
                        <div className="reco-grid">
                            <div className="glass-card" style={{ background: 'var(--card-bg)', padding: '1.5rem' }}>
                                <Star color="#f59e0b" fill="#f59e0b" size={20} style={{ marginBottom: '0.8rem' }} />
                                <h4 style={{ fontSize: '1.1rem' }}>Deep Sleep</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>Improve rest tonight.</p>
                            </div>
                            <div className="glass-card" style={{ background: 'var(--card-bg)', padding: '1.5rem' }}>
                                <Zap color="#3b82f6" fill="#3b82f6" size={20} style={{ marginBottom: '0.8rem' }} />
                                <h4 style={{ fontSize: '1.1rem' }}>Focus Power</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>10m for clarity.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-card" style={{ background: 'var(--gradient-pill)', color: 'white', padding: '2rem' }}>
                        <Award size={28} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Zen Journey</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 800 }}>{daysActive}</div>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{daysActive === 1 ? 'Day active' : 'Days active'}</p>
                        <div style={{ marginTop: '1.5rem', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px' }}>
                            <div style={{ width: `${Math.min(100, (daysActive / 30) * 100)}%`, height: '100%', background: 'white', borderRadius: '10px', transition: 'width 0.8s ease' }}></div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ background: 'var(--card-bg)', padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Status Overview</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: user?.subscription?.isActive ? '#22c55e' : '#ef4444' }}></div>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{user?.subscription?.isActive ? 'Premium Member' : 'Free Account'}</span>
                        </div>
                        <button className="btn-primary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}>Manage Plan</button>
                    </div>

                    <div className="glass-card" style={{ background: 'var(--glass-bg)', border: '1px dashed var(--primary-purple)', padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.8rem', color: 'var(--primary-purple)', fontSize: '1rem' }}>Support</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.8rem' }}>Need help? Reach out.</p>
                        <div style={{ fontSize: '0.8rem' }}>
                            <strong>WA:</strong> +91 6207886079<br/>
                            <strong>Mail:</strong> onlifegoes017@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
