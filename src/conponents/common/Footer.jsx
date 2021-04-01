import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className="py-2 my-5 d-flex flex-lg-column">
            <div className="container-fluid d-flex flex-md-row align-items-center justify-content-between">
                <div className="text-nav">
                    <span>2021©</span>
                    <a href="#" target="_blank">
                        The Night Owl
                    </a>
                </div>
                <div className="text-nav">
                    <a href="#" className="pr-3 pl-0" target="_blank">
                        About
                    </a>
                    <a href="#" className="px-3" target="_blank">
                        Team
                    </a>
                    <a href="#" className="pl-3 pr-0" target="_blank">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
