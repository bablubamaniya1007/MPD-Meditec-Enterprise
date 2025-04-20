
import "./App.css";
import Logo from "./components/Logo";
// import AboutMPD from "./pages/AboutMPD";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Team from "./pages/Team";
import Products from "./pages/Products";
import Clientele from "./pages/Clientele";
// import HomePage from "./pages/HomePage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">
        <Logo/>
         <NavBar />
        {/* <HomePage /> */}
      {/* <AboutMPD /> */}
      {/* <Team /> */}
      {/* <Products /> */}
      <Clientele />
      <Footer />
      </div>
    </>
  );
}

export default App;
