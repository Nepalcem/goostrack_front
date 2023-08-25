import { Route, Routes } from 'react-router-dom';

// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const NotFound = lazy(() => import('../pages/NotFound'));

import MainPage from '../../pages/MainPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import NotFound from '../../pages/NotFound';
import AccountPage from '../../pages/AccountPage/AccountPage';
import StatisticsPage from '../../pages/StatisticsPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import CalendarPage from '../../pages/CalendarPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/calendar" element={<CalendarPage />}>
            {/* <Route path="Month" element={<ChoosedMonth />} /> */}
            {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
