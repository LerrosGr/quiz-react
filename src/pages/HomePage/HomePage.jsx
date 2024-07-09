import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={css.wrapper}>
        <FaReact color="#61dafb" className={css.iconLogo} />
        <p className={css.text}>React</p>
      </div>

      <h1 className={css.title}>
        Welcome, friend! <br />
        Ready to start testing?
      </h1>
      <Link className={css.link} to="/test/1">
        Start testing
      </Link>
    </>
  );
}
