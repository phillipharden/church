import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet className="pt-5" />
      </main>
      <Footer />
    </>
  );
};

export default App;
