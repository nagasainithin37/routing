import {NavLink} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Aboutus() {
    return ( 
        <div>
           <ul className='d-flex justify-content-around'>
            <li className='list-group-item'>
                <NavLink className="nav-link" to="services">Services</NavLink>
                </li>
            <li className='list-group-item'>
                <NavLink className="nav-link" to="contactus">Contact Us</NavLink>
            </li>
           </ul>
           <Outlet/>
        </div>
     );
}

export default Aboutus;