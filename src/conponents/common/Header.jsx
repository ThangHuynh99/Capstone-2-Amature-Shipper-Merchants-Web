import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header header-fixed">
            <div className="d-flex flex-grow-1 align-items-center rounded-top-xl">
                <div className="d-flex align-items-center justify-content-start flex-wrap container-fluid ">
                    <ul className="menu-nav">
                        <li className="menu-item special">
                            <a href="#" className="menu-link">
                                <span className="menu-new">New</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-in-progress">In Progress</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-picked">Picked</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-completed">Completed</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-canceled">Canceled</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
