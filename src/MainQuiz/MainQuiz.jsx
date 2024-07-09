import { useState, useEffect } from 'react';
import Game from '../Game/Game';
import Message from '../Message/Message';
import ResultPage from '../pages/ResultPage/ResultPage';
import { useNavigate } from 'react-router-dom';
import { questions } from '../questions';
import css from './MainQuiz.module.css';

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
      navigate(`/test/${questions[initialStep].id}`, { replace: true });
    }
  }, [initialQuestionId, navigate]);

  const question = questions[step];

  const getRandomMessage = messages => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const onClickVariant = index => {
    let updatedCorrect = correct;

    if (index === question.correct) {
      updatedCorrect += 1;
      setIsCorrect(true);
      setMessage(
        getRandomMessage([
          'GREAT!!!😁',
          'AMAZING!🥳',
          'EXCELLENT!🤓',
          'Well done! 🏆',
          'Impressive! 🌟',
          'Wonderful! 🎊',
        ])
      );
      console.log('total:', updatedCorrect);
    } else {
      setIsCorrect(false);
      setMessage(
        getRandomMessage([
          'Try next time 😔',
          'Wrong...',
          'Oops, not correct',
          "Oh no, that's wrong😩",
          'Try again!',
          "You'll get it next time!",
        ])
      );
    }

    const nextStep = step + 1;

    setTimeout(() => {
      if (nextStep < questions.length) {
        setCorrect(updatedCorrect);
        setStep(nextStep);
        navigate(`/test/${questions[nextStep].id}`, { replace: true });
      } else {
        navigate('/result', { state: { updatedCorrect, questions } });
      }
      setMessage(null);
    }, 2000);
  };
  return (
    <div className={css.mainContainer}>
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
