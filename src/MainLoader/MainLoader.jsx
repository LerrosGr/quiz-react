import css from './MainLoader.module.css';

export default function MainLoader() {
  return (
    <div className={css.load}>
      <p className={css.text}>Loading...</p>
    </div>
  );
}
