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
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ maxWidth: '400px', width: '90%', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Purchase {selectedCourse}</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-dim)' }}>Please contact the administrator to complete your payment and activate your course.</p>
                        
                        <div style={{ textAlign: 'left', background: 'var(--bg-main)', padding: '1.5rem', borderRadius: '24px', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
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
                            <div className="badge floating" style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary-purple)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                <Sparkles size={14} /> The Future of Mindfulness
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1.5rem' }}>
                                <span style={{ fontStyle: 'italic' }}>Master</span> Your <span className="gradient-text">Mindset</span>,<br/> <span style={{ fontStyle: 'italic' }}>Elevate</span> Your <span className="gradient-text">Life</span>
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', maxWidth: '550px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                Aura Flow combines ancient wisdom with modern technology to provide you with a seamless meditation experience. Join live sessions and track your spiritual growth.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                                <a href="#courses" className="btn-primary">Get Unlimited Access</a>
                                <Link to={user ? "/dashboard" : "/auth"} className="btn-primary secondary-btn">
                                    <Play size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} fill="var(--primary-blue)" />
                                    Explore Platform
                                </Link>
                            </div>
                        </div>

                        {/* Soul Graphic */}
                        <div className="soul-wrapper">
                            <div className="soul-container">
                                <div className="soul-layer layer-1"></div>
                                <div className="soul-layer layer-2"></div>
                                <div className="soul-layer layer-3"></div>
                                <div className="soul-layer layer-4"></div>
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
            <section className="container stats-section">
                <div className="glass-card stats-grid">
                    <div className="stat-item">
                        <div className="stat-value">10K+</div>
                        <div className="stat-label">Active Meditators</div>
                    </div>
                    <div className="stat-item border-x">
                        <div className="stat-value">500+</div>
                        <div className="stat-label">Live Classes</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">4.9/5</div>
                        <div className="stat-label">Rating</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title"><span style={{ fontStyle: 'italic' }}>Why</span> Aura Flow?</h2>
                    <p className="section-subtitle">We provide the tools and guidance you need to make mindfulness a permanent part of your life.</p>
                </div>

                <div className="features-grid">
                    <div className="glass-card feature-card">
                        <div className="icon-box purple-bg">
                            <Video color="var(--primary-purple)" />
                        </div>
                        <h3>Live Interaction</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Connect with world-class mentors in real-time. Ask questions and find clarity.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box blue-bg">
                            <Trophy color="var(--primary-blue)" />
                        </div>
                        <h3>Progress Tracking</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Visualize your journey with our advanced progression dashboard.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box cyan-bg">
                            <Users color="var(--primary-blue)" />
                        </div>
                        <h3>Global Community</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Join a supportive network of individuals on the same spiritual path.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="icon-box pink-bg">
                            <Zap color="#ec4899" />
                        </div>
                        <h3>Daily Affirmations</h3>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Start every morning with powerful thoughts designed to manifest success.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section style={{ background: 'var(--bg-main)', padding: '100px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <div className="how-it-works-grid">
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Simple Steps to <span className="gradient-text">Inner Peace</span></h2>
                            <div className="step-item">
                                <div className="step-number">01</div>
                                <div>
                                    <h4>Choose Your Path</h4>
                                    <p style={{ color: 'var(--text-dim)' }}>Select a subscription plan that fits your schedule and goals.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">02</div>
                                <div>
                                    <h4>Contact for Access</h4>
                                    <p style={{ color: 'var(--text-dim)' }}>Reach out to our admin to finalize your premium activation.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">03</div>
                                <div>
                                    <h4>Start Meditating</h4>
                                    <p style={{ color: 'var(--text-dim)' }}>Join the live sessions and watch your transformation unfold.</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card mockup-container">
                            <div className="mockup-content">
                                <div className="floating-ui">
                                    <div className="glass-card" style={{ width: '220px', padding: '1.2rem' }}>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--primary-purple)' }}></div>
                                            <div>
                                                <div style={{ fontWeight: 800, fontSize: '0.8rem' }}>Live Now</div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>452 Participants</div>
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
            <section id="courses" className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Manifest Your Reality</h2>
                    <p className="section-subtitle">Start your journey with our specialized manifestation tracks.</p>
                </div>
                
                <div className="courses-grid">
                    <div className="glass-card course-card">
                        <div className="course-icon blue-bg">
                            <Compass color="var(--primary-blue)" size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.6rem' }}>Job Manifestation</h3>
                        <p style={{ margin: '1rem 0', color: 'var(--text-dim)', minHeight: '60px' }}>Attract your dream career and professional success through guided intent.</p>
                        <div className="price-tag">$99<span>/mo</span></div>
                        <button className="btn-primary" style={{ width: '100%' }} onClick={() => handleBuyClick("Job Manifestation")}>Enroll Now</button>
                    </div>

                    <div className="glass-card course-card popular">
                        <div className="popular-badge">MOST POPULAR</div>
                        <div className="course-icon purple-bg">
                            <Zap color="var(--primary-purple)" size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.6rem' }}>Money Magnet</h3>
                        <p style={{ margin: '1rem 0', color: 'var(--text-dim)', minHeight: '60px' }}>Align your frequency with abundance and financial freedom.</p>
                        <div className="price-tag">$99<span>/mo</span></div>
                        <button className="btn-primary" style={{ width: '100%' }} onClick={() => handleBuyClick("Money Magnet")}>Activate Abundance</button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container" style={{ paddingBottom: '100px' }}>
                <div className="testimonials-grid">
                    <div className="glass-card testimonial">
                        <MessageCircle style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }} size={24} />
                        <p>"ZenFlow has completely changed my morning routine. The live sessions make me feel like I'm part of something bigger."</p>
                        <div className="testimonial-author">- Sarah Jenkins</div>
                    </div>
                    <div className="glass-card testimonial">
                        <MessageCircle style={{ marginBottom: '1rem', color: 'var(--primary-purple)' }} size={24} />
                        <p>"The progression tracking is addictive! Seeing my 'streak' grow keeps me motivated even on busy days."</p>
                        <div className="testimonial-author">- Michael Chen</div>
                    </div>
                </div>
            </section>

            <footer id="footer" style={{ background: 'var(--card-bg)', padding: '80px 0', borderTop: '1px solid var(--glass-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Aura Flow</div>
                    <p style={{ color: 'var(--text-dim)', margin: '0 auto 2rem', maxWidth: '600px' }}>Elevating your spiritual journey through guided meditation, real-time connection, and advanced growth metrics.</p>
                    
                    <div className="glass-card footer-info">
                        <div>
                            <div className="info-title">Administrator</div>
                            <div>{adminContact.name}</div>
                        </div>
                        <div className="info-divider"></div>
                        <div>
                            <div className="info-title">Direct Reach</div>
                            <div>{adminContact.phone}</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{adminContact.email}</div>
                        </div>
                    </div>

                    <div className="footer-socials">
                        <a href="#" className="footer-link">Instagram</a>
                        <a href="#" className="footer-link">LinkedIn</a>
                        <a href="#" className="footer-link">Support</a>
                    </div>
                </div>
            </footer>

            <style>{`
                .home-container {
                    overflow-x: hidden;
                    width: 100%;
                }
                .hero {
                    padding-top: 140px;
                    padding-bottom: 60px;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                }
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 3rem;
                    align-items: center;
                }
                .hero-content {
                    z-index: 10;
                }
                .secondary-btn {
                    background: var(--card-bg) !important;
                    color: var(--text-main) !important;
                    box-shadow: var(--shadow-soft) !important;
                    border: 1px solid var(--glass-border) !important;
                }
                .soul-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 400px;
                    position: relative;
                }
                .soul-container {
                    width: 320px;
                    height: 320px;
                    position: relative;
                    animation: float-main 20s infinite ease-in-out;
                }
                .soul-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    filter: blur(40px);
                    opacity: 0.6;
                    animation: breathe 12s infinite ease-in-out;
                }
                .layer-1 { background: radial-gradient(circle, #4f46e5 0%, transparent 70%); }
                .layer-2 { background: radial-gradient(circle, #7c3aed 0%, transparent 70%); animation-delay: -3s; }
                .layer-3 { background: radial-gradient(circle, #2563eb 0%, transparent 70%); animation-delay: -6s; }
                .layer-4 { background: radial-gradient(circle, #ec4899 0%, transparent 70%); animation-delay: -9s; }
                
                .soul-core {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100px; height: 100px;
                    background: radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%);
                    border-radius: 50%;
                    filter: blur(20px);
                    animation: pulse-core 5s infinite ease-in-out;
                }
                .soul-aura {
                    position: absolute;
                    top: -10%; left: -10%;
                    width: 120%; height: 120%;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    animation: rotate-aura 30s linear infinite;
                }
                .section-padding { padding: 100px 0; }
                .section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 1rem; }
                .section-subtitle { color: var(--text-dim); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }
                
                .stats-section { margin-top: -40px; position: relative; z-index: 20; }
                .stats-grid { 
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    text-align: center; 
                    padding: 2.5rem !important;
                }
                .stat-value { font-size: 2.2rem; font-weight: 800; }
                .stat-label { color: var(--text-dim); font-size: 0.9rem; font-weight: 600; }
                .border-x { border-left: 1px solid var(--glass-border); border-right: 1px solid var(--glass-border); }

                .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
                .feature-card { transition: transform 0.3s ease; }
                .icon-box { width: 50px; height: 50px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
                .purple-bg { background: rgba(124, 58, 237, 0.1); }
                .blue-bg { background: rgba(59, 130, 246, 0.1); }
                .cyan-bg { background: rgba(6, 182, 212, 0.1); }
                .pink-bg { background: rgba(236, 72, 153, 0.1); }

                .how-it-works-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
                .step-item { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
                .step-number { font-size: 1.5rem; font-weight: 800; color: var(--primary-purple); opacity: 0.3; }
                .mockup-container { background: var(--bg-main) !important; padding: 1rem !important; height: 400px; border: 1px solid var(--glass-border); }
                .mockup-content { 
                    width: 100%; height: 100%; 
                    background: var(--gradient-pill); 
                    border-radius: 20px; 
                    display: flex; align-items: center; justify-content: center; 
                    opacity: 0.8;
                }

                .courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; max-width: 900px; margin: 0 auto; }
                .course-card { text-align: center; padding: 3rem 2rem !important; }
                .popular { border: 2px solid var(--primary-purple) !important; position: relative; z-index: 2; }
                .popular-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--primary-purple); color: white; padding: 5px 15px; borderRadius: 50px; fontSize: 0.75rem; fontWeight: 800; }
                .course-icon { width: 50px; height: 50px; border-radius: 15px; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; }
                .price-tag { font-size: 3rem; font-weight: 800; margin-bottom: 2rem; }
                .price-tag span { font-size: 1rem; color: var(--text-dim); }

                .testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .testimonial p { font-style: italic; color: var(--text-main); font-size: 1.05rem; }
                .testimonial-author { margin-top: 1.5rem; font-weight: 800; font-size: 0.9rem; }

                .footer-info { 
                    max-width: 500px; margin: 0 auto 2.5rem !important; 
                    padding: 1.5rem !important; 
                    display: flex; justify-content: space-around; align-items: center;
                    text-align: left;
                }
                .info-title { font-weight: 800; color: var(--primary-purple); font-size: 0.8rem; margin-bottom: 0.3rem; }
                .info-divider { width: 1px; height: 40px; background: var(--glass-border); }
                .footer-socials { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; }
                .footer-link { color: var(--text-main); text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: color 0.3s ease; }
                .footer-link:hover { color: var(--primary-purple); }

                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr; text-align: center; }
                    .hero-content { display: flex; flex-direction: column; align-items: center; }
                    .hero-content h1 { text-align: center; }
                    .soul-wrapper { height: 350px; }
                    .how-it-works-grid { grid-template-columns: 1fr; gap: 3rem; }
                }

                @media (max-width: 768px) {
                    .hero { padding-top: 120px; }
                    .stats-grid { grid-template-columns: 1fr; gap: 1.5rem; }
                    .border-x { border: none; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); padding: 1.5rem 0; }
                    .soul-wrapper { display: none; }
                    .testimonials-grid { grid-template-columns: 1fr; }
                    .footer-info { flex-direction: column; gap: 1.5rem; text-align: center; }
                    .info-divider { display: none; }
                }

                @keyframes float-main {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes breathe {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.1); opacity: 0.7; }
                }
                @keyframes pulse-core {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.2); opacity: 0.9; }
                }
                @keyframes rotate-aura {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );

};

export default Home;
