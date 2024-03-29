import React, {useEffect, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import useScrollToTop from "../../utils/ScrollToTop.jsx";
import Header from "../../layouts/Header.jsx";
import Footer from "../../layouts/Footer.jsx";


function Page403(){
    useScrollToTop()
    return (
        <div>
            <Header/>
            <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(/images/hero_4.jpg)'}}
                 data-aos="fade"
                 data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 text-center" data-aos="fade">
                            <h1 className="mb-2">403</h1>
                            <h2 className="caption">Cấm truy cập</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page403