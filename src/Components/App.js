import logo from '../Assets/TenniStat.png'
import '../Styles/Banner.css'
import Nav from './Nav'
import {Outlet, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

function App() {
  const navigate=useNavigate()
  useEffect(()=> {
    navigate("/accueil")
  }, [])

  return (
    <>
      <header>        
        <img src={logo} alt="" />
      </header>

      <main>
        <Nav />
        <section>  
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
