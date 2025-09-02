import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './Home.css';
import Services from './services';
import Home from './home';
import logo from './Biotech logo_1.jpg';
import FindUs from './findus';


 
function App() {

  return (
    <BrowserRouter basename='/biotech'>
            <div className='header'>

              <div className='heading'>
                <img src={logo} alt='logo ' id='logo'></img>
                <p className='bio'>BioTech Laboratory</p>
              </div>

              <div className='header-details'>
                <p>
                  <NavLink to={'/'}  className='navLink'>
                    Home
                  </NavLink>
                </p>

                <p>
                  <NavLink to={'/services'} className='navLink'>
                    Services
                  </NavLink>
                </p>
                <p>
                  <NavLink to={'/findus'} className='navLink'>
                    Find Us
                  </NavLink>
                </p>
              </div>


            </div>


      <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/' element={<Home />} />
          <Route path='/findus' element={<FindUs />} />
      </Routes>

    </BrowserRouter>         

  );
}

export default App;
