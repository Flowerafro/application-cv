import Header from "./Header";
import NavBar from "./NavBar";
import CookieConsent from './CookieConsent';
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="layout">
      <Header />
      <NavBar />
      <Outlet />
      <CookieConsent />
    </div>
  );
}