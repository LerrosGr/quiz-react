import { useMemo } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import css from './TextOverlay.module.css';

const TextOverlay = () => {
  const wordCount = useMemo(() => {
    if (isMobile) return 60;
    if (isTablet) return 100;
    return 250;
  }, []);

  const words = useMemo(() => {
    return new Array(wordCount).fill('React').map(() => {
      const fontSize = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      return { fontSize, opacity, top, left };
    });
  }, [wordCount]);

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
