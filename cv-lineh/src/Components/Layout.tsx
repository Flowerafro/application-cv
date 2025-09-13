import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>
      <main>
        <h2>her kommer cv</h2>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}