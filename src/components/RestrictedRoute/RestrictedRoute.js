import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

// компонент який нема потреби показувати
// наприклад сторінку реєстрації і логінізації, якщо ми зайщли в систему
// Якщо залогінені, то переходимо на сторінку,я ку передали пропсом
//  Якщо не залогінені, то повертаємо компонент переданий в пропсі (форма реєстрації чи логінізації)
const RestrictedRoute = ({ conponent: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
