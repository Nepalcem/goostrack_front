import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import SharedLayout from '../SharedLayout/SharedLayout';
import { ChoosedMonth } from 'components/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/Calendar/ChoosedDay/ChoosedDay';
import { Loader } from 'components/Loader/Loader';
//  приватні і рестріктед роуд
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';

import {useAuth} from 'hooks/useAuth' //loading

const MainPage = lazy(() => import('../../pages/MainPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const AccountPage = lazy(() => import('../../pages/AccountPage'));
const StatisticsPage = lazy(() => import('../../pages/StatisticsPage'));
const CalendarPage = lazy(() => import('../../pages/CalendarPage/CalendarPage'));

// import MainPage from '../../pages/MainPage';
// import RegisterPage from '../../pages/RegisterPage';
// import LoginPage from '../../pages/LoginPage';
// import NotFound from '../../pages/NotFound';
// import AccountPage from '../AccountPage/AccountPageLayout';
// import StatisticsPage from '../../pages/StatisticsPage';

// import CalendarPage from '../../pages/CalendarPage/CalendarPage';



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(); //loading

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    <Suspense fallback={<Loader />}>
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
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />

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
    </Suspense>
    {isRefreshing && <Loader />}
    </>
  );
};
