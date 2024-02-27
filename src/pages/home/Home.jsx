import React from "react";
import Header from "../../layouts/Header.jsx";
import Footer from "../../layouts/Footer.jsx";
import useScrollToTop from "../../utils/ScrollToTop.jsx";
import {FaBuilding, FaHome, FaUtensils} from "react-icons/fa";
import {GiSofa} from "react-icons/gi";
import {IoBed, IoDesktopSharp} from "react-icons/io5";
import {FaKitchenSet} from "react-icons/fa6";
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";
import {MdVilla} from "react-icons/md";

function Home() {
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
                            <h1 className="mb-2">Chào mừng đến với VivaDecor</h1>
                            <h2 className="caption">Hệ thống báo giá thi công nội thất</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-1 section-heading">
                            <h1 className="mb-5">Dự án đã thi công</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-4">
                        <div className="col-2">
                            <button type="button" className="btn btn-outline-dark btn-block icon-button">
                                <FaBuilding className="icon-a" size={'2em'}/>
                                CHUNG CƯ
                            </button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-outline-dark btn-block icon-button">
                                <FaHome className="icon-a" size={'2em'}/>
                                NHÀ PHỐ
                            </button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-outline-dark btn-block icon-button">
                                <MdVilla className="icon-a" size={'2em'}/>
                                BIỆT THỰ
                            </button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-outline-dark btn-block icon-button">
                                <IoDesktopSharp className="icon-a" size={'2em'}/>
                                VĂN PHÒNG
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_1.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_2.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_3.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_1.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_2.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_3.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-right" style={{fontSize:"130%"}}>
                        <Link to="/finished-project">Xem thêm <span className="icon-arrow-circle-right"></span></Link>
                    </div>
                </div>
            </div>
            <div className="py-5 quick-contact-info">
                <div className="container">
                    <div className="col-md-12 mx-auto text-center mb-1">
                        <h1 className="mb-3 text-white">Thành tựu của chúng tôi</h1>
                        <p className="text-white">Với VivaDecor thành tựu chính là sự công nhận và lời khen ngợi từ quý
                            khách hàng đã sử dụng sản phẩm và dịch vụ của chúng tôi.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div>
                                <h1 className="text-white">+2500</h1>
                                <p className="mb-0 text-justify">Xưởng sản xuất rộng hơn 2500m2 với máy móc đạt tiêu
                                    chuẩn châu Âu đáp ứng mọi yêu cầu</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <h1 className="text-white">95%</h1>
                                <p className="mb-0 text-justify">Sản phẩm sản xuất thi công hoàn thiện giống bản vẽ
                                    thiết kế 3D 95%</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <h1 className="text-white">+400</h1>
                                <p className="mb-0 text-justify">Công trình được bàn giao hoàn thiện cho quý khách. Bao
                                    gồm các dự án Căn hộ cao cấp, Nhà Phố, Biệt thự, Nhà hàng, Quán cà phê….</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <h3 className="text-white mb-4" style={{fontSize: "2em"}}>Đơn vị 3 KHÔNG</h3>
                                <p className="mb-0 text-justify">Không Thợ Khoán<br/>
                                    Không Phân Phối Trung Gian<br/>
                                    Không Phát Sinh Chi Phí</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-1 section-heading">
                            <h1 className="mb-3">Sản Phẩm Nội Thất</h1>
                            <h5>Các sản phẩm của chúng tôi</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_1.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_2.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_3.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-2 p-1">
                            <div className="hotel-room text-center">
                                <a href="#" className="d-block mb-0 thumbnail"><img src="/images/img_3.jpg" alt="Image"
                                                                                    className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-right" style={{fontSize: "130%"}}>
                        <Link to="/showroom">Xem thêm <span className="icon-arrow-circle-right"></span></Link>
                    </div>
                </div>
            </div>
            <div className="py-5 upcoming-events"
                 style={{backgroundImage: 'url(/images/hero_4.jpg)', backgroundAttachment: 'fixed'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="text-white">Xem bảng giá</h2>
                            <Link to="/quotation-calculator" className="text-white btn btn-outline-warning rounded-0 text-uppercase">Nhận Báo
                                Giá Ngay!</Link>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-white">THI CÔNG NỘI THẤT VIVADECOR</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-1 section-heading">
                            <h1 className="mb-3">Bài viết</h1>
                            <h5>Các bài viết gần đây</h5>
                        </div>
                    </div>
                    <div className="row bg-white mb-5 pt-4">
                        <div className="col-3">
                            <div className="media-with-text">
                                <div className="img-border-sm mb-4">
                                    <div className="popup-vimeo image-play">
                                        <img src="/images/img_2.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="media-with-text">
                                <h2 className="heading mb-0" style={{fontSize: '25px'}}>Lorem Ipsum Dolor Sit
                                    Amet</h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018</span>
                                <p style={{color: '#00000080'}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Optio dolores culpa qui
                                    aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white mb-5 pt-4">
                        <div className="col-3">
                            <div className="media-with-text">
                                <div className="img-border-sm mb-4">
                                    <div className="popup-vimeo image-play">
                                        <img src="/images/img_3.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="media-with-text">
                                <h2 className="heading mb-0" style={{fontSize: '25px'}}>Lorem Ipsum Dolor Sit
                                    Amet</h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018</span>
                                <p style={{color: '#00000080'}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Optio dolores culpa qui
                                    aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white mb-5 pt-4">
                        <div className="col-3">
                            <div className="media-with-text">
                                <div className="img-border-sm mb-4">
                                    <div className="popup-vimeo image-play">
                                        <img src="/images/img_3.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="media-with-text">
                                <h2 className="heading mb-0" style={{fontSize: '25px'}}>Lorem Ipsum Dolor Sit
                                    Amet</h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018</span>
                                <p style={{color: '#00000080'}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Optio dolores culpa qui
                                    aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right" style={{fontSize: "130%"}}>
                        <Link to="/blog">Xem thêm <span className="icon-arrow-circle-right"></span></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home