import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import { AuthContext } from './context/AuthContext';

function App() {
    const { user, loading } = React.useContext(AuthContext);

    if (loading) return <div className="loading">Loading Aura Flow...</div>;

    return (
        <Router>
            <BackgroundEffects />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/auth" />} />
                <Route path="/admin" element={user?.role === 'admin' ? <Admin /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
