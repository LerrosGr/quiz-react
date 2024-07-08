import { useRef } from 'react';
import css from './TextOverlay.module.css';

const TextOverlay = () => {
  const wordsRef = useRef([]);

  if (wordsRef.current.length === 0) {
    wordsRef.current = new Array(1000).fill('React').map(() => {
      const fontSize = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      return { fontSize, opacity, top, left };
    });
  }

  return (
    <div className={css.textOverlay}>
      {wordsRef.current.map((word, index) => (
        <span
          className={css.span}
          key={index}
          style={{
            fontSize: `${word.fontSize}em`,
            opacity: word.opacity,
            top: `${word.top}%`,
            left: `${word.left}%`,
          }}
        >
          React
        </span>
      ))}
    </div>
  );
};

export default TextOverlay;
