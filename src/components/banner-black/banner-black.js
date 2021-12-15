import React from 'react';
import "./banner-black.scss"


const BannerBlack = ({
    title
}) => {



    return (
        <div className=' bannerblack d-flex'>
            <h1>{title}</h1>
        </div>
    );
};

export default BannerBlack;