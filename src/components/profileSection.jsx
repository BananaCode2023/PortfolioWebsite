import './profileSection.css'
import professionalPhoto from '../assets/professional-photo.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuArrowDown } from "react-icons/lu";

export function ProfileSection () {
    return(
        <section id='profileSection'>
            <div className="profile__container">
                <div className="profile-bio__container">
                    <div className='profile-status__container'>
                        <span className='profile-status__light'></span>
                        <span className='profile-status'>Available for selected projects</span>
                    </div>

                    <div className='profile-pretitle pretitle'>
                        <p>Web Developer • Entrepreneur</p>
                    </div>

                    <h1 className='profile__title'>
                        <span className='profile-title__solid'>Peter John</span>
                        <span className='profile-title__hollow'>Reyes</span>
                    </h1>

                    <p className='profile-subtitle'>Frontend Web Developer based in Batangas, Philippines. BS Entrepreneurship graduate. 2 years at Luxury Presence. Passionate about React and clean code.</p>

                    <div className='profile-btns__container'>
                        <a href="#projects" className='solid profile-explore__btn'>Explore my work<FaArrowRight /></a>
                        <a href="mailto:peter.john.reyes0326@gmail.com" className='profile-email__link'>Let's Talk <FaArrowUpRightFromSquare /></a>
                    </div>
                </div>

                <div className='profile-image__container'>
                    <div className='profile-image__orbits'>
                        <img src={professionalPhoto} alt="Professional Portrait of Peter John Reyes" />
                    </div>
                </div>
            </div>

            <a href="#services" className='profile-discover__link'><span>scroll to discover</span><LuArrowDown /></a>
        </section>
    )
}