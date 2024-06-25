import css from './Result.module.css';
import { Link } from 'react-router-dom';
import image from '../../images/win.png';

export default function Result({ correct, questions }) {
  return (
    <>
      <img src={image} alt="win" width={200} height={200} />
      <h2>
        You guessed {correct}/{questions.length}
      </h2>
      <Link to="/" className={css.button}>
        Try again
      </Link>
    </>
  );
}
