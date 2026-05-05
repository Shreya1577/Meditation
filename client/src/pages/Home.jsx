import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Compass, Play, ShieldCheck, Heart, Sparkles, Zap, Users, Trophy, MessageCircle, Video } from 'lucide-react';

const Home = () => {
    const { user } = React.useContext(AuthContext);
    const [showContact, setShowContact] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

    const adminContact = {
        name: "Abhinav Bharti",
        phone: "+91 6207886079",
        email: "onlifegoes017@gmail.com",
        linkedin: "Abhinav Bharti",
        instagram: "@abhinav_bharti"
    };

    const handleBuyClick = (course) => {
        setSelectedCourse(course);
        setShowContact(true);
    };

    return (
        <div className="home-container">
            {showContact && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ maxWidth: '400px', width: '90%', textAlign: 'center', background: 'white' }}>
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Purchase {selectedCourse}</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-dim)' }}>Please contact the administrator to complete your payment and activate your course.</p>
                        
                        <div style={{ textAlign: 'left', background: '#f8fafc', padding: '1.5rem', borderRadius: '24px', marginBottom: '2rem' }}>
                            <div style={{ marginBottom: '10px' }}><strong>Administrator:</strong> {adminContact.name}</div>
                            <div style={{ marginBottom: '10px' }}><strong>Phone:</strong> {adminContact.phone}</div>
                            <div style={{ marginBottom: '10px' }}><strong>Email:</strong> {adminContact.email}</div>
                            <div style={{ marginBottom: '10px' }}><strong>Instagram:</strong> {adminContact.instagram}</div>
                            <div><strong>LinkedIn:</strong> {adminContact.linkedin}</div>
                        </div>

                        <button className="btn-primary" onClick={() => setShowContact(false)} style={{ width: '100%' }}>Close</button>
                    </div>
                </div>
            )}
            
            {/* Hero Section */}
            <header className="hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="hero-grid">
                        <div className="hero-content">
                            <div className="badge floating" style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary-purple)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                                <Sparkles size={14} /> The Future of Mindfulness
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1.5rem' }}>
                                <span style={{ fontStyle: 'italic' }}>Master</span> Your <span className="gradient-text">Mindset</span>,<br/> <span style={{ fontStyle: 'italic' }}>Elevate</span> Your <span className="gradient-text">Life</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', maxWidth: '550px', marginBottom: '3rem', lineHeight: 1.6 }}>
                                Aura Flow combines ancient wisdom with modern technology to provide you with a seamless meditation experience. Join live sessions and track your spiritual growth.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="#courses" className="btn-primary">Get Unlimited Access</a>
                                <Link to={user ? "/dashboard" : "/auth"} className="btn-primary" style={{ background: 'white', color: 'var(--text-main)', boxShadow: 'var(--shadow-soft)' }}>
                                    <Play size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} fill="var(--primary-blue)" />
                                    Explore the Platform
                                </Link>
                            </div>
                        </div>

                        {/* Soul Graphic */}
                        <div className="soul-wrapper">
                            <div className="soul-container">
                                <div className="soul-layer layer-1" style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', opacity: 0.9, filter: 'blur(40px) saturate(2)' }}></div>
                                <div className="soul-layer layer-2" style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', opacity: 0.8, filter: 'blur(45px) saturate(2)' }}></div>
                                <div className="soul-layer layer-3" style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', opacity: 0.8, filter: 'blur(50px) saturate(2)' }}></div>
                                <div className="soul-layer layer-4" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', opacity: 0.7, filter: 'blur(55px) saturate(2)' }}></div>
                                <div className="soul-core" style={{ zIndex: 5 }}></div>
                                <div className="soul-text" style={{ position: 'absolute', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                                    <span style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontStyle: 'italic', fontWeight: 700, letterSpacing: '4px', textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,1)' }}>Breathe</span>
                                </div>
                                <div className="soul-aura"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats/Social Proof */}
            <section className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: 3 }}>
                <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center', padding: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>10K+</div>
                        <div style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Active Meditators</div>
                    </div>
                    <div style={{ borderLeft: '1px solid var(--glass-border)', borderRight: '1px solid var(--glass-border)' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>500+</div>
                        <div style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Live Classes Monthly</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>4.9/5</div>
                        <div style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Average Rating</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container" style={{ padding: '120px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 500, marginBottom: '1.5rem' }}><span style={{ fontStyle: 'italic' }}>Why</span> Aura Flow?</h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>We provide the tools and guidance you need to make mindfulness a permanent part of your life.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    <div className="glass-card feature-card">
                        <div className="icon-box" style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                            <Video color="var(--primary-purple)" />
                        </div>
                        <h3>Live Interaction</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Connect with world-class mentors in real-time. Ask questions and find clarity.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                            <Trophy color="var(--primary-blue)" />
                        </div>
                        <h3>Progress Tracking</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Visualize your journey with our advanced progression dashboard.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box" style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                            <Users color="var(--accent-cyan)" />
                        </div>
                        <h3>Global Community</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Join a supportive network of individuals on the same spiritual path.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box" style={{ background: 'rgba(236, 72, 153, 0.1)' }}>
                            <Zap color="#ec4899" />
                        </div>
                        <h3>Daily Affirmations</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Start every morning with powerful thoughts designed to manifest success.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section style={{ background: '#f8fafc', padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>Simple Steps to <span className="gradient-text">Inner Peace</span></h2>
                            <div className="step-item">
                                <div className="step-number">01</div>
                                <div>
                                    <h4>Choose Your Path</h4>
                                    <p>Select a subscription plan that fits your schedule and goals.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">02</div>
                                <div>
                                    <h4>Contact for Access</h4>
                                    <p>Reach out to our admin to finalize your premium activation.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">03</div>
                                <div>
                                    <h4>Start Meditating</h4>
                                    <p>Join the live sessions and watch your transformation unfold.</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card" style={{ background: 'white', padding: '1rem', borderRadius: '40px' }}>
                            <div style={{ width: '100%', height: '500px', background: 'var(--bg-gradient)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="floating-ui">
                                    <div className="glass-card" style={{ width: '250px', background: 'white', padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-purple)' }}></div>
                                            <div>
                                                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Live Now</div>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>452 Participants</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="container" style={{ padding: '120px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Manifest Your Reality</h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>Start your journey with our specialized manifestation tracks.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2.5rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <Compass color="var(--primary-blue)" size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem' }}>Job Manifestation</h3>
                        <p style={{ margin: '1.5rem 0', color: 'var(--text-dim)', minHeight: '60px' }}>Attract your dream career and professional success through guided intent.</p>
                        <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>$99<span style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>/mo</span></div>
                        <button className="btn-primary" style={{ width: '100%' }} onClick={() => handleBuyClick("Job Manifestation")}>Enroll Now</button>
                    </div>

                    <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2.5rem', border: '2px solid var(--primary-purple)', position: 'relative', background: 'white' }}>
                        <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-purple)', color: 'white', padding: '8px 25px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1px' }}>MOST POPULAR</div>
                        <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <Zap color="var(--primary-purple)" size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem' }}>Money Magnet</h3>
                        <p style={{ margin: '1.5rem 0', color: 'var(--text-dim)', minHeight: '60px' }}>Align your frequency with abundance and financial freedom.</p>
                        <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>$99<span style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>/mo</span></div>
                        <button className="btn-primary" style={{ width: '100%' }} onClick={() => handleBuyClick("Money Magnet")}>Activate Abundance</button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container" style={{ paddingBottom: '120px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="glass-card" style={{ background: 'white' }}>
                        <MessageCircle style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }} />
                        <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.1rem' }}>"ZenFlow has completely changed my morning routine. The live sessions make me feel like I'm part of something bigger."</p>
                        <div style={{ marginTop: '2rem', fontWeight: 800 }}>- Sarah Jenkins</div>
                    </div>
                    <div className="glass-card" style={{ background: 'white' }}>
                        <MessageCircle style={{ marginBottom: '1.5rem', color: 'var(--primary-purple)' }} />
                        <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.1rem' }}>"The progression tracking is addictive! Seeing my 'streak' grow keeps me motivated even on busy days."</p>
                        <div style={{ marginTop: '2rem', fontWeight: 800 }}>- Michael Chen</div>
                    </div>
                </div>
            </section>

            <footer id="footer" style={{ background: 'white', padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Aura Flow</div>
                    <p style={{ color: 'var(--text-dim)', margin: '0 auto 2rem', maxWidth: '600px', fontSize: '1.1rem' }}>Elevating your spiritual journey through guided meditation, real-time connection, and advanced growth metrics.</p>
                    
                    <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto 3rem', background: '#f8fafc', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        <div>
                            <div style={{ fontWeight: 800, color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>Administrator</div>
                            <div>{adminContact.name}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 800, color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>Direct Reach</div>
                            <div>{adminContact.phone}</div>
                            <div style={{ fontSize: '0.9rem' }}>{adminContact.email}</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
                        <a href="#" className="footer-link">Instagram: {adminContact.instagram}</a>
                        <a href="#" className="footer-link">LinkedIn: {adminContact.linkedin}</a>
                        <a href="#" className="footer-link">Support</a>
                    </div>
                </div>
            </footer>

            <style>{`
                .hero {
                    padding-top: 140px;
                    padding-bottom: 80px;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                    text-align: left;
                }

                @media (max-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 2rem;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-content p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .hero-content h1 {
                        text-align: center;
                    }
                }
                
                .soul-wrapper {
                    position: relative;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .soul-container {
                    position: relative;
                    width: 380px;
                    height: 380px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: float-main 20s infinite ease-in-out;
                }

                .soul-layer {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(50px);
                    opacity: 0.5;
                    mix-blend-mode: screen;
                    animation: breathe 12s infinite ease-in-out;
                }

                .layer-1 {
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
                    animation-delay: 0s;
                }

                .layer-2 {
                    width: 95%;
                    height: 95%;
                    background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
                    animation-delay: -3s;
                    animation-duration: 9s;
                }

                .layer-3 {
                    width: 90%;
                    height: 90%;
                    background: radial-gradient(circle, #ec4899 0%, transparent 70%);
                    animation-delay: -6s;
                    animation-duration: 11s;
                }

                .layer-4 {
                    width: 85%;
                    height: 85%;
                    background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
                    animation-delay: -9s;
                    animation-duration: 7s;
                }

                .soul-core {
                    position: absolute;
                    width: 140px;
                    height: 140px;
                    background: radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%);
                    border-radius: 50%;
                    filter: blur(30px);
                    opacity: 0.9;
                    z-index: 5;
                    animation: pulse-core 5s infinite ease-in-out;
                    box-shadow: 0 0 60px rgba(255, 255, 255, 0.4);
                }

                .soul-aura {
                    position: absolute;
                    width: 110%;
                    height: 110%;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    animation: rotate-aura 30s linear infinite;
                }

                @keyframes breathe {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.3; }
                    33% { transform: scale(1.15) translate(15px, -15px); opacity: 0.5; }
                    66% { transform: scale(0.85) translate(-15px, 15px); opacity: 0.4; }
                }

                @keyframes pulse-core {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.3); opacity: 0.8; }
                }

                @keyframes float-main {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes rotate-aura {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .floating {
                    animation: subtleFloat 3s infinite ease-in-out;
                }
                @keyframes subtleFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .icon-box {
                    width: 60px;
                    height: 60px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
                .feature-card h3 {
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                .step-item {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 2.5rem;
                }
                .step-number {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--primary-purple);
                    opacity: 0.3;
                }
                .step-item h4 {
                    font-size: 1.3rem;
                    margin-bottom: 0.5rem;
                }
                .footer-link {
                    color: var(--text-main);
                    text-decoration: none;
                    font-weight: 700;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: var(--primary-purple);
                }
                .floating-ui {
                    animation: bounce 6s infinite ease-in-out;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(2deg); }
                }
            `}</style>
        </div>
    );
};

export default Home;
