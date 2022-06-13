import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <main className="appLayout">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
