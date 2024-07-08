import Result from '../../Result/Result';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TextOverlay from '../../TextOverlay/TextOverlay';
import Loader from '../../Loader/Loader';
import css from './ResultPage.module.css';

export default function ResultPage() {
  const location = useLocation();
  const { updatedCorrect, questions } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);
  const [isResultVisible, setIsResultVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsResultVisible(true);
      }, 100);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TextOverlay />
          <div
            className={`${css.resultContainer} ${
              isResultVisible ? css.show : ''
            }`}
          >
            <div className={css.mainContainer}>
              <Result questions={questions} correct={updatedCorrect} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
