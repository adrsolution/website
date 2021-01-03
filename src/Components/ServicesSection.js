import React from 'react';
import ServicesCard from './ServicesCard';

const ServicesSection = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                <div className="row justify-content-center">
                    <ServicesCard icon="bx bxs-flask" title="SDS Management Services" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
                    
                    <ServicesCard icon="bx bx-support" title="Administrative Support" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bx-analyse" title="Data Analytics Services" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bxs-data" title="Data Processing" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bx-edit-alt" title="Data Entry" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bxl-internet-explorer" title="Web Searching" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
                    
                    <ServicesCard icon="bx bx-file" title="Data Conversion Services" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bx-scan" title="Scanning and Indexing Services" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                    <ServicesCard icon="bx bx-code-alt" title="IT Services" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

                </div>

            </div>
        </section>
    );
}

export default ServicesSection;