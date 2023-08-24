import { Route, Routes } from 'react-router-dom';

// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const NotFound = lazy(() => import('../pages/NotFound'));

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
