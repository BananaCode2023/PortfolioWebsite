import './getInTouchSection.css'
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

export function GetInTouchSection () {
    return(
        <section id='getInTouchSection'>
            <div className="getInTouch__container">
                <div className="getInTouch__heading_container">
                    <p className="getInTouch-pretitle pretitle">Get in touch</p>
                    <h2 className="getInTouch-title title">Let's create something
    <span className="transparent-title"> exceptional.</span></h2>
                </div>

                <div className="getInTouch__col">
                    <a href="mailto:peter.john.reyes0326@gmail.com" className='contact__container contact-email'>
                        <MdOutlineEmail className='icon'/>
                        <div className='contact-details'>
                            <small>Email me</small>
                            <p>peter.john.reyes0326@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+639208983562" className='contact__container contact-phone'>
                        <IoCallOutline className='icon'/>
                        <div className='contact-details'>
                            <small>Call me</small>
                            <p>+63 920 898 3562</p>
                        </div>
                    </a>
                    
                    <a href="CV_PETER_JOHN_REYES.pdf" download className='getInTouch-resume__btn hollow'><TfiDownload />Download Resume</a>
                </div>
            </div>
        </section>
    );
}