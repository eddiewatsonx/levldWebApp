import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="floating-shapes" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
      {/* Orange Circle */}
      <div className="shape shape-orange" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FF6B00, #FFA500)',
        opacity: 0.6,
        filter: 'blur(80px)',
        animation: 'bubbleFloat1 12s ease-in-out infinite'
      }}></div>

      {/* Purple Circle */}
      <div className="shape shape-purple" style={{
        position: 'absolute',
        top: '60%',
        left: '70%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #6A00FF, #A855F7)',
        opacity: 0.6,
        filter: 'blur(80px)',
        animation: 'bubbleFloat2 14s ease-in-out infinite'
      }}></div>

      {/* Diagonal Lines */}
      <div className="lines" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 2px, transparent 2px, transparent 6px)',
        pointerEvents: 'none'
      }}></div>

      <style>{`
        @keyframes bubbleFloat1 {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(10px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleFloat2 {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(10px) translateX(-5px); }
          50% { transform: translateY(-10px) translateX(5px); }
          75% { transform: translateY(5px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingShapes;