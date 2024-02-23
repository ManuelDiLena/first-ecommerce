import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ShoppingPage from './components/ShoppingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<ShoppingPage />} />
          <Route exact path='/' element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
