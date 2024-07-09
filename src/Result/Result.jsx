import css from './Result.module.css';
import { Link } from 'react-router-dom';
import imageWin from '../../images/win.png';
import imageLose from '../../images/sad.png';
import confetti from 'canvas-confetti';
import { useEffect, useCallback, useRef } from 'react';

export default function Result({ correct, questions }) {
  const animationFrameId = useRef(null);

  const correctPercentage = (correct / questions.length) * 100;

  const startFireworks = useCallback(() => {
    let count = 200;
    let defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  useEffect(() => {
    if (correctPercentage >= 60) {
      startFireworks();
    }

    const currentAnimationFrameId = animationFrameId.current;

    return () => {
      if (currentAnimationFrameId) {
        cancelAnimationFrame(currentAnimationFrameId);
      }
      confetti.reset();
    };
  }, [correctPercentage, startFireworks]);

  return (
    <div className={css.resultContainer}>
      {correctPercentage >= 60 ? (
        <img className={css.imageWin} src={imageWin} alt="win" />
      ) : (
        <img className={css.imageLose} src={imageLose} alt="lose" />
      )}

      <h2 className={css.title}>
        You guessed {correct}/{questions.length} (
        {`${Math.round(correctPercentage)}%`})
      </h2>
      <div className={css.linkContainer}>
        <Link to="/test/1" className={css.button}>
          Try again
        </Link>
        <Link to="/" className={css.linkHome}>
          Main page
        </Link>
      </div>
    </div>
  );
}
