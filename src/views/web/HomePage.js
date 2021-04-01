import React from "react";
import { Alert } from "react-bootstrap";

import AsideRight from "../../conponents/pages/AsideRight";
import AsideLeft from "../../conponents/pages/AsideLeft";
import MainHomePage from "../../conponents/pages/MainHomePage";
import { useAuth } from "../../context/AuthContext";

function HomePage() {
    const { currentUser } = useAuth();

    return (
        <div className="header-fixed sidebar-enabled bg">
            <div className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainHomePage />
                <AsideRight name={currentUser.fullname} />
            </div>
        </div>
    );
}

export default HomePage;
