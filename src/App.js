import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ShoppingPage from './components/ShoppingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<ShoppingPage />} />
          <Route exact path='/' element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
