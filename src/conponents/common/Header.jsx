import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMobile from './HeaderMobile';

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
                                    <Link to="#" className="menu-link">
                                        <span className="menu menu-recent">Đơn gần đây</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="#" className="menu-link">
                                        <span className="menu menu-in-progress">Đang xử lý</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="#" className="menu-link">
                                        <span className="menu menu-picked">Đã nhận đơn</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="#" className="menu-link">
                                        <span className="menu menu-completed">Hoàn thành</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="#" className="menu-link">
                                        <span className="menu menu-canceled">Đơn hủy</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center d-block d-xl-none d-lg-block py-3 py-lg-2">
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i className="fad fa-sync-alt"></i>
                            </Link>
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i className="fad fa-spinner-third menu-in-progress"></i>
                            </Link>
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i className="fad fa-user-check text-primary-2"></i>
                            </Link>
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i className="fad fa-box-check menu-completed"></i>
                            </Link>
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px mr-3">
                                <i className="fas fa-times-circle text-danger-2"></i>
                            </Link>
                        </div>

                        <div className="d-flex align-items-center py-3 py-lg-2">
                            <Link to="#" className="btn btn-icon btn-light h-40px w-40px">
                                <i className="fad fa-file-alt pallette-purple"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
