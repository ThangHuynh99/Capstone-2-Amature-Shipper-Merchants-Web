import React from "react";
import AsideRight from "./pages/AsideRight";
import AsideLeft from "./pages/AsideLeft";
import MainChangePw from "./pages/MainChangePw";

function Changepw(props) {
    return (
        <body className="header-fixed header-mobile-fixed sidebar-enabled bg">
            <div className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainChangePw />
                <AsideRight />
            </div>
        </body>
    );
}

export default Changepw;
