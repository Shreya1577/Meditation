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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {/* Live Class Section */}
                    <div className="glass-card" style={{ background: 'linear-gradient(135deg, white 0%, #f3f0ff 100%)', border: 'none', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(124, 58, 237, 0.05)', borderRadius: '50%' }}></div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Video size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem' }}>Live Practice</h3>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Join your peers in guided meditation.</p>
                                </div>
                            </div>
                            <span className="badge" style={{ background: '#ef4444', color: 'white' }}>LIVE NOW</span>
                        </div>

                        {user?.subscription?.isActive ? (
                            liveSession?.currentLink ? (
                                <div className="glass-card" style={{ background: 'white', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Evening Gratitude Session</h4>
                                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>With Senior Mentor • 45 Minutes</p>
                                    </div>
                                    <a href={liveSession.currentLink} target="_blank" rel="noreferrer" className="btn-primary">
                                        Join Session
                                    </a>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.5)', borderRadius: '24px' }}>
                                    <p style={{ color: 'var(--text-dim)' }}>The next live session starts at 08:00 PM.</p>
                                </div>
                            )
                        ) : (
                            <div style={{ textAlign: 'center', padding: '3.5rem 2rem', background: 'rgba(124, 58, 237, 0.05)', borderRadius: '24px', border: '1px dashed var(--primary-purple)' }}>
                                <p style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '1rem' }}>Premium Access Required</p>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Purchase a course and contact the admin to unlock live sessions.</p>
                                <a href="/#courses" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>Browse Courses</a>
                            </div>
                        )}

                        <div style={{ marginTop: '2.5rem' }}>
                            <div style={{ background: 'white', padding: '1.2rem 1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: 'var(--shadow-soft)' }}>
                                <Clock color="var(--primary-purple)" />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Evening Session</div>
                                    <div style={{ fontWeight: 800 }}>08:00 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 800 }}>Elevate Your Practice</h3>
                        <div className="reco-grid">
                            <div className="glass-card" style={{ background: 'white' }}>
                                <Star color="#f59e0b" fill="#f59e0b" style={{ marginBottom: '1rem' }} />
                                <h4>Deep Sleep Guided</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>Improve your rest quality tonight.</p>
                            </div>
                            <div className="glass-card" style={{ background: 'white' }}>
                                <Zap color="#3b82f6" fill="#3b82f6" style={{ marginBottom: '1rem' }} />
                                <h4>Focus Power</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>10-minute session for clarity.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-card" style={{ background: 'var(--gradient-pill)', color: 'white' }}>
                        <Award size={32} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zen Journey</h3>
                        <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>{daysActive}</div>
                        <p style={{ opacity: 0.8 }}>{daysActive === 1 ? 'Day active' : 'Days active'}</p>
                        <div style={{ marginTop: '2rem', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px' }}>
                            <div style={{ width: `${Math.min(100, (daysActive / 30) * 100)}%`, height: '100%', background: 'white', borderRadius: '10px', transition: 'width 0.8s ease' }}></div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ background: 'white' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Status Overview</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: user?.subscription?.isActive ? '#22c55e' : '#ef4444' }}></div>
                            <span style={{ fontWeight: 600 }}>{user?.subscription?.isActive ? 'Premium Member' : 'Free Account'}</span>
                        </div>
                        <button className="btn-primary" style={{ width: '100%', padding: '0.8rem' }}>Manage Plan</button>
                    </div>

                    <div className="glass-card" style={{ background: 'rgba(124, 58, 237, 0.03)', border: '1px dashed var(--primary-purple)' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary-purple)' }}>Support</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>Need help? Contact Abhinav Bharti.</p>
                        <div style={{ fontSize: '0.85rem' }}>
                            <strong>WhatsApp:</strong> +91 6207886079<br/>
                            <strong>Email:</strong> onlifegoes017@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
