import React from 'react';

const StreakCounter = () => {
  return (
    <div style={{
      padding: '15px',
      backgroundColor: 'var(--color-success)',
      borderRadius: 'var(--radius)',
      textAlign: 'center',
      margin: '20px 0',
      boxShadow: 'var(--shadow-card)'
    }}>
      <p style={{ 
        margin: 0, 
        color: 'white', 
        fontWeight: '500',
        fontSize: '1.1rem'
      }}>
        🔥 Текущая серия: <strong>3 дня подряд!</strong>
      </p>
      <p style={{
        margin: '5px 0 0 0',
        color: 'rgba(255,255,255,0.9)',
        fontSize: '0.9rem'
      }}>
        Не пропусти завтрашнюю запись!
      </p>
    </div>
  );
};

export default StreakCounter;