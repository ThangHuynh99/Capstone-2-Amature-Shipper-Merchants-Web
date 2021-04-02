import React from "react";
import PropTypes from "prop-types";
import HeaderMobile from "./HeaderMobile";

Header.propTypes = {};

function Header(props) {
    return (
        <>
            <HeaderMobile />
            <header className="header header-fixed">
                <div className="d-flex flex-grow-1 align-items-center rounded-top-xl">
                    <div className="d-flex align-items-center justify-content-between flex-wrap container-fluid ">
                        <div className="d-none d-xl-block">
                            <ul className="menu-nav">
                                <li className="menu-item">
                                    <a href="#" className="menu-link">
                                        <span className="menu menu-recent">Đơn gần đây</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="menu-link">
                                        <span className="menu menu-in-progress">Đang xử lý</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="menu-link">
                                        <span className="menu menu-picked">Đã nhận đơn</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="menu-link">
                                        <span className="menu menu-completed">Hoàn thành</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="menu-link">
                                        <span className="menu menu-canceled">Đơn hủy</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center d-block d-xl-none d-lg-block py-3 py-lg-2">
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i class="fad fa-sync-alt"></i>
                            </a>
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i class="fad fa-spinner-third menu-in-progress"></i>
                            </a>
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                            <i class="fad fa-user-check text-primary-2"></i>
                            </a>
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                            <i class="fad fa-box-check menu-completed"></i>
                            </a>
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                            <i class="fas fa-times-circle text-danger-2"></i>
                            </a>
                        </div>

                        <div className="d-flex align-items-center py-3 py-lg-2">
                            <a href="#" className="btn btn-icon btn-light h-40px w-40px">
                                <i class="fad fa-file-alt pallette-purple"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
