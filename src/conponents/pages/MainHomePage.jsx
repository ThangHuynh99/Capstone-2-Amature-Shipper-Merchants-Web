import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Footer from "../common/Footer";

MainHomePage.propTypes = {};

function MainHomePage(props) {
    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header />
            <section className="d-flex flex-column flex-row-fluid container">
                <div className="card card-custom card-bottom">
                    <header className="card-header border-0">
                        <div className="card-title py-4">
                            <h3 className="card-label">
                                <span className="d-block title">Recent Orders</span>
                                <span className="d-block text-time mt-2 font-size-sm">in 24 hours</span>
                            </h3>
                        </div>
                        <div className="card-toolbar">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="#tab1" className="nav-link py-2 px-4">
                                        <span className="nav-text">Month</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab2" className="nav-link py-2 px-4">
                                        <span className="nav-text">Week</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#tab3" className="nav-link py-2 px-4 active">
                                        <span className="nav-text">Day</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <article className="card-body">
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-orange align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span>#1111-2121</span>
                                    <span className>Today 10:00</span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment">85,000đ - Cash</span>
                                        <br />
                                        Quynh Nguyen Van - 0344 063 164
                                    </p>
                                    <span className="delivery">Delivery to</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0">986, Ngo Quyen, P. An Hai Bac, Q. Son Tra, Tp. Da Nang</address>
                                        <span className="label label-lg label-inprogress label-inline py-4">In Progress</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </article>
                    <article className="card-body">
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-orange align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span>#1111-2121</span>
                                    <span className>Today 10:00</span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment">85,000đ - Cash</span>
                                        <br />
                                        Quynh Nguyen Van - 0344 063 164
                                    </p>
                                    <span className="delivery">Delivery to</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0">986, Ngo Quyen, P. An Hai Bac, Q. Son Tra, Tp. Da Nang</address>
                                        <span className="label label-lg label-picked label-inline py-4">Picked</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </article>
                    <article className="card-body">
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-gray-400 align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span>#1111-2121</span>
                                    <span className>Today 10:00</span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment">85,000đ - Cash</span>
                                        <br />
                                        Quynh Nguyen Van - 0344 063 164
                                    </p>
                                    <span className="delivery">Delivery to</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0">986, Ngo Quyen, P. An Hai Bac, Q. Son Tra, Tp. Da Nang</address>
                                        <span className="label label-lg label-canceled label-inline py-4">Canceled</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </article>
                    <article className="card-body">
                        <div className="d-flex align-items-start">
                            <span className="bullet bullet-bar bg-gray-400 align-self-stretch" />
                            <div className="d-flex flex-column flex-grow-1 ml-4">
                                <header className="card-title content">
                                    <span>#1111-2121</span>
                                    <span className>Today 10:00</span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span className="payment">85,000đ - Cash</span>
                                        <br />
                                        Quynh Nguyen Van - 0344 063 164
                                    </p>
                                    <span className="delivery">Delivery to</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address className="mb-0">986, Ngo Quyen, P. An Hai Bac, Q. Son Tra, Tp. Da Nang</address>
                                        <span className="label label-lg label-completed label-inline py-4">Completed</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default MainHomePage;
