import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ShoppingPage from './components/ShoppingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/CheckoutForm/Checkout';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser => {
      console.log(authUser)
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    }))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<ShoppingPage />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route exact path='/' element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
