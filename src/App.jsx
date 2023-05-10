import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootElement from './pages/RootElement';
import Homepage, { loader as moviesLoader } from './pages/Homepage';
import BookForm from './pages/BookForm';
import ErrorElement from './pages/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <ErrorElement />,

    children: [
      {
        loader: moviesLoader,
        element: <Homepage />,
        index: true,
      },
      {
        path: '/book-ticket/:movieId',
        element: <BookForm />,
      }

    ]
   }
  ]);


function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App