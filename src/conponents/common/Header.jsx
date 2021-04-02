import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header header-fixed">
            <div className="d-flex flex-grow-1 align-items-center rounded-top-xl">
                <div className="d-flex align-items-center justify-content-between flex-wrap container-fluid ">
                    <ul className="menu-nav">
                        <li className="menu-item special">
                            <a href="#" className="menu-link">
                                <span className="menu-recent">Đơn gần đây</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-in-progress">Đang xử lý</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-picked">Đã nhận đơn</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-completed">Hoàn thành</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-canceled">Đơn hủy</span>
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center py-3 py-lg-2">
                        <a href="#" className="btn btn-icon btn-light h-40px w-40px">
                            <i class="fad fa-file-alt pallette-purple"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
