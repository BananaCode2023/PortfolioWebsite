import './ctaBlock.css'
import { FaArrowRight } from "react-icons/fa6";

export function CtaBlock () {
    return(
        <div id="ctaBlock">
            <div className="ctaBlock__heading_container">
                <p className="ctaBlock-pretitle pretitle">Have an idea?</p>
                <h2 className="ctaBlock-title title">Let's collaborate
and make it <span className="blue-title">real.</span></h2>
            </div>

            <div className="ctaBlock__col">
                <p className="ctaBlock-subtitle subtitle">I'm always open to thoughtful products, ambitious teams, and projects that make a meaningful difference.</p>
                <a href="mailto:peter.john.reyes0326@gmail.com" className='ctaBlock-explore__btn solid'>Start a conversation<FaArrowRight /></a>
            </div>
        </div>
    );
}