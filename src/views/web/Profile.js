import React, { useRef, useState, useEffect } from "react";
import "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import AsideLeft from "../../conponents/pages/AsideLeft";
import AsideRight from "../../conponents/pages/AsideRight";
import MainProfile from "../../conponents/pages/MainProfile";

export default function Profile() {
    const { currentUser } = useAuth();

    const [userInfor, setUserInfor] = useState({
        email: currentUser.email,
        uid: currentUser.uid,
    });

    function changeRender() {

    }
    
    return (
        <div className="header-fixed sidebar-enabled bg">
            <div className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainProfile user={userInfor} />
                
                <AsideRight />
            </div>
        </div>
    );
}
