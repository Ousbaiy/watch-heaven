import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import NotFound from './pages/NotFound';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/success', element: <Success /> },
      { path: '/canceled', element: <Cancel /> },
      { path: '/search', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
