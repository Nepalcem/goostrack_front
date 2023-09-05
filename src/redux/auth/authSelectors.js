export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.username;

export const selectIsRefreshing = state => state.auth.isRefreshing; //loading

const authSelectors = { selectIsLoggedIn, selectUserName };
export default authSelectors;
