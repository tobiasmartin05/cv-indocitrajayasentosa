import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo_NoBg.svg'
const ShopPage = ({ addToCart }) => {

    const productsArray = api();


    const products = productsArray

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Products'} pagesub={'Industrial Automation Sensor'} />
            <section className="wpo-shop-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShopProduct
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);