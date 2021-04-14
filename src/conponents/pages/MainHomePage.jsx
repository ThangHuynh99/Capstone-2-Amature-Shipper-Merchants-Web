import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Footer from "../common/Footer";
import InProcessing from "../labels/InProcessing";
import Picked from "../labels/Picked";
import Completed from "../labels/Completed";
import Cancelled from "../labels/Cancelled";

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

    function handleChangeStatus(data) {
        if (ChangeOrderStatus) {
            ChangeOrderStatus(data);
        }
    }
    
    const convert = datas;
    console.log(convert)
    //var byDate = datas.slice(0);
    // datas.sort(function (a, b) {
    //     return a.thoi_gian - b.thoi_gian;
    // });
    // console.log("by date:");
    // console.log(datas);

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
                                    <span key={values.id_post}>
                                        Mã đơn: #{values.id_post}
                                    </span>
                                    <span key={values.thoi_gian}>
                                        {values.thoi_gian}
                                    </span>
                                </header>
                                <section className="card-info content">
                                    <p>
                                        <span
                                            className="payment"
                                            key={values.phi_giao}
                                        >
                                            {values.phi_giao} - Tiền mặt
                                        </span>
                                        <br />
                                        <span key={values.ten_nguoi_gui}>
                                            {values.ten_nguoi_gui}
                                        </span>{" "}
                                        -{" "}
                                        <span key={values.sdt_nguoi_gui}>
                                            {values.sdt_nguoi_gui}
                                        </span>
                                    </p>
                                    <span className="delivery">
                                        Giao hàng tới
                                    </span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <address
                                            className="mb-0 pl-0 col-9"
                                            key={values.noi_giao}
                                        >
                                            {values.noi_giao}
                                        </address>
                                        {values.status == "1" && <Picked />}
                                        {values.status == "0" && (
                                            <InProcessing />
                                        )}
                                        {values.status == "2" && <Completed />}
                                        {values.status == "3" && <Cancelled />}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="separator separator-dashed my-5" />
                    </div>
                );
            });
        } else {
            items.push("Chưa có đơn nào");
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
                                <span className="d-block title">
                                    Danh sách đơn
                                </span>
                                <span className="d-block text-time mt-2 font-size-sm"></span>
                            </h3>
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
