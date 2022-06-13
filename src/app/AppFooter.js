import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppFooter.css';

class AppFooter extends Component {
    render() {
        return (
            <footer className="app-footer">
                <div className="container">
                    <div className="app-branding">
                        <a className="app-title">Copy right &copy;2022, Swuan Yee Lin.</a>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                    <ul>
                                        <li>
                                            <NavLink to="/terms">Terms and Conditions</NavLink>
                                        </li>
                                    </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        )
    }
}

export default AppFooter;