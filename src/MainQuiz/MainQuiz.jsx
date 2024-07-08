import { useState, useEffect } from 'react';
import Game from '../Game/Game';
import Message from '../Message/Message';
import ResultPage from '../pages/ResultPage/ResultPage';
import { useNavigate } from 'react-router-dom';
import css from './MainQuiz.module.css';

const questions = [
  {
    id: 1,
    title: 'Реакт це...?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    id: 2,
    title: 'Компонент це...?',
    variants: ['додаток', 'частина', 'бібліотека'],
    correct: 0,
  },
  {
    id: 3,
    title: 'Що таке UseState?',
    variants: ['компонент', 'блок', 'хук реакту'],
    correct: 0,
  },
];

export default function MainQuiz({ initialQuestionId }) {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const initialStep = questions.findIndex(q => q.id === initialQuestionId);
    if (initialStep !== -1) {
      setStep(initialStep);
    }
  }, [initialQuestionId]);

  const question = questions[step];

  const getRandomMessage = messages => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const onClickVariant = index => {
    console.log('Clicked index:', index);
    console.log('Correct answer index:', question.correct);

    let updatedCorrect = correct;

    if (index === question.correct) {
      updatedCorrect += 1;
      setIsCorrect(true);
      setMessage(
        getRandomMessage(['GREAT!!!😁', 'AMAZING!🥳', 'EXCELLENT!🤓'])
      );
      console.log('total:', updatedCorrect);
    } else {
      setIsCorrect(false);
      setMessage(
        getRandomMessage([
          'Try next time 😔',
          'Wrong...',
          `Oops, not correct`,
          "Oh no, that's wrong😩",
        ])
      );
    }

    const nextStep = step + 1;

    setTimeout(() => {
      if (nextStep < questions.length) {
        setCorrect(updatedCorrect);
        setStep(nextStep);
        navigate(`/test/${questions[nextStep].id}`);
      } else {
        navigate('/result', { state: { updatedCorrect, questions } });
      }
      setMessage(null);
    }, 2000);
  };
  return (
    <div className={css.mainContainer}>
      {message && <div className={css.overlay}></div>}
      {step !== questions.length ? (
        <>
          <Game
            questions={questions}
            question={question}
            onClickVariant={onClickVariant}
            step={step}
          />
          {message && (
            <Message
              message={message}
              correct={isCorrect}
              onClose={() => setMessage(null)}
            />
          )}
        </>
      ) : (
        <ResultPage />
      )}
    </div>
  );
}
