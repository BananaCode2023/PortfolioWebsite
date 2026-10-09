import './header.css'
import { TfiDownload } from "react-icons/tfi";

export function Header () {
    return(
        <header>
            <a href="/" className='heading__logo'>
                <span className="pjlogo">PJ</span><span className="rlogo">R</span>
            </a>
            <div className="heading__anchors">
                <a href="#services" className="heading-anchor__link">Expertise</a>
                <a href="#projects" className="heading-anchor__link">Work</a>
                <a href="#getInTouchSection" className="heading-anchor__link">Contact</a>
            </div>
            <a href="CV_PETER_JOHN_REYES.pdf" download className="hollow heading-resume__btn"><TfiDownload />Resume</a>
        </header>
    );
}