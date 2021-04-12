import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
import InProcessing from '../labels/InProcessing';

MainHomePage.propTypes = {
    datas: PropTypes.object,
    onClick: PropTypes.func,
};

MainHomePage.defaultProps = {
    datas: null,
    onClick: null,
};

function MainHomePage(props) {
    const { datas } = props;

    function handleClick() {

    }
    
    function showOrder() {
        let items = [];
        Object.values(datas).map((values, index) => {
            items.push(
                <div onClick={handleClick}>
                    <div className="d-flex align-items-start">
                        <span className="bullet bullet-bar bg-orange align-self-stretch" />
                        <div className="d-flex flex-column flex-grow-1 ml-4">
                            <header className="card-title content">
                                <span key={values.id_post}>{values.id_post}</span>
                                <span key={values.thoi_gian}>{values.thoi_gian}</span>
                            </header>
                            <section className="card-info content">
                                <p>
                                    <span className="payment" key={values.phi_giao}>{values.phi_giao} - Tiền mặt</span>
                                    <br />
                                    <span key={values.ten_nguoi_gui}>{values.ten_nguoi_gui}</span> - <span key={values.sdt_nguoi_gui}>{values.sdt_nguoi_gui}</span>
                                </p>
                                <span className="delivery">Giao hàng tới</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <address className="mb-0 pl-0 col-9" key={values.noi_giao}>{values.noi_giao}</address>
                                    <InProcessing />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="separator separator-dashed my-5" />
                </div>
            );
        });
        return items;
    }

    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header />
            <section className="d-flex flex-column flex-row-fluid container">
                <div className="card card-custom card-bottom">
                    <header className="card-header border-0">
                        <div className="card-title py-4">
                            <h3 className="card-label">
                                <span className="d-block title">Danh sách đơn</span>
                                <span className="d-block text-time mt-2 font-size-sm">trong 24 giờ</span>
                            </h3>
                        </div>
                        <div className="card-toolbar">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="#tab1" className="nav-link py-2 px-4">
                                        <span className="nav-text">Tháng</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab2" className="nav-link py-2 px-4">
                                        <span className="nav-text">Tuần</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab3" className="nav-link py-2 px-4 active">
                                        <span className="nav-text">Ngày</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <article className="card-body">{showOrder()}</article>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default MainHomePage;
