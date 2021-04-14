import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
    const { datas } = props;
    const [filteredStatus, setFilteredStatus] = useState('all');
    const [titleStatus, setTitleStatus] = useState('tất cả');

    const dateToFromNowDaily = (date) => {
        const convertDate = moment.unix(date);

        return moment(convertDate).calendar(null, {
            lastDay: '[Hôm qua,] HH:mm',
            sameDay: '[Hôm nay,] HH:mm',
            nextDay: '[Ngày mai,] HH:mm',
            lastWeek: 'HH:mm, DD/MM/YYYY',
            nextWeek: 'HH:mm, DD/MM/YYYY',
            sameElse: function () {
                return 'HH:mm, DD/MM/YYYY';
            },
        });
    };

    const handleFilterStatus = (status) => {
        setFilteredStatus(status);
        status === 'all' && setTitleStatus('tất cả');
        status === '0' && setTitleStatus('đang xử lý');
        status === '1' && setTitleStatus('đã nhận');
        status === '2' && setTitleStatus('hoàn thành');
        status === '3' && setTitleStatus('bị hủy');
    };

    const renderStatus = Object.values(datas).filter((data) => filteredStatus === 'all' || filteredStatus === data.status);

    const sortStatus = Object.values(renderStatus).sort((a, b) => (a.thoi_gian < b.thoi_gian ? 1 : -1));

    // console.log(sortStatus);

    // const test = Object.values(newStatus).map((data) => {
    //     console.log(data.thoi_gian);
    //     console.log(moment.unix(data.thoi_gian).subtract(1, 'day').format('X'));
    // });

    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header onClickFilterStatus={handleFilterStatus} />
            <section className="d-flex flex-column flex-row-fluid container">
                <div className="card card-custom card-bottom">
                    <header className="card-header border-0">
                        <div className="card-title py-4">
                            <h3 className="card-label">
                                <span className="d-block title">Danh sách đơn {titleStatus}</span>
                                <span className="d-block text-time mt-2 font-size-sm">trong 24 giờ</span>
                            </h3>
                        </div>
                        <div className="card-toolbar">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="#month" className="nav-link py-2 px-4">
                                        <span className="nav-text">Tháng</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#week" className="nav-link py-2 px-4">
                                        <span className="nav-text">Tuần</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#day" className="nav-link py-2 px-4 active">
                                        <span className="nav-text">Ngày</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>
                    {Object.values(sortStatus).map((data, index) => (
                        <article className="card-body" key={index}>
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
                                            {data.status === '0' && <InProcessing />}
                                            {data.status === '1' && <Picked />}
                                            {data.status === '2' && <Completed />}
                                            {data.status === '3' && <Cancelled />}
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="separator separator-dashed my-5" />
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default MainHomePage;
