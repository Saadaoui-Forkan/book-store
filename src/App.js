import './App.css';
import Header from '../src/components/header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import HomePage from './pages/Home/HomePage';
import About from './pages/About/About'
import Authors from './pages/Authors/Authors';
import Contact from './pages/contact/Contact';
import BookPage from './pages/Book/BookPage';
import CartPage from './pages/Cart/CartPage';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Search from './pages/search/Search';

function App() {
  

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/authors' element={<Authors/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/book/:param' element={<BookPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
