import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Users, Link as LinkIcon, CheckCircle, Trash2 } from 'lucide-react';

const Admin = () => {
    const [students, setStudents] = useState([]);
    const [link, setLink] = useState("");
    const [confirmModal, setConfirmModal] = useState({ show: false, userId: null, userName: '', type: '', courseName: 'Job Manifestation' });
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchStudents();
        fetchCurrentLink();
    }, []);

    const fetchStudents = async () => {
        try {
            const res = await axios.get('https://meditation-s0cf.onrender.com/api/admin/students', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStudents(res.data);
        } catch (err) {
            console.error("Error fetching students", err);
        }
    };

    const fetchCurrentLink = async () => {
        try {
            const res = await axios.get('https://meditation-s0cf.onrender.com/api/admin/live-link');
            setLink(res.data.currentLink);
        } catch (err) {
            console.error("Error fetching link", err);
        }
    };

    const handleUpdateLink = async () => {
        try {
            await axios.post('https://meditation-s0cf.onrender.com/api/admin/update-link', { link }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Link updated for all students!");
        } catch (err) {
            alert("Failed to update link");
        }
    };

    const requestApproval = (userId, userName, type) => {
        setConfirmModal({ show: true, userId, userName, type, courseName: 'Job Manifestation' });
    };

    const approveSubscription = async () => {
        const { userId, type, courseName } = confirmModal;
        try {
            await axios.post('https://meditation-s0cf.onrender.com/api/admin/approve-subscription', 
                { userId, type, durationDays: 30, courseName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchStudents();
            setConfirmModal({ show: false, userId: null, userName: '', type: '', courseName: 'Job Manifestation' });
            alert("Subscription approved successfully!");
        } catch (err) {
            alert("Failed to approve");
        }
    };

    const handleRevokeAccess = async (id, name) => {
        if (window.confirm(`Are you sure you want to remove access for ${name}?`)) {
            try {
                await axios.post(`https://meditation-s0cf.onrender.com/api/admin/revoke-access/${id}`, {}, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                fetchStudents();
                alert('Access removed successfully.');
            } catch (err) {
                alert('Failed to remove access: ' + (err.response?.data?.error || err.message));
            }
        }
    };

    return (
        <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh' }} className="container">
            {/* Confirmation Modal */}
            {confirmModal.show && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ maxWidth: '450px', width: '90%', textAlign: 'center', background: 'white', padding: '3rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <CheckCircle color="var(--primary-purple)" size={32} />
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>Confirm Access</h2>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Are you sure you want to grant <strong style={{ color: 'var(--text-main)' }}>{confirmModal.type.toUpperCase()}</strong> access to <strong style={{ color: 'var(--text-main)' }}>{confirmModal.userName}</strong>?
                        </p>
                        <select 
                            value={confirmModal.courseName} 
                            onChange={(e) => setConfirmModal({...confirmModal, courseName: e.target.value})}
                            style={{ width: '100%', padding: '10px', marginBottom: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}
                        >
                            <option value="Job Manifestation">Job Manifestation</option>
                            <option value="Money Magnet">Money Magnet</option>
                        </select>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setConfirmModal({ show: false, userId: null, userName: '', type: '', courseName: 'Job Manifestation' })} className="btn-primary" style={{ flex: 1, background: '#f1f5f9', color: 'var(--text-main)', boxShadow: 'none' }}>Cancel</button>
                            <button onClick={approveSubscription} className="btn-primary" style={{ flex: 1 }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 500 }}>Admin <span className="gradient-text" style={{ fontStyle: 'italic' }}>Control</span> Panel</h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Manage your community and live session energy.</p>
            </header>

            <div style={{ display: 'grid', gridTemplate_columns: '1fr 2.5fr', gap: '3rem' }}>
                {/* Link Controller */}
                <div className="glass-card" style={{ height: 'fit-content', padding: '2.5rem' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}>
                        <LinkIcon size={20} color="var(--primary-purple)" /> Live Session
                    </h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', color: 'var(--text-dim)' }}>Stream Link</label>
                        <input 
                            type="text" 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="https://zoom.us/j/..."
                            style={{ width: '100%', padding: '15px', borderRadius: '16px', background: 'white', border: '1px solid var(--glass-border)', color: 'var(--text-main)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}
                        />
                    </div>
                    <button onClick={handleUpdateLink} className="btn-primary" style={{ width: '100%', borderRadius: '16px' }}>Update Live Link</button>
                </div>

                {/* Student Management */}
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}>
                        <Users size={20} color="var(--primary-blue)" /> Manage Community
                    </h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 15px' }}>
                            <thead>
                                <tr style={{ textAlign: 'left' }}>
                                    <th style={{ padding: '0 1.5rem', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)' }}>Name</th>
                                    <th style={{ padding: '0 1.5rem', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)' }}>Email</th>
                                    <th style={{ padding: '0 1.5rem', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)' }}>Plan</th>
                                    <th style={{ padding: '0 1.5rem', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)' }}>Course</th>
                                    <th style={{ padding: '0 1.5rem', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student._id} style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                        <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600, borderRadius: '16px 0 0 16px' }}>{student.name}</td>
                                        <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>{student.email}</td>
                                        <td style={{ padding: '1.2rem 1.5rem' }}>
                                            <span style={{ 
                                                padding: '6px 12px', 
                                                borderRadius: '50px', 
                                                fontSize: '0.7rem', 
                                                fontWeight: 800,
                                                background: student.subscription?.isActive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                                                color: student.subscription?.isActive ? '#16a34a' : 'var(--text-dim)'
                                            }}>
                                                {student.subscription?.type?.toUpperCase() || 'NONE'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: 'var(--text-dim)' }}>
                                            {student.courseName || 'None'}
                                        </td>
                                        <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right', borderRadius: '0 16px 16px 0' }}>
                                            {!student.subscription?.isActive ? (
                                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                    <button onClick={() => requestApproval(student._id, student.name, 'monthly')} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', background: 'var(--primary-blue)' }}>+ Monthly</button>
                                                </div>
                                            ) : (
                                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                    <button onClick={() => handleRevokeAccess(student._id, student.name)} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', background: '#ef4444' }}>Remove Access</button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
