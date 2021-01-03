import React from 'react';

const AboutUsSection = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>About Us</h2>
                </div>

                <div className="row content text-justify">
                <div className="col-lg-6">
                    <p>
                    Analytical Data Research Solution (ADR) is an emerging full service technology solution provider with best business knowledge, responsibility and technical services to our valuable client to achieving their goal.
                    </p>
                    {/* <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul> */}
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    Our leadership value offer a dynamic atmosphere in which talented, creative and motivated people thrive. We reward it and groom it, Services we offer website design and development, data entry, data extraction, data mining, web research, Digital marketing according to our client requirement.
                    </p>
                    <a href="#services" className="btn-learn-more scrollto">Learn More</a>
                </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUsSection;