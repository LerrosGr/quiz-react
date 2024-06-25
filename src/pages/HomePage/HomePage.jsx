import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <FaReact size={50} color="#61dafb" />
        <p className={css.text}>React</p>
      </div>

      <h1 className={css.title}>
        Welcome, friend! <br />
        Ready to start testing?
      </h1>
      <Link className={css.link} to="/test">
        Start testing
      </Link>
    </div>
  );
}
