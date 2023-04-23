import './App.css';
import Navbar from './components/Navbar'
import Sliders from './components/Sliders'
import Sticker from './components/Sticker'
import Cards from './components/Cards'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sliders/>
      <Sticker/>
      <Cards
        nums = {102}
      />
      <Cards
        nums = {123}
      />
      <Cards
        nums = {500}
      />
      <Cards
        nums = {69}
      />
    </div>
  );
}

export default App;








