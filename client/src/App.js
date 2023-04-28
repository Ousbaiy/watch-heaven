import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';

import { SpinnerDiamond } from 'spinners-react';

// pages
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import NotFound from './pages/NotFound';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy laod
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Search = lazy(() => import('./pages/Search'));

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <div className="flex flex-col min-h-[150vh]">
      <Header />
      <div className="flex-grow">
        <Suspense
          fallback={
            <div className="h-screen fixed inset-0 bg-black/70 z-40 flex items-center justify-center">
              <SpinnerDiamond color="white" size={70} />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
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
