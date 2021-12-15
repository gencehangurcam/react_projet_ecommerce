import React from 'react';
import Footer from '../components/footer/footer';
import BannerBlack from '../components/banner-black/banner-black';
import Map from "../components/customMap/customMap"
import Navigation from "../components/navigation/navigation"

const Contact = () => {
    return (

        <div>
            <Navigation />
            <BannerBlack title="Contact" />
            <Map width="100%" height="600px"/>
            <div>
                <Footer />
            </div>
        </div>
    );
};


export default Contact