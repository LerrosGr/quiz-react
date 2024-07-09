import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import css from './Message.module.css';

export default function Message({ message, onClose, correct }) {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    let confettiTimeout;

    if (correct) {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });

      confettiTimeout = setTimeout(() => {
        confetti.reset();
      }, 2000);
    }

    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimeout);
      confetti.reset();
    };
  }, [onClose, correct]);

  return (
    <div className={css.overlay}>
      <p className={`${css.message} ${css.show}`}>{message}</p>
    </div>
  );
}
