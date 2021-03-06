import React, { useState, useEffect } from 'react';
import { db, realtime } from '../../firebase';
import AsideRight from '../../conponents/pages/AsideRight';
import AsideLeft from '../../conponents/pages/AsideLeft';
import MainHomePage from '../../conponents/pages/MainHomePage';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

function HomePage() {
    const { currentUser } = useAuth();
    
    const [id] = useState(currentUser.uid);
    const [input, setInput] = useState({
        fullname: '',
        phone: '',
        address: '',
    });

    const [data, setData] = useState({
        id_post: '',
        id_shop: '',
        km: '',
        noi_giao: '',
        thoi_gian: '',
        phi_giao: '',
        phi_ung: '',
        status: '',
        ghi_chu: '',
    });

    //fetch user infor
    useEffect(() => {
        async function fetchUserInfor() {
            try {
                await db
                    .collection('ShopProfile')
                    .doc(id)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            setInput(doc.data());
                        } else {
                            console.log('No such document!');
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserInfor();
    }, []);

    //fetch data post order
    useEffect(() => {
        async function fetchOrder() {
            try {
                await realtime.ref('OrderStatus/' + id).on('value', (snapshot) => {
                    setData(snapshot.val());
                    console.log(snapshot.val());
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrder();
    }, []);

    async function handleDeleteOrder(id){
        try {
            await realtime.ref('newsfeed/' + id).remove()
            await realtime.ref('OrderStatus/'+ currentUser.uid + "/" + id).remove()
            await realtime.ref('newsfeed/' + id).remove()
        } catch(e){
            console.log(e)
        }
    }
    return (
        <div className="header-fixed sidebar-enabled bg">
            <div className="d-flex flex-row flex-column-fluid page">
                <AsideLeft />
                <MainHomePage datas={data} DeleteOrder={handleDeleteOrder} />
                <AsideRight name={input.fullname} />
            </div>
        </div>
    );
}

export default HomePage;
