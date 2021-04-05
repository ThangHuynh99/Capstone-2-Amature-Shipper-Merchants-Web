import React, { useState, useEffect } from "react";
import { db, realtime } from "../../firebase";
import AsideRight from "../../conponents/pages/AsideRight";
import AsideLeft from "../../conponents/pages/AsideLeft";
import MainHomePage from "../../conponents/pages/MainHomePage";
import { useAuth } from "../../context/AuthContext";

function HomePage() {
    const { currentUser } = useAuth();

    const [id, setId] = useState(currentUser.uid)
    const [input, setInput] = useState({
        fullname: "",
        phone: "",
        address: ""
    })

    const [data, setData] = useState([
        {
            id_post: "",
            phi_giao: "",
            ten_nguoi_gui: "",
            sdt_nguoi_gui: "",
            noi_giao: "",
            thoi_gian: "",
            status: ""
        },
    ]);

    useEffect(() => {
        async function fetchUserInfor() {
            try {
                await db
                    .collection("ShopProfile")
                    .doc(id)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            setInput(
                                doc.data()
                            );
                            console.log(input);
                        } else {
                            console.log("No such document!");
                        }
                    });

                await realtime.ref("OrderStatus/").on("value", (snapshot) => {
                    setData(snapshot.val());
                    console.log(data);
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserInfor();
    }, []);

    return (
        <div className="header-fixed sidebar-enabled bg">
            <div className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainHomePage datas={data}/>
                <AsideRight name={input.fullname} />
            </div>
        </div>
    );
}

export default HomePage;
