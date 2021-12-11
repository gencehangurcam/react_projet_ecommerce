import React from 'react';

const footer = () => {
    return (
        <div className='gros'>
            <div className='g-card-container row m-5'>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                    <h3>Get in touch</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, cum?</p>
                    <div>
                        
                    </div>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                    <img src={img2} alt="img2" />
                    <div className='bloc-button'>
                        <button className='btn btn-light'>Discover</button>
                    </div>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                    <img src={img3} alt="imag3" />
                    <div className='bloc-button'>
                        <button className='btn btn-light'>Discover</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;