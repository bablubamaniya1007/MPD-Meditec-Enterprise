
import Home from './pages/Home';
import './App.css'
import NavBar from './components/NavBar';
import Photos from './components/Photos';
import MPDNote from './components/MPDNote';
import News from './components/News';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className = 'main-container'>
      <Home/>
      <NavBar/>
      <Photos />
      <MPDNote />
      <News />
      <Clients />
      <Footer />
    </div>
    </>
  )
}

export default App
