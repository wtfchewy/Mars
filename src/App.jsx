import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Portfolio } from './pages';

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio/:category?' element={<Portfolio />} />
        </Routes>
    </Router>
  )
}

export default App
