import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact, Home, Portfolio, Project } from './pages';

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio/:category?' element={<Portfolio />} />
            <Route path='/projects/:project' element={<Project />} />
        </Routes>
    </Router>
  )
}

export default App
