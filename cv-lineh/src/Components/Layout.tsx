import Header from "./Header";
import NavBar from "./NavBar";
import {  Outlet } from "react-router-dom";

export default function Layout() {

  return (
        <div className="layout">
          <Header />
          <NavBar  />
          <Outlet />
        </div>
  );
}