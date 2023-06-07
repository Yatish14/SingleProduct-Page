import './App.css';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className="App">
      <h1 class="only_mobile">OPEN IN MOBILE VIEW</h1>
      <div class="content">
          <SingleProduct />
      </div>
    </div>
  );
}

export default App;
