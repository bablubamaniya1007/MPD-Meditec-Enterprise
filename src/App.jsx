
import Home from './pages/Home';
import './App.css'
import NavBar from './components/NavBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className = 'main-container'>
      <Home/>
      <NavBar/>
    </div>
    </>
  )
}

export default App
