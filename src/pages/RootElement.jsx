import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';


const RootElement = function() {

  return (
    <>
      <Header />
      <main className='main' >
        <Outlet />
      </main>
    </>
  )
}

export default RootElement;