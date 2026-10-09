import './services.css'
import { RiReactjsLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoAccessibilityOutline } from "react-icons/io5";

export function Services () {
    return(
        <section id="services" className="services">
            <div className="services-heading__container">
                <p className="services-pretitle pretitle">What I do</p>
                <div className="services-titles__container">
                    <h2 className="services-title title">Building the web, better.</h2>
                    <p className="services-subtitle subtitle">I bring product thinking, technical precision, and a business mindset to every digital experience.</p>
                </div>
            </div>

            <div className="services-text-grid__container">
                <div className="services__text-grid">
                    <span className="services-grid__icon">
                        <RiReactjsLine className='icon'/>
                        <span className='services-grid__number'>01</span>
                    </span>
                    <div className="services-grid-text__container">
                       <h3 className="services-grid__heading">React Development</h3> 
                       <p className="services-grid__description">Scalable, component-driven applications built with modern React and Javascript/TypeScript.</p>
                    </div>
                </div>

                <div className="services__text-grid">
                    <span className="services-grid__icon">
                        <FiLayers className='icon'/>
                        <span className='services-grid__number'>02</span>
                    </span>
                    <div className="services-grid-text__container">
                       <h3 className="services-grid__heading">Frontend Design</h3> 
                       <p className="services-grid__description">Thoughtful interfaces that turn complex ideas into clear, intuitive experiences.</p>
                    </div>
                </div>

                <div className="services__text-grid">
                    <span className="services-grid__icon">
                        <IoSpeedometerOutline className='icon'/>
                        <span className='services-grid__number'>03</span>
                    </span>
                    <div className="services-grid-text__container">
                       <h3 className="services-grid__heading">Performance Optimization</h3> 
                       <p className="services-grid__description">Fast, responsive websites tuned for excellent Core Web Vitals and conversions.</p>
                    </div>
                </div>

                <div className="services__text-grid">
                    <span className="services-grid__icon">
                        <IoAccessibilityOutline className='icon'/>
                        <span className='services-grid__number'>04</span>
                    </span>
                    <div className="services-grid-text__container">
                       <h3 className="services-grid__heading">Web Accessibility</h3> 
                       <p className="services-grid__description">Inclusive digital experiences that are usable by everyone and built to WCAG standards.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 