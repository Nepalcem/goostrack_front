import { Route, Routes } from 'react-router-dom';

// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const NotFound = lazy(() => import('../pages/NotFound'));

import MainPage from '../../pages/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import NotFound from '../../pages/NotFound';
import AccountPage from '../AccountPage/AccountPageLayout';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import CalendarPage from '../../pages/CalendarPage';

//  приватні і рестріктед роуд
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route
          path="/"
          element={
            <RestrictedRoute conponent={MainPage} redirectTo="/calendar" />
          }
        />

        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/account" element={<AccountPage />} /> */}
          <Route
            path="/account"
            element={
              <PrivateRoute conponent={AccountPage} redirectTo="/login" />
            }
          />
          {/* <Route path="/statistics" element={<StatisticsPage />} /> */}
          <Route
            path="/statistics"
            element={
              <PrivateRoute conponent={StatisticsPage} redirectTo="/login" />
            }
          />
          {/* <Route path="/calendar" element={<CalendarPage />}></Route> */}
          <Route
            path="/calendar"
            element={
              <PrivateRoute conponent={CalendarPage} redirectTo="/login" />
            }
          >
            {/* <Route path="Month" element={<ChoosedMonth />} /> */}
            {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>

        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute conponent={RegisterPage} redirectTo="/calendar" />
          }
        />

        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute conponent={LoginPage} redirectTo="/calendar" />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
