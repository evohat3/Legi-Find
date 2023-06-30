import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div>
    <Router>
      <ResponsiveAppBar />
        <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
