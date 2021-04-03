import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { propTypes } from "react-bootstrap/esm/Image";
import Avatar from "../../assets/media/avatar.png";
import { useHistory } from "react-router";
import { db } from "../../firebase";

EditProfile.propTypes = {
    user: PropTypes.object,
    change: PropTypes.func,
};

EditProfile.defaultProps = {
    user: "",
    change: null,
};

function EditProfile(props) {
    const { user, change } = props;
    const history = useHistory();

    const fullNameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const wardRef = useRef();
    const districtRef = useRef();

    const [district, setDistrict] = useState();

    const dataList = {
        "Quận Cẩm Lệ": ["Phường Hòa An", "Phường Hòa Phát", "Phường Hòa Thọ Đông", "Phường Hòa Thọ Tây", "Phường Hòa Xuân", "Phường Khuê Trung"],
        "Quận Hải Châu": [
            "Phường Bình Hiên",
            "Phường Bình Thuận",
            "Phường Hải Châu 1",
            "Phường Hải Châu 2",
            "Phường Hòa Cương Bắc",
            "Phường Hòa Cường Nam",
            "Phường Hòa Thuận Đông",
            "Phường Hòa Thuận Tây",
            "Phường Nam Dương",
            "Phường Phước Ninh",
            "Phường Thạch Thang",
            "Phường Thạnh Bình",
            "Phường Thuận Phước",
        ],
        "Quận Liên Chiểu": ["Phường Hòa Hiệp Bắc", "Phường Hòa Hiệp Nam", "Phường Hòa Khánh Bắc", "Phường Hòa Khánh Nam", "Phường Hòa Minh"],
        "Quận Ngũ Hành Sơn": ["Phường Hòa Hải", "Phường Hòa Quý", "Phường Khuê Mỹ", "Phường Mỹ An"],
        "Quận Sơn Trà": [
            "Phường An Hải Bắc",
            "Phường An Hải Đông",
            "Phường An Hải Tây",
            "Phường Mân Thái",
            "Phường Nại Hiên Đông",
            "Phường Phước Mỹ",
            "Phường Thọ Quang",
        ],
        "Quận Thanh Khê": [
            "Phường An Khê",
            "Phường Chính Gián",
            "Phường Hòa Khê",
            "Phường Tam Thuận",
            "Phường Tân Chính",
            "Phường Thạc Gián",
            "Phường Thanh Khê Đông",
            "Phường Thanh Khê Tây",
            "Phường Vĩnh Trung",
            "Phường Xuân Hà",
        ],
        "Huyện Hòa Vang": [
            "Xã Hòa Bắc",
            "Xã Hòa Châu",
            "Xã Hòa Khương",
            "Xã Hòa Liên",
            "Xã Hòa Nhơn",
            "Xã Hòa Ninh",
            "Xã Hòa Phong",
            "Xã Hòa Phú",
            "Xã Hòa Phước",
            "Xã Hòa Sơn",
            "Xã Hòa Tiến",
        ],
    };

    // Danh sách Quận
    function districtList() {
        let items = [];

        for (var district in dataList) {
            items.push(<option value={district}>{district}</option>);
        }
        return items;
    }

    // Danh sách Phường
    function wardList() {
        let items = [];
        // Nếu đã chọn Quận => trả về DS Phường
        if (dataList[district]) {
            for (var i = 0; i < dataList[district].length; i++) {
                var ward = dataList[district][i];
                items.push(<option value={ward}>{ward}</option>);
            }
        }
        return items;
    }

    // Chọn Quận, check thay đổi
    function handleDistrictChange(e) {
        if (e.target.value) {
            setDistrict(e.target.value);
        } else {
            setDistrict(null);
        }
    }

    //form handle
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // db.settings({
            //   timestampsInSnapshots: true,
            // });
            //check id của profile có tồn tại hay chưa, chưa thì insert, rồi thì update
            // .doc("HnuKdKVRz3nRBW3P4CLV")
            await db
                .collection("ShopProfile")
                .doc(user.uid)
                .set({
                    fullname: fullNameRef.current.value,
                    phone: phoneRef.current.value,
                    address: addressRef.current.value + ", " + wardRef.current.value + ", " + districtRef.current.value + ", Thành phố Đà Nẵng",
                });
            change();
            history.push("/profile");
        } catch {
            console.log("error");
        }
    }

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
                                <h5 className="text-dark font-weight-bold my-1 mr-5">Cài đặt tài khoản</h5>
                                {/* breadcrumb */}
                                <ul className="breadcrumb font-weight-bold p-0 my-2 font-size-sm">
                                    <li className="breadcrumb-item">
                                        <a href="homepage.html" className="text-muted">
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="profile.html" className="text-muted">
                                            Xem hồ sơ
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
                <div className="core d-flex flex-column flex-row-fluid container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="card card-custom">
                            <header className="card-header py-3">
                                <div className="card-title align-items-start flex-column">
                                    <h3 className="card-label">Thông tin cá nhân</h3>
                                    <span className="text-muted font-size-sm mt-1">Cập nhật thông tin cá nhân của bạn</span>
                                </div>
                                <div className="card-toolbar">
                                    <button type="submit" className="btn btn-chartjs mr-2">
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </header>
                            <div className="card-body">
                                {/* avatar */}
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-4 col-form-label">Ảnh đại diện</label>
                                    <div className="col-xl-9 col-lg-8">
                                        <div
                                            className="image-input image-input-outline"
                                            id="profile_avatar"
                                            style={{
                                                backgroundImage: `url(${Avatar})`,
                                            }}
                                        >
                                            <div className="image-input-wrapper" />
                                            <label
                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                data-action="change"
                                                data-toggle="tooltip"
                                                title
                                                data-original-title="Change avatar"
                                            >
                                                <i className="fa fa-pen icon-sm text-muted" />
                                                <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="profile_avatar_remove" />
                                            </label>
                                            <span
                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                data-action="cancel"
                                                data-toggle="tooltip"
                                                title="Cancel avatar"
                                            >
                                                <i className="fas fa-times text-muted" />
                                            </span>
                                            <span
                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                data-action="remove"
                                                data-toggle="tooltip"
                                                title="Remove avatar"
                                            >
                                                <i className="fas fa-times text-muted" />
                                            </span>
                                        </div>
                                        <span className="form-text text-muted">Định dạng cho phép: png, jpg, jpeg.</span>
                                    </div>
                                </div>
                                {/* email */}
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-xl-3 col-lg-4 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="email"
                                            id="email"
                                            placeholder="Địa chỉ email"
                                            defaultValue={user.email}
                                            readOnly
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* full name */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-xl-3 col-lg-4 col-form-label">
                                        Họ và tên
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="fullname"
                                            placeholder="Vui lòng nhập họ và tên của bạn"
                                            defaultValue=""
                                            ref={fullNameRef}
                                        />
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-5" />
                                {/* phone number */}
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-xl-3 col-lg-4 col-form-label">
                                        Số điện thoại
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="phone"
                                            placeholder="Số điện thoại của bạn"
                                            defaultValue=""
                                            ref={phoneRef}
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-xl-3 col-lg-4" />
                                    <div className="col-xl-9 col-lg-8">
                                        <h5 className="font-weight-normal mt-10 mb-6">Địa chỉ</h5>
                                    </div>
                                </div>
                                {/* Tỉnh/Thành phố */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Tỉnh/Thành phố
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg form-control-solid"
                                            type="text"
                                            id="city"
                                            defaultValue="Thành phố Đà Nẵng"
                                            readOnly
                                        />
                                    </div>
                                </div>

                                {/* Quận/Huyện */}
                                <div className="form-group row">
                                    <label htmlFor="district" className="col-xl-3 col-lg-4 col-form-label">
                                        Quận/Huyện
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            ref={districtRef}
                                            id="district"
                                            onChange={handleDistrictChange}
                                        >
                                            <option value="">Chọn Quận/Huyện</option>
                                            {districtList()}
                                        </select>
                                    </div>
                                </div>

                                {/* Phường/Xã */}
                                <div className="form-group row">
                                    <label htmlFor="ward" className="col-xl-3 col-lg-4 col-form-label">
                                        Phường/Xã
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select className="form-control form-control-lg" ref={wardRef} id="ward">
                                            <option value="">Chọn Phường/Xã</option>
                                            {wardList()}
                                        </select>
                                    </div>
                                </div>

                                {/* Địa chỉ */}
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-xl-3 col-lg-4 col-form-label">
                                        Địa chỉ
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="address"
                                            placeholder="Số nhà, tên đường"
                                            ref={addressRef}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default EditProfile;
