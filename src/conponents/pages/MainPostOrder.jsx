import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { realtime } from "../../firebase";
import { useHistory } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import random from "randomstring";

MainPostOrder.propTypes = {
    user: PropTypes.object,
};

MainPostOrder.defaultProps = {
    user: "",
};

function MainPostOrder(props) {
    const { user } = props;
    var today = new Date();
    var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time + " " + date;

    const id = random.generate(10) + random.generate(10);

    const [idPost, setIdPost] = useState(id);
    const [ngayTao, setNgayTao] = useState(dateTime);

    const history = useHistory();

    const customerRef = useRef();
    const numberRef = useRef();
    const shipFeeRef = useRef();
    const depositFeeRef = useRef();
    const noteRef = useRef();
    const shipProvinceRef = useRef();
    const shipDistrcitRef = useRef();
    const shipWardRef = useRef();
    const shipAddressRef = useRef();

    const [province, setProvince] = useState("");
    const [districtt, setDistrictt] = useState("");
    const [ward, setWard] = useState("");

    const district = ["Hải Châu", "Cẩm Lệ", "Thanh Khê", "Liên Chiểu", "Ngũ Hành Sơn", "Sơn Trà"];

    const haichau = [
        "Hải Châu 1",
        "Hải Châu 2",
        "Thạch Thang",
        "Thanh Bình",
        "Thuận Phước",
        "Hòa Thuận Tây",
        "Hoà Thuận Đông",
        "Nam Dương",
        "Phước Ninh",
        "Bình Thuận",
        "Bình Hiên",
        "Hòa Cường Nam",
        "Hòa Cường Bắc",
    ];

    const [listWard, setListWard] = useState([]);

    const listDistrict = district.map((dis) => <option value={dis}>{dis}</option>);

    //district handle
    function handleDistrictChange(e) {
        setDistrictt(e.target.value);
        if (e.target.value === "Hải Châu") {
            setListWard(haichau.map((hai) => <option value={hai}>{hai}</option>));
        } else {
            setListWard(null);
        }
    }

    //handle submitForm
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            //tao bảng newsfeed
            await realtime.ref("newsfeed/" + idPost).set({
                id_post: idPost,
                noi_giao:
                    shipAddressRef.current.value +
                    "," +
                    shipWardRef.current.value +
                    "," +
                    shipDistrcitRef.current.value +
                    "," +
                    shipProvinceRef.current.value,
                noi_nhan: user.address,
                ghi_chu: noteRef.current.value,
                km: "3km",
                thoi_gian: ngayTao,
                sdt_nguoi_nhan: numberRef.current.value,
                ten_nguoi_nhan: customerRef.current.value,
                sdt_nguoi_gui: user.contact,
                ten_nguoi_gui: user.fullname,
                phi_giao: shipFeeRef.current.value,
                phi_ung: depositFeeRef.current.value,
                id_shop: user.userID,
            });

            //tạo bảng orderstatus
            await realtime.ref("OrderStatus/").set({
                id_post: idPost,
                id_shop: user.userID,
                status: 0,
                noi_giao:
                    shipAddressRef.current.value +
                    "," +
                    shipWardRef.current.value +
                    "," +
                    shipDistrcitRef.current.value +
                    "," +
                    shipProvinceRef.current.value,
                noi_nhan: user.address,
                ghi_chu: noteRef.current.value,
                km: "3km",
                thoi_gian: ngayTao,
                sdt_nguoi_nhan: numberRef.current.value,
                ten_nguoi_nhan: customerRef.current.value,
                sdt_nguoi_gui: user.contact,
                ten_nguoi_gui: user.fullname,
                phi_giao: shipFeeRef.current.value,
                phi_ung: depositFeeRef.current.value,
                id_shop: user.userID,
            });
            
            //tạo bảng transaction
            await realtime.ref("Transaction/").set({
                id_post: idPost,
                id_shipper: '',
                status: '',
                id_roomchat: ''
            });
            history.push("/home");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="d-flex flex-column flex-row-fluid wrapper">
            <Header />
            <section className="content d-flex flex-column flex-column-fluid">
                {/* core content */}
                <div className="core d-flex flex-column flex-row-fluid container">
                    <div className="card card-custom card-sticky" id="on_page_sticky_card">
                        <form className="form" onSubmit={handleSubmit}>
                            <header className="card-header py-3">
                                <div className="card-title align-items-start flex-column">
                                    <h3 className="card-label">Đăng đơn</h3>
                                    <span className="text-muted font-size-sm mt-1">Đăng đơn ngay còn lại để chúng tôi lo</span>
                                </div>
                                <div className="card-toolbar">
                                    <button type="submit" className="btn btn-chartjs mr-2">
                                        Đăng ngay
                                    </button>
                                    <button type="button" className="btn btn-light mr-2">
                                        Làm lại
                                    </button>
                                </div>
                            </header>
                            {/* body card */}
                            <div className="card-body">
                                {/* customer name */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-xl-3 col-lg-4 col-form-label">
                                        Khách hàng
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="fullname"
                                            maxLength={35}
                                            placeholder="Tên khách hàng"
                                            ref={customerRef}
                                        />
                                    </div>
                                </div>
                                {/* phone number */}
                                <div className="form-group row">
                                    <label htmlFor="phone_inputmask" className="col-xl-3 col-lg-4 col-form-label">
                                        Số điện thoại
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="phone_inputmask"
                                            placeholder="Số điện thoại"
                                            ref={numberRef}
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* ship fee */}
                                <div className="form-group row">
                                    <label htmlFor="ship_inputmask" className="col-xl-3 col-lg-4 col-form-label">
                                        Chi phí giao hàng
                                    </label>
                                    <div className="col-xl-9 col-lg-8 input-group">
                                        <input type="text" className="form-control" id="ship_inputmask" placeholder={0} ref={shipFeeRef} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">VND</span>
                                        </div>
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* temp fee */}
                                <div className="form-group row">
                                    <label htmlFor="temp" className="col-xl-3 col-lg-4 col-form-label">
                                        Tạm ứng
                                    </label>
                                    <div className="col-xl-9 col-lg-8 input-group">
                                        <input type="text" className="form-control" id="temp_inputmask" placeholder={0} ref={depositFeeRef} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">VND</span>
                                        </div>
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-5" />
                                <div className="form-group row">
                                    <label htmlFor="note" className="col-xl-3 col-lg-4 col-form-label">
                                        Ghi chú
                                    </label>
                                    <div className="col-xl-9 col-lg-8 input-group">
                                        <textarea
                                            className="form-control"
                                            id="note_maxlength"
                                            maxLength={150}
                                            rows={3}
                                            placeholder="Viết ghi chú cho shipper"
                                            ref={noteRef}
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-xl-3 col-lg-4" />
                                    <div className="col-xl-9 col-lg-8">
                                        <h5 className="font-weight-normal mt-0 mb-6">Nhận hàng tại</h5>
                                    </div>
                                </div>
                                {/* province/city */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Tỉnh/Thành phố
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select className="form-control form-control-lg" id="city" name="calc_shipping_provinces">
                                            <option value="">Chọn Tỉnh/Thành phố</option>
                                            <option value="Đà Nẵng">Đà Nẵng</option>
                                        </select>
                                        <input className="billing_address_1" name type="hidden" defaultValue />
                                    </div>
                                </div>
                                {/* district */}
                                <div className="form-group row">
                                    <label htmlFor="district" className="col-xl-3 col-lg-4 col-form-label">
                                        Quận/Huyện
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            id="district"
                                            name="calc_shipping_district"
                                            onChange={handleDistrictChange}
                                        >
                                            <option value="">Chọn Quận/Huyện</option>
                                            {listDistrict}
                                        </select>
                                        <input className="billing_address_2" name type="hidden" defaultValue />
                                    </div>
                                </div>
                                {/* ward/commune */}
                                <div className="form-group row">
                                    <label htmlFor="ward" className="col-xl-3 col-lg-4 col-form-label">
                                        Phường/Xã
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select className="form-control form-control-lg" id="ward">
                                            <option value="">Chọn Phường/Xã</option>
                                            {listWard}
                                        </select>
                                    </div>
                                </div>
                                {/* address */}
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-xl-3 col-lg-4 col-form-label">
                                        Địa chỉ
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input className="form-control form-control-lg" type="text" id="address" placeholder="Số nhà, tên đường" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-xl-3 col-lg-4" />
                                    <div className="col-xl-9 col-lg-8">
                                        <h5 className="font-weight-normal mt-0 mb-6">Giao hàng tới</h5>
                                    </div>
                                </div>
                                {/* province/city */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Tỉnh/Thành phố
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            id="city"
                                            name="calc_shipping_provinces"
                                            ref={shipProvinceRef}
                                        >
                                            <option value="">Chọn Tỉnh/Thành phố</option>
                                            <option value="Đà Nẵng">Đà Nẵng</option>
                                        </select>
                                    </div>
                                </div>
                                {/* district */}
                                <div className="form-group row">
                                    <label htmlFor="district" className="col-xl-3 col-lg-4 col-form-label">
                                        Quận/Huyện
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            id="district"
                                            name="calc_shipping_district"
                                            onChange={handleDistrictChange}
                                            ref={shipDistrcitRef}
                                        >
                                            <option value="">Chọn Quận/Huyện</option>
                                            {listDistrict}
                                        </select>
                                    </div>
                                </div>
                                {/* ward/commune */}
                                <div className="form-group row">
                                    <label htmlFor="ward" className="col-xl-3 col-lg-4 col-form-label">
                                        Phường/Xã
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select className="form-control form-control-lg" id="ward" ref={shipWardRef}>
                                            <option value="">Chọn Phường/Xã</option>
                                            {listWard}
                                        </select>
                                    </div>
                                </div>
                                {/* address */}
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-xl-3 col-lg-4 col-form-label">
                                        Địa chỉ
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="address"
                                            maxLength={50}
                                            placeholder="Số nhà, tên đường"
                                            ref={shipAddressRef}
                                        />
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

export default MainPostOrder;
