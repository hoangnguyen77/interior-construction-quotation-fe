import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {getRoleByToken, isToken, isTokenExpired, logout} from "../utils/JwtService.js";
import { jwtDecode } from "jwt-decode";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="site-wrap">

            <div className="site-navbar-wrap js-site-navbar bg-white">

                <div style={{marginLeft: '50px', marginRight: '20px'}}>
                    <div className="site-navbar bg-light">
                        <div className="py-1">
                            <div className="row align-items-center">
                                <div className="col-1">
                                    <h2 className="mb-0 site-logo"><Link to="/">VivaDecor</Link></h2>
                                </div>
                                <div className="col-9">
                                    <nav className="site-navigation text-center" role="navigation">
                                        <div className="container" style={{padding: '0'}}>

                                            <div className="d-inline-block d-lg-none  ml-md-0 mr-auto py-3"><a
                                                href="#" className="site-menu-toggle js-menu-toggle"><span
                                                className="icon-menu h3"></span></a></div>
                                            <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                <li className={location.pathname.startsWith("/home") ? "active" : ""}>
                                                    <Link to="/">Trang chủ</Link>
                                                </li>
                                                <li className={location.pathname.startsWith("/product") ? "active" : ""}>
                                                    <Link to="/product">Showroom</Link>
                                                </li>
                                                <li className={location.pathname.startsWith("/finished-project") ? "active" : ""}>
                                                    <Link to="/finished-project">Dự án đã thi công</Link>
                                                </li>
                                                <li className={location.pathname.startsWith("/blog") ? "active" : ""}>
                                                    <Link to="/blog">Bài Viết</Link></li>

                                                <li className={location.pathname.startsWith("/about") ? "active" : ""}>
                                                    <Link to="/about">Về chúng tôi</Link></li>

                                                <li className={location.pathname.startsWith("/quotation-calculator") || (getRoleByToken() === "CUSTOMER" && location.pathname === "/quotation-calculator") ? "active" : ""}>
                                                    <Link
                                                        to={getRoleByToken() === "ADMIN" ? "/admin" : "/quotation-calculator"}>{getRoleByToken() === "ADMIN" ? "Dashboard" : "Báo giá"}</Link>
                                                </li>


                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {
                                    (isToken() && isTokenExpired(localStorage.getItem('token'))) ?
                                        (
                                            <div className="col-2">
                                                <a className="nav-link dropdown-toggle text-center site-logo custom-dropdown-toggle"
                                                   href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false" style={{color: '#000'}}>
                                                    <img src="/images/user.png" alt=""/>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {
                                                        (getRoleByToken() === "ADMIN") ? (
                                                            <React.Fragment>
                                                                <Link className="dropdown-item"
                                                                      to="/admin">Dashboard</Link>
                                                                <div className="dropdown-divider"></div>
                                                            </React.Fragment>
                                                        ) : (
                                                            <React.Fragment>
                                                                <Link className="dropdown-item" to="/customer-dashboard">Thông tin của
                                                                    bạn</Link>
                                                                {/*<Link className="dropdown-item" to="/info">Thông tin của*/}
                                                                {/*    bạn</Link>*/}
                                                                {/*<Link className="dropdown-item"*/}
                                                                {/*      to="/customer-quotation">Báo giá của bạn</Link>*/}
                                                                <div className="dropdown-divider"></div>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    <a className="dropdown-item" style={{cursor: "pointer"}}
                                                       onClick={() => {
                                                           logout(navigate);
                                                       }}>Đăng xuất</a>
                                                </div>

                                            </div>
                                        )
                                        :
                                        (
                                            <div className="col-2">
                                                <Link to="/login" className="btn btn-secondary" style={{color: " npm"}}>ĐĂNG
                                                    NHẬP</Link>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header