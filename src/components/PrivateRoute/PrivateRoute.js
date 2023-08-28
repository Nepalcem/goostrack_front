import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

// компонент приватного роуту
// якщо залогінені, то рендеримо переданий (в пропсі) компонент
//  якщо не залогінені, то перекидаємо на лінк переданий пропсом (логінізації)
const PrivateRoute = ({ conponent: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
