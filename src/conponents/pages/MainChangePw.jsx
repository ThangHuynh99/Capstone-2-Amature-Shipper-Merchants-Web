import React from "react";
import PropTypes from "prop-types";
import Footer from "../common/Footer";
import Header from "../common/Header";

MainChangePw.propTypes = {};

function MainChangePw(props) {
    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header />
            <section className="content d-flex flex-column flex-column-fluid">
                {/* subheader */}
                <div className="subheader py-2 py-lg-6 subheader-transparent">
                    <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        {/* wrap breadcrumb */}
                        <div className="d-flex align-items-center flex-wrap mr-1">
                            <div className="d-flex align-items-baseline flex-wrap mr-5">
                                <h5 className="text-dark font-weight-bold my-1 mr-5">Account Settings</h5>
                                {/* breadcrumb */}
                                <ul className="breadcrumb font-weight-bold p-0 my-2 font-size-sm">
                                    <li className="breadcrumb-item">
                                        <a href="homepage.html" className="text-muted">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="change-pw.html" className="text-muted">
                                            Change Password
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* end wrap breadcrumb */}
                        {/* tool bars */}
                        {/* <div class="d-flex align-items-center">
                        </div> */}
                    </div>
                </div>
                {/* core content */}
                <div className="core d-flex flex-column flex-row-fluid container">
                    <div className="card card-custom">
                        <header className="card-header py-3">
                            <div className="card-title align-items-start flex-column">
                                <h3 className="card-label">Change Password</h3>
                                <span className="text-muted font-size-sm mt-1">Change your account password</span>
                            </div>
                            <div className="card-toolbar">
                                <button type="submit" className="btn btn-chartjs mr-2">
                                    Save Changes
                                </button>
                            </div>
                        </header>
                        <form className="form">
                            <div className="card-body">
                                {/* current password */}
                                <div className="form-group row">
                                    <label htmlFor="current-password" className="col-xl-3 col-lg-4 col-form-label">
                                        Current Password
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            id="current-password"
                                            placeholder="Current password"
                                            defaultValue
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* new password */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-xl-3 col-lg-4 col-form-label">
                                        New Password
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="password"
                                            placeholder="New password"
                                            defaultValue
                                        />
                                    </div>
                                </div>
                                {/* confirm password */}
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-xl-3 col-lg-4 col-form-label">
                                        Confirm Password
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="confirm-password"
                                            placeholder="Confirm password"
                                            defaultValue
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default MainChangePw;
