import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/LoginPage'
import Signup from './pages/SignupPage'
import Search from './pages/SearchPage'
import LogOut from './pages/LogOut'


function App() {
  return (
    <div>
    <Router>
      <ResponsiveAppBar />
        <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/search" element={<Search />} />
      <Route path="/logout" element={<LogOut />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
