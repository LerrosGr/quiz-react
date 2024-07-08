import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLoader from './MainLoader/MainLoader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage'));
const ResultPage = lazy(() => import('./pages/ResultPage/ResultPage'));

function App() {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test/:questionId" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
