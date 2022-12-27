import './App.css';
import Header from '../src/components/header/Header'
import Slider from './components/Slider/Slider';
import Services from './components/Services/Services';
import BookSlider from './components/book-slider/BookSlider';
import {books} from './data/books'
import HeadingTitle from './components/heading-title/HeadingTitle';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Services />
        <HeadingTitle title="most gifted" />
        <BookSlider data={books}/>
        <HeadingTitle title="best seller" />
        <BookSlider data={books}/>
        <HeadingTitle title="most wished for" />
        <BookSlider data={books}/>
        <Footer />
    </div>
  );
}

export default App;
