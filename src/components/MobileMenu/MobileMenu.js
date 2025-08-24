import React, { Fragment, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import './style.css';

const menus = [
    { id: 1, title: 'Home', link: '/' },
    { id: 6, title: 'Service', link: '/service' },
    { id: 7, title: 'Project', link: '/project' },
    {
        id: 8,
        title: 'Product',
        link: '/product',
        submenu: [
            { id: 10, title: 'Industrial Automation Sensor', link: '/product' },
            { id: 11, title: 'PLC', link: '/product2' },
            { id: 12, title: 'Automatic Motor & Drive', link: '/product3' },
            { id: 13, title: 'Electrical Installation Equiments', link: '/product4' },
            { id: 14, title: 'Pneumatic Equipment', link: '/product5' },
            { id: 15, title: 'IT Equipment', link: '/product6' },
        ],
    },
    { id: 9, title: 'Contact', link: '/contact' },
];

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);
    const location = useLocation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false);
    };

    // helper untuk cek path aktif (mendukung basename)
    const isPathActive = (to, end = false) =>
        !!matchPath({ path: to, end }, location.pathname);

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item) => {
                        // aktifkan parent jika salah satu submenu aktif
                        const parentActive = item.submenu?.some(s => isPathActive(s.link));

                        return (
                            <ListItem
                                key={item.id}
                                className={`${item.id === openId || parentActive ? 'active' : ''} ${item.submenu ? 'has-sub' : ''}`}
                            >
                                {item.submenu ? (
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                            {item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'} />
                                        </p>

                                        <Collapse in={item.id === openId || parentActive} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                {item.submenu.map((submenu) => (
                                                    <ListItem key={submenu.id}>
                                                        <NavLink
                                                            to={submenu.link}
                                                            onClick={ClickHandler}
                                                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                                                        >
                                                            {submenu.title}
                                                        </NavLink>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                ) : (
                                    <NavLink
                                        to={item.link}
                                        onClick={ClickHandler}
                                        // end untuk Home supaya hanya aktif di "/" persis
                                        className={({ isActive }) => (isActive ? 'active' : undefined)}
                                        end={item.link === '/'}
                                    >
                                        {item.title}
                                    </NavLink>
                                )}
                            </ListItem>
                        );
                    })}
                </ul>
            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
