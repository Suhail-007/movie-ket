import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';


const RootElement = function() {

  return (
    <>
      <Header />
      <main className='main' >
        <input type='search' autoFocus/>
        <Outlet />
      </main>
    </>
  )
}

export default RootElement;