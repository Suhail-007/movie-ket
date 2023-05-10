import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootElement from './pages/RootElement';
import Homepage, { loader as moviesLoader } from './pages/Homepage';
import BookForm, { loader as bookLoader } from './pages/BookForm';
import ErrorElement from './pages/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <ErrorElement />,

    children: [
      {
        element: <Homepage />,
        index: true,
        loader: moviesLoader,
      },
      {
        path: '/book-ticket/:movieId',
        element: <BookForm />,
        loader: bookLoader,
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