import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer () {
    return(
        <footer id="footer">
            <div className="footer__container">
                <small>© {new Date().getFullYear()} Peter John Reyes.</small>
                <div className="footer-links__container">
                    <a 
                        href="https://www.linkedin.com/in/peter-john-reyes/" target="_blank" 
                        rel="noopener" 
                        className="footer__link"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a 
                        href="https://github.com/BananaCode2023/"  target="_blank" 
                        rel="noopener" 
                        className="footer__link"
                    >
                        <FaGithub /> Github
                    </a>
                </div>
            </div>
        </footer>
    );
}