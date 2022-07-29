import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title, mode, aboutText, toggleMode}) => {
    Navbar.propTypes = {
        title: PropTypes.string,
        aboutText: PropTypes.string
    }
    Navbar.defaultProps = {
        title: 'set title here',
        aboutText: 'About'
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"  
                            onClick={toggleMode}
                            />
                           
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar