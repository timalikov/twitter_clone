import React from 'react'
import '../../../css/Pages/About.css'
import PageHeader from "../../General/PageHeader";
import FirstSection from "../../General/Sections/FirstSection";
import SecondSection from "../../General/Sections/SecondSection";
import ThirdSection from "../../General/Sections/ThirdSection";
import ArrowUL from "../../General/ArrowUL";
import Skills from "../../General/Skills";
import ClientMessage from "../../General/ClientMessage";

function About() {
    return (
        <div className="about">
            <PageHeader text='About us' />
            <FirstSection
                title='Donec faucibus ultricies congue'
                text='Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            >
                <ArrowUL
                    title='Why Choose Us ?'
                    items={[
                        'Quisque at massa ipsum',
                        'Maecenas a lorem augue, egestas',
                        'Cras vitae felis at lacus eleifend',
                        'Etiam auctor diam pellentesque',
                        'Nulla ac massa at dolor',
                        'Condimentum eleifend vitae vitae',
                    ]}
                />
                <Skills />
                <ClientMessage />
            </FirstSection>
            <SecondSection title='Our Team' >
                <div className="items">
                    <div className="item">
                        <p>Malikov Temirlan</p>
                    </div>
                    <div className="item">
                        <p>Khakhnazar Nurmuhammed</p>
                    </div>
                </div>
            </SecondSection>
            <ThirdSection />
        </div>
    );
}

export default About;