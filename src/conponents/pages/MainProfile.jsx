import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useHistory } from "react-router";
import { db } from "../../firebase";
import Blank from "../../assets/media/blank.png";

MainProfile.propTypes = {
    user: PropTypes.object,
};

MainProfile.defaultProps = {
    user: "",
};

function MainProfile(props) {
    const { user } = props;
    const history = useHistory();

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

    const [input, setInput] = useState({
        fullname: "",
        contact: "",
        address: "",
    });

    const [province, setProvince] = useState("");
    const [districtt, setDistrictt] = useState("");
    const [ward, setWard] = useState("");

    const fullNameRef = useRef();
    const contactRef = useRef();
    const addressRef = useRef();
    const wardRef = useRef();
    const provinceRef = useRef();
    const districtRef = useRef();

    function handleSubmit() {}

    const [listWard, setListWard] = useState([]);
    const listDistrict = district.map((dis) => <option value={dis}>{dis}</option>);

    //province handle
    function handleProvinceChange(e) {
        setProvince(e.target.value);
        console.log(provinceRef.current.value);
    }

    //district handle
    function handleDistrictChange(e) {
        setDistrictt(e.target.value);
        if (e.target.value === "Hải Châu") {
            setListWard(haichau.map((hai) => <option value={hai}>{hai}</option>));
        } else {
            setListWard(null);
        }
        console.log(districtRef.current.value);
    }

    //ward handle
    function handleWardChange(e) {
        setWard(e.target.value);
        console.log(wardRef.current.value);
    }

    //address handle
    function handleAddressChange(e) {
        console.log(addressRef.current.value);
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
                    contact: contactRef.current.value,
                    address:
                        addressRef.current.value + ", " + wardRef.current.value + ", " + districtRef.current.value + ", " + provinceRef.current.value,
                });
            history.push("/home");
        } catch {
            console.log("error");
        }
    }

    //get data
    useEffect(() => {
        async function fetchUserInfor() {
            try {
                await db
                    .collection("ShopProfile")
                    .doc(user.uid)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            setInput(doc.data());
                            console.log(input);
                        } else {
                            console.log("No such document!");
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserInfor();
    });

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
                                        <a href="profile.html" className="text-muted">
                                            Profile Overview
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
                                <h3 className="card-label">Personal Infomation</h3>
                                <span className="text-muted font-size-sm mt-1">Update your personal information</span>
                            </div>
                        </header>
                        <form className="form">
                            <div className="card-body">
                                {/* avatar */}
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-4 col-form-label">Avatar</label>
                                    <div className="col-xl-9 col-lg-8">
                                        <div
                                            className="image-input image-input-outline"
                                            id="profile_avatar"
                                            style={{
                                                backgroundImage: `url(${Blank})`,
                                            }}
                                        >
                                            <div className="image-input-wrapper" />
                                        </div>
                                    </div>
                                </div>
                                {/* email */}
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-xl-3 col-lg-4 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg form-control-solid"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            defaultValue="hello"
                                            value={user.email}
                                            readOnly
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* full name */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-xl-3 col-lg-4 col-form-label">
                                        Full name
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg form-control-solid"
                                            type="text"
                                            id="fullname"
                                            value={input.fullname}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-5" />
                                {/* phone number */}
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-xl-3 col-lg-4 col-form-label">
                                        Contact
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg form-control-solid"
                                            type="text"
                                            id="phone"
                                            placeholder="Phone number"
                                            value={input.contact}
                                            readOnly
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* address */}
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-xl-3 col-lg-4 col-form-label">
                                        Address
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg form-control-solid"
                                            type="text"
                                            id="address"
                                            defaultValue={input.address}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card card-custom">
                        <form className="form" onSubmit={handleSubmit}>
                            <header className="card-header py-3">
                                <div className="card-title align-items-start flex-column">
                                    <h3 className="card-label">Personal Infomation</h3>
                                    <span className="text-muted font-size-sm mt-1">Update your personal information</span>
                                </div>
                                <div className="card-toolbar">
                                    <button type="submit" className="btn btn-chartjs mr-2">
                                        Save Changes
                                    </button>
                                    <button type="reset" className="btn btn-light mr-2">
                                        Cancel
                                    </button>
                                </div>
                            </header>
                            <div className="card-body">
                                {/* avatar */}
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-4 col-form-label">Avatar</label>
                                    <div className="col-xl-9 col-lg-8">
                                        <div
                                            className="image-input image-input-outline"
                                            id="profile_avatar"
                                            style={{
                                                backgroundImage: `url(${Blank})`,
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
                                        <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
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
                                            placeholder="Email"
                                            defaultValue={user.email}
                                            readOnly
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                {/* full name */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-xl-3 col-lg-4 col-form-label">
                                        Full name
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="fullname"
                                            placeholder="Full Name"
                                            defaultValue={input.fullname}
                                            ref={fullNameRef}
                                        />
                                    </div>
                                </div>
                                <div className="separator separator-dashed my-5" />
                                {/* phone number */}
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-xl-3 col-lg-4 col-form-label">
                                        Contact
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="phone"
                                            placeholder="Phone number"
                                            defaultValue={input.contact}
                                            ref={contactRef}
                                        />
                                        {/* <span class="form-text text-muted">Some help content goes here</span> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-xl-3 col-lg-4" />
                                    <div className="col-xl-9 col-lg-8">
                                        <h5 className="font-weight-normal mt-10 mb-6">Address</h5>
                                    </div>
                                </div>
                                {/* province/city */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Province/City
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            name="provinces"
                                            value={province}
                                            ref={provinceRef}
                                            onChange={handleProvinceChange}
                                        >
                                            <option value="">Select Province/City</option>
                                            <option value="Đà Nẵng" selected>
                                                Đà Nẵng
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* district */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        District
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select
                                            className="form-control form-control-lg"
                                            name="calc_shipping_district"
                                            value={districtt}
                                            ref={districtRef}
                                            id="districtSel"
                                            onChange={handleDistrictChange}
                                        >
                                            <option value="">Select District</option>
                                            {listDistrict}
                                        </select>
                                        <input className="billing_address_2" name type="hidden" defaultValue />
                                    </div>
                                </div>
                                {/* ward/commune */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Ward/Commune
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <select className="form-control form-control-lg" ref={wardRef} onChange={handleWardChange} id="wardSel">
                                            <option value="">Select Ward/Commune</option>
                                            {listWard}
                                        </select>
                                        <input className="billing_address_3" name type="hidden" defaultValue />
                                    </div>
                                </div>
                                {/* address */}
                                <div className="form-group row">
                                    <label htmlFor="city" className="col-xl-3 col-lg-4 col-form-label">
                                        Address
                                    </label>
                                    <div className="col-xl-9 col-lg-8">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            id="fullname"
                                            defaultValue=""
                                            ref={addressRef}
                                            onChange={handleAddressChange}
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
export default MainProfile;
