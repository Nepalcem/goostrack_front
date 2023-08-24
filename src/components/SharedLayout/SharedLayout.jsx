import { Outlet } from 'react-router-dom';
import React from 'react';
const SharedLayout = () => {
  return (
    <>
      <div> меню </div>

      <Outlet />
    </>
  );
};

export default SharedLayout;
