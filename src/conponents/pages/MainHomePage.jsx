import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Cancelled from '../labels/Cancelled';
import Completed from '../labels/Completed';
import InProcessing from '../labels/InProcessing';
import Picked from '../labels/Picked';

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
    const {filterDate, setFilterDate} = useState();
    const dateRef = useRef();

    const dateToFromNowDaily = (date) => {
        const converDate = moment.unix(date);

        // ensure the date is displayed with today and yesterday
        return moment(converDate).calendar(null, {
            lastDay: '[Hôm qua,] HH:mm',
            sameDay: '[Hôm nay,] HH:mm',
            nextDay: '[Ngày mai,] HH:mm',
            sameElse: function () {
                return 'HH:mm, DD/MM/YYYY';
                // return '[' + fromNow + ']';
            },
        });
    };

    function handleChangeStatus(data) {
        setFilterDate(dateRef.current.value)
        console.log(filterDate)
        if (ChangeOrderStatus) {
            ChangeOrderStatus(data);
        }
    }
    
    

    //sort theo đơn mới nhất
    const convert = Object.values(datas);
    var byDate = convert.slice(0);
    byDate.sort(function (a, b) {
        return a.thoi_gian - b.thoi_gian;
    });
    const converted = byDate.reverse()
  
    function showOrder() {
        let items = [];
        if (datas) {
            converted.map((data, index) => {
                items.push(
                    <div key={index}>
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-orange align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span>{data.id_post}</span>
                                    <span>
                                        {dateToFromNowDaily(data.thoi_gian)}
                                        {/* <Moment format="DD/MM/YYYY">{data.thoi_gian}</Moment> */}
                                    </span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment">{data.phi_giao} - Tiền mặt</span>
                                        <br />
                                        <span>
                                            {data.ten_nguoi_nhan} - {data.sdt_nguoi_nhan}
                                        </span>
                                    </p>
                                    <span className="delivery">Giao hàng tới</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0 pl-0 col-9">{data.noi_giao}</address>
                                        {data.status === '1' && <Picked />}
                                        {data.status === '0' && <InProcessing />}
                                        {data.status === '2' && <Completed />}
                                        {data.status === '3' && <Cancelled />}
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
                                        <span className="nav-text" value="30" ref={dateRef} onClick={handleChangeStatus}>Tháng</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab2" className="nav-link py-2 px-4">
                                    <span className="nav-text" value="7" ref={dateRef} onClick={handleChangeStatus}>Tuần</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab3" className="nav-link py-2 px-4 active">
                                        <span className="nav-text" value="1" ref={dateRef} onClick={handleChangeStatus}>Ngày</span>
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
