import React, {useState, useEffect} from "react";
import {db} from "../../firebase";
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

    useEffect(() => {
        async function fetchUserInfor() {
            try {
                    db
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
                <MainHomePage />
                <AsideRight name={input.fullname} />
            </div>
        </div>
    );
}

export default HomePage;
