import css from './Game.module.css';

export default function Game({
  questions,
  question: { title, variants },
  onClickVariant,
  step,
}) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className={css.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={css.progressColor}
        ></div>
      </div>
      <h1 className={css.title}>{title}</h1>
      <ul className={css.list}>
        {variants.map((variant, index) => (
          <li
            className={css.item}
            onClick={() => {
              onClickVariant(index);
            }}
            key={variant}
          >
            <p className={css.text}> {variant}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
