import { Routes, Route } from 'react-router-dom';

import {
  Home,
  ErrorPage,
  SharedLayout,
  Contact,
  Shop,
  Auth,
  Checkout,
} from './routes';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path='contact'
          element={<Contact />}
        />

        <Route
          path='shop/*'
          element={<Shop />}
        />

        <Route
          path='authenticate'
          element={<Auth />}
        />

        <Route
          path='cart'
          element={<Checkout />}
        />

        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
