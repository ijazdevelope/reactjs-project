import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            {/* <div className='text-left'>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
                </button>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <Link to='/home' className='text-decoration-none d-block'>Home</Link>
                <Link to='/about' className='text-decoration-none d-block'>About</Link>
                <Link to='/contact' className='text-decoration-none d-block'>Contact</Link>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* navbar starting */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
                <div className="container-fluid">
                    <NavLink to='/dashboard' className="navbar-brand">Dashboard</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/portfolio' className="nav-link">Our Portfolio</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* navbar end */}
        </>
    )
}

export default Navbar;