import React, {FC, lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoadingBoundary} from '../UI/LoadingBoundary/LoadingBoundary';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {ErrorBoundary} from '../UI/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailPage = lazy(() => import('../../pages/MovieDetailPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App: FC = () => {
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
