import { Route, Routes } from 'react-router-dom';

// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const NotFound = lazy(() => import('../pages/NotFound'));

import MainPage from '../../pages/MainPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import NotFound from '../../pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
