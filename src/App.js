import './App.css';
import Header from '../src/components/header/Header'
import Slider from './components/Slider/Slider';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
    </div>
  );
}

export default App;
