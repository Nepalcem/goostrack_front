import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const isRefreshing = useSelector(selectIsRefreshing);


  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};