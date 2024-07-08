import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainQuiz from '../../MainQuiz/MainQuiz';
import TextOverlay from '../../TextOverlay/TextOverlay';

import css from './TestPage.module.css';

export default function TestPage() {
  const { questionId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={css.pageContent + (isVisible ? ` ${css.visible}` : '')}>
      <TextOverlay />
      <MainQuiz initialQuestionId={parseInt(questionId, 10)} />
    </div>
  );
}
