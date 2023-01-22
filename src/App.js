import {Route,Routes,NavLink,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Services from './components/Services';
import './App.css';
function App() {
  return (
    <div>

      {/* Nav Bar */}
      {/* href should be updatedd to to and a to navlink or link */}
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="users">users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="aboutus">Aboutus</NavLink>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

{/*  ROutes */}
<Routes>
<Route path="" element={<Home/>}/>
<Route path="users" element={<Users/>}/>
{/*  Nested routing in about us */}
<Route path="aboutus" element={<Aboutus/>}>
  {/*  Nested Routes */}
<Route path="contactus" element={<Contactus/>}/>
<Route path="services" element={<Services/>}/>
{/*  Default route in nested route use navigator */}
<Route path="" element={<Navigate replace to="Services"/>}/>
  </Route>
  
</Routes>

    </div>
  );
}

export default App;
