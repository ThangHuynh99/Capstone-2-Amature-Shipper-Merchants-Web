import React from "react";
import { Link } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import PropTypes from "prop-types";

Header.propTypes = {
    ChangeOrderStatus: PropTypes.func,
};

Header.defaultProps = {
    ChangeOrderStatus: null,
};

function Header(props) {
    const { ChangeOrderStatus } = props;

    function handleClick(data) {
        console.log(data)
        if (ChangeOrderStatus) {
            ChangeOrderStatus(data);
        }
    }

    return (
        <>
            <HeaderMobile />
            <header className="header header-fixed">
                <div className="d-flex flex-grow-1 align-items-center rounded-top-xl">
                    <div className="d-flex align-items-center justify-content-between flex-wrap container-fluid ">
                        <div className="d-none d-xl-block">
                            <ul className="menu-nav">
                                <li className="menu-item">
                                    <Link to="/home" className="menu-link">
                                        <span
                                            className="menu menu-recent"
                                            value=""
                                            onClick={() => handleClick("")}
                                        >
                                            Đơn gần đây
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/home" className="menu-link">
                                        <span
                                            className="menu menu-in-progress"
                                            value="1"
                                            onClick={() => handleClick("0")}
                                        >
                                            Đang xử lý
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/home" className="menu-link">
                                        <span
                                            className="menu menu-picked"
                                            value="2"
                                            onClick={() => handleClick("1")}
                                        >
                                            Đã nhận đơn
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/home" className="menu-link">
                                        <span
                                            className="menu menu-completed"
                                            value="3"
                                            onClick={() => handleClick("2")}
                                        >
                                            Hoàn thành
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/home" className="menu-link">
                                        <span
                                            className="menu menu-canceled"
                                            value="4"
                                            onClick={() => handleClick("3")}
                                        >
                                            Đơn hủy
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center d-block d-xl-none d-lg-block py-3 py-lg-2">
                            <Link
                                to="/home"
                                className="btn btn-icon btn-light h-40px w-40px mr-3"
                            >
                                <i
                                    className="fad fa-sync-alt"
                                    value=""
                                    onClick={() => handleClick("")}
                                ></i>
                            </Link>
                            <Link
                                to="/home"
                                className="btn btn-icon btn-light h-40px w-40px mr-3"
                            >
                                <i
                                    className="fad fa-spinner-third menu-in-progress"
                                    value="1"
                                    onClick={() => handleClick("0")}
                                ></i>
                            </Link>
                            <Link
                                to="/home"
                                className="btn btn-icon btn-light h-40px w-40px mr-3"
                            >
                                <i
                                    className="fad fa-user-check text-primary-2"
                                    value="2"
                                    onClick={() => handleClick("1")}
                                ></i>
                            </Link>
                            <Link
                                to="/home"
                                className="btn btn-icon btn-light h-40px w-40px mr-3"
                            >
                                <i
                                    className="fad fa-box-check menu-completed"
                                    value="3"
                                    onClick={() => handleClick("2")}
                                ></i>
                            </Link>
                            <Link
                                to="/home"
                                className="btn btn-icon btn-light h-40px w-40px mr-3"
                            >
                                <i
                            
                                    className="fas fa-times-circle text-danger-2"
                                    value="4"
                                    onClick={() => handleClick("3")}
                                ></i>
                            </Link>
                        </div>

                        <div className="d-flex align-items-center py-3 py-lg-2">
                            <Link
                                to="/post-order"
                                className="btn btn-icon btn-light h-40px w-40px"
                            >
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
