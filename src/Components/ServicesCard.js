import React from 'react';

const ServicesCard = props => {
    return (
        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-4 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
                <div className="icon"><i className={props.icon}></i></div>
                <h4><a href="">{props.title}</a></h4>
                <p>{props.description}</p>
                <div className="mt-4">
                    <a href=""><button type="button" className="btn-explore">Explore</button></a>
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;