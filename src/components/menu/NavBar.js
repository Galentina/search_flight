import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../../assets/airline.svg"
import {NavLink, Outlet, Route} from 'react-router-dom';
import Search from "./search";
import Routes from "../../Routes";
import HomePage from "../pages/home/HomePage";
import FlightsPage from "../pages/flights/FlightsPage";
import ClientsPage from "../pages/client/ClientsPage";




function NavBar(){



    return (
        <div>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#e3f2fd", fontSize: "16px"}}>
                    <NavLink className="navbar-brand" style={{width: "13%", maxWidth: "150px", margin: "0 50px 0 20px"}}
                          to='/' ><img src={Logo} alt="Airline"/></NavLink>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink end className="nav-link" to='/' >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/flights'>All flights</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/client'>Your page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="#">Disabled</NavLink>
                        </li>
                    </ul>
                    <div className='navBar float-right'>
                        <div className="navBar form-inline my-2 mb-2">
                            <div className="form-group ">
                                <label htmlFor="exampleDropdownFormEmail2">Email:&nbsp;</label>
                                <input type="email" className="form-control mr-2" id="exampleDropdownFormEmail2"
                                       placeholder="email@example.com" style={{maxWidth: "150px"}}/>
                            </div>
                            <div className=" form-group ml-sm-2">
                                <label htmlFor="exampleDropdownFormPassword2">Password:&nbsp;</label>
                                <input type="password" className="form-control " id="exampleDropdownFormPassword2"
                                       placeholder="Password" style={{maxWidth: "150px"}}/>
                            </div>
                            <button type="submit" className="btn btn-primary ml-sm-2 float-right ">Sign in</button>
                        </div>
                        <Search />
                    </div>
                    <br/>
                </nav>

            </div>
            {/*<Outlet />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flights" element={<FlightsPage />} />
                <Route path="/client" element={<ClientsPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>

        </div>
    );
}
export default NavBar
