import React, { Fragment } from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <Fragment>
      <div className="container mx-auto mt-28">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
