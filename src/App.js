import './App.css';
import Header from '../src/components/header/Header'
import Slider from './components/Slider/Slider';
import Services from './components/Services/Services';
import BookSlider from './components/book-slider/BookSlider';
import {books} from './data/books'

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <BookSlider data={books}/>
    </div>
  );
}

export default App;
