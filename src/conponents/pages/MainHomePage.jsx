import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
import InProcessing from '../labels/InProcessing';
import Picked from '../labels/Picked';
import Completed from '../labels/Completed';
import Cancelled from '../labels/Cancelled';
import Moment from 'react-moment';
import moment from 'moment';

MainHomePage.propTypes = {
    datas: PropTypes.object,
    ChangeOrderStatus: PropTypes.func,
};

MainHomePage.defaultProps = {
    datas: null,
    ChangeOrderStatus: null,
};

function MainHomePage(props) {
    const { datas, ChangeOrderStatus } = props;

    const dateToFromNowDaily = (date) => {
        // get from-now for this date
        var fromNow = moment(date).fromNow();

        // ensure the date is displayed with today and yesterday
        return moment(date).calendar(null, {
            lastDay: '[Hôm qua,] LT',
            sameDay: '[Hôm nay,] LT',
            nextDay: '[Ngày mai,] LT',
            sameElse: function () {
                return 'HH:mm, DD/MM/YYYY';
                // return '[' + fromNow + ']';
            },
        });
    };

    function handleChangeStatus(data) {
        if (ChangeOrderStatus) {
            ChangeOrderStatus(data);
        }
    }

    function showOrder() {
        let items = [];
        if (datas) {
            Object.values(datas).map((values, index) => {
                items.push(
                    <div>
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-orange align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span key={index}>{values.id_post}</span>
                                    <span key={index}>
                                        {dateToFromNowDaily(values.thoi_gian)}
                                        {/* <Moment format="DD/MM/YYYY">{values.thoi_gian}</Moment> */}
                                    </span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment" key={index}>
                                            {values.phi_giao} - Tiền mặt
                                        </span>
                                        <br />
                                        <span key={index}>{values.ten_nguoi_nhan}</span> - <span key={index}>{values.sdt_nguoi_nhan}</span>
                                    </p>
                                    <span className="delivery">Giao hàng tới</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0 pl-0 col-9" key={index}>
                                            {values.noi_giao}
                                        </address>
                                        {values.status == '1' && <Picked />}
                                        {values.status == '0' && <InProcessing />}
                                        {values.status == '2' && <Completed />}
                                        {values.status == '3' && <Cancelled />}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </div>
                );
            });
        } else {
            items.push('Chưa có đơn nào');
        }
        return items;
    }

    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header ChangeOrderStatus={handleChangeStatus} />
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
