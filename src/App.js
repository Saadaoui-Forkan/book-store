import './App.css';
import Header from '../src/components/header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import HomePage from './pages/Home/HomePage';
import AboutUsPage from './pages/AboutUsPage'
import AuthorsPage from './pages/AuthorsPage';
import ContactUsPage from './pages/AuthorsPage';
import RegisterPage from './pages/RegisterPage';
import BookPage from './pages/Book/BookPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path='/authors' element={<AuthorsPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/book/:param' element={<BookPage/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
