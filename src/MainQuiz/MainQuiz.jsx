import { useState } from 'react';
import Game from '../Game/Game';
import Result from '../Result/Result';

import css from './MainQuiz.module.css';

const questions = [
  {
    title: 'Реакт це...?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент це...?',
    variants: ['додаток', 'частина', 'бібліотека'],
    correct: 1,
  },
  {
    title: 'Що таке UseState?',
    variants: ['компонент', 'блок', 'хук реакту'],
    correct: 3,
  },
];

export default function MainQuiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = index => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className={css.mainContainer}>
      {step !== questions.length ? (
        <Game
          questions={questions}
          question={question}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}
