import React from 'react';

const BackgroundEffects = () => {
    // Generate big outlined circles
    const bigCircles = [
        { size: 400, top: '-10%', left: '-5%', color: 'rgba(74, 222, 128, 0.05)' },
        { size: 600, top: '40%', right: '-10%', color: 'rgba(124, 58, 237, 0.04)' },
        { size: 300, bottom: '5%', left: '15%', color: 'rgba(59, 130, 246, 0.05)' },
        { size: 500, top: '10%', right: '20%', color: 'rgba(74, 222, 128, 0.03)' }
    ];

    return (
        <div className="bg-effects-container">
            {/* Soft Blobs (Re-added but more subtle) */}
            <div style={{
                position: 'absolute', top: '10%', right: '5%', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(74, 222, 128, 0.05) 0%, transparent 70%)',
                filter: 'blur(100px)', pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute', bottom: '10%', left: '5%', width: '700px', height: '700px',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
                filter: 'blur(100px)', pointerEvents: 'none'
            }}></div>

            {/* Big Outlined Circles */}
            {bigCircles.map((circle, i) => (
                <div 
                    key={`big-${i}`}
                    className="big-circle"
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: circle.top,
                        left: circle.left,
                        right: circle.right,
                        bottom: circle.bottom,
                        borderColor: circle.color,
                        animationDelay: `${i * 2}s`
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundEffects;
