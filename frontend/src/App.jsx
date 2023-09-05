import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Public from './routes/Public';
import Private from './routes/Private';

function App() {
  const [country] = useState({
    name: 'Thailand',
    flag: 'https://cdn.ipregistry.co/flags/emojitwo/th.svg',
  });
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen country={country} />} />
            <Route
              path="/signin"
              element={
                <Public>
                  <LoginScreen country={country} />
                </Public>
              }
            />
            <Route
              path="/product/:slug"
              element={<ProductScreen country={country} />}
            />
            <Route path="/cart" element={<CartScreen />} />
            <Route
              path="/checkout"
              element={
                <Private>
                  <CheckoutScreen />
                </Private>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
