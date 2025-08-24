import React from 'react';
import { Link, NavLink, useLocation, matchPath } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';

const Header = (props) => {
    const { pathname } = useLocation();

    const scrollTop = () => window.scrollTo(10, 0);
    const ClickHandler = () => window.scrollTo(10, 0);

    // Semua route yang termasuk kategori Products
    const productRoutes = [
        '/product',
        '/product2',
        '/product3',
        '/product4',
        '/product5',
        '/product6',
    ];

    // Parent "Products" dianggap aktif jika salah satu route produk match
    const isProductsActive = productRoutes.some((p) =>
        !!matchPath({ path: p, end: true }, pathname)
    );

    return (
        <header id="header" className={props.hclass}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        {/* ===== MOBILE BAR ===== */}
                        <div className="d-flex d-lg-none align-items-center justify-content-between py-2 w-100">
                            {/* Kiri: hamburger (lebar tetap) */}
                            <div style={{ width: 56 }} className="d-flex justify-content-center align-items-center">
                                <MobileMenu />
                            </div>

                            {/* Tengah: brand */}
                            <div className="navbar-header d-flex align-items-center flex-nowrap flex-grow-1 justify-content-center">
                                <NavLink to="/" className="navbar-brand" onClick={scrollTop}>
                                    <img
                                        src={props.Logo}
                                        alt="logo"
                                        style={{ height: 'clamp(26px, 5vw, 40px)' }}
                                    />
                                </NavLink>

                                <h6
                                    className={`mb-0 fw-bold text-nowrap ${pathname === '/' ? '' : 'text-white'}`}
                                    style={{
                                        marginLeft: 8,
                                        color: pathname === '/' ? '#000' : '#fff',
                                        lineHeight: 1.15,
                                        fontSize: 'clamp(12px, 2.4vw, 18px)',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    CV INDO CITRA JAYA SENTOSA
                                </h6>
                            </div>

                            {/* Kanan: tombol WA (lebar sama dgn kiri) */}
                            <div style={{ width: 56 }} className="d-flex justify-content-center align-items-center">
                                <a
                                    href="https://wa.me/6281909458464"
                                    className="btn p-0 border-0 bg-transparent"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fi flaticon-phone-call-1" style={{ fontSize: 22, color: '#ff6a00' }} />
                                </a>
                            </div>
                        </div>

                        {/* ===== DESKTOP BAR ===== */}
                        <div className="row align-items-center d-none d-lg-flex">
                            {/* Kiri: logo + judul */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-8">
                                <div className="navbar-header d-flex align-items-center flex-nowrap">
                                    <NavLink to="/" className="navbar-brand" onClick={scrollTop}>
                                        <img src={props.Logo} alt="logo" style={{ height: 40 }} />
                                    </NavLink>

                                    <h6
                                        className={`mb-0 fw-bold text-nowrap ${pathname === '/' ? '' : 'text-white'}`}
                                        style={{
                                            marginLeft: 8,
                                            color: pathname === '/' ? '#000' : '#fff',
                                            lineHeight: 1.15,
                                            fontSize: 'clamp(12px, 1.55vw, 18px)',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        CV INDO CITRA JAYA SENTOSA
                                    </h6>
                                </div>
                            </div>

                            {/* Tengah: nav */}
                            <div className="col-lg-5">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder show">
                                    <ul className="nav navbar-nav mb-0 justify-content-center">
                                        <li className="menu-item-has-children">
                                            <NavLink
                                                to="/"
                                                end
                                                onClick={scrollTop}
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                Home
                                            </NavLink>
                                        </li>

                                        <li className="menu-item-has-children">
                                            <NavLink
                                                to="/service"
                                                onClick={scrollTop}
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                Service
                                            </NavLink>
                                        </li>

                                        <li className="menu-item-has-children">
                                            <NavLink
                                                to="/project"
                                                onClick={scrollTop}
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                Project
                                            </NavLink>
                                        </li>

                                        {/* Products (parent aktif jika salah satu sub-route aktif) */}
                                        <li className={`menu-item-has-children ${isProductsActive ? 'active' : ''}`}>
                                            <NavLink
                                                to="/product"
                                                onClick={scrollTop}
                                                className={({ isActive }) =>
                                                    isActive || isProductsActive ? 'active' : ''
                                                }
                                            >
                                                Products
                                            </NavLink>

                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink
                                                        to="/product"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        Industrial Automation Sensor
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/product2"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        PLC
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/product3"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        Automatic Motor & Drive
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/product4"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        Electrical Installation Equipment
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/product5"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        Pneumatic Equipment
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/product6"
                                                        onClick={ClickHandler}
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                    >
                                                        IT Equipment
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <NavLink
                                                to="/contact"
                                                onClick={scrollTop}
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Kanan: CTA */}
                            <div className="col-lg-3">
                                <div className="header-right text-lg-end">
                                    <Link className="theme-btn" to="/contact" onClick={scrollTop}>
                                        <i className="fi flaticon-phone-call-1 me-2"></i>
                                        <span>Contact Us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    carts: state.cartList.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Header);
