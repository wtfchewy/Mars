import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Portfolio, Project } from './pages';

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio/:category?' element={<Portfolio />} />
            <Route path='/projects/:project' element={<Project />} />
        </Routes>
    </Router>
  )
}

export default App
