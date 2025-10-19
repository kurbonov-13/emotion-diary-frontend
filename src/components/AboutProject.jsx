import React from 'react';

const AboutProject = () => {
  return (
    <div style={{
      padding: '20px',
      margin: '20px 0',
      backgroundColor: 'var(--color-surface)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)'
    }}>
      <h3 style={{ color: 'var(--color-accent)' }}>Emotion Diary</h3>
      <p><strong>Разработчики:</strong> Курбонов</p>
      <p><strong>Описание:</strong> Дневник для ежедневного отслеживания эмоционального состояния</p>
      <p><strong>Технологии:</strong> React, Vite, современный JavaScript</p>
      <p><strong>Особенности:</strong> Интуитивный интерфейс, анализ настроения, визуальная статистика</p>
    </div>
  );
};

export default AboutProject;
