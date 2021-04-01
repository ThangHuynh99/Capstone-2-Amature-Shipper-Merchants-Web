import React, { useState, useEffect } from "react";
import AsideRight from "../../conponents/pages/AsideRight";
import MainPostOrder from "../../conponents/pages/MainPostOrder";
import AsideLeft from "../../conponents/pages/AsideLeft";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

function PostOrder(props) {
    const { currentUser } = useAuth();

    const [userInfor, setUserInfor] = useState({
        userID: currentUser.uid,
        fullname: "",
        contact: "",
        address: "",
    });

    useEffect(() => {
        async function fetchUserInfor() {
            try {
                await db
                    .collection("ShopProfile")
                    .doc(currentUser.uid)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            setUserInfor(doc.data());
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
        <div className="header-fixed sidebar-enabled bg">
            <section className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainPostOrder user={userInfor} />
                <AsideRight />
            </section>
        </div>
    );
}

export default PostOrder;
