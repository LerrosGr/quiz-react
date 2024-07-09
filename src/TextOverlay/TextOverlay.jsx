import { useMemo } from 'react';
import css from './TextOverlay.module.css';

const TextOverlay = () => {
  const words = useMemo(() => {
    return new Array(250).fill('React').map(() => {
      const fontSize = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      return { fontSize, opacity, top, left };
    });
  }, []);

  return (
    <div className={css.textOverlay}>
      {words.map((word, index) => (
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
