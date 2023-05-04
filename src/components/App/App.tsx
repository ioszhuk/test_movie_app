import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoadingBoundary} from '../LoadingBoundary/LoadingBoundary';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {ErrorBoundary} from '../ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailPage = lazy(() => import('../../pages/MovieDetailPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App = () => {
  console.log('ENV', process.env);
  console.log('ENV_BASE', process.env.REACT_APP_API_BASE_URL);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingBoundary />}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<MovieDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
