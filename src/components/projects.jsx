import './projects.css'
import projects from "../data/projects.json";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CtaBlock } from './ctaBlock';

export function Projects () {
    return(
        <section id="projects">
            <div className='projects__container'>
                <div className="projects-heading__container">
                    <p className="projects-pretitle pretitle">Selected projects</p>
                    <div className="projects-titles__container">
                        <h2 className="projects-title title">Featured work.</h2>
                        <p className="projects-subtitle subtitle">A selection of digital experiences built with purpose, clarity, and close attention to detail.</p>
                    </div>
                </div>
                
                <div className='projects-grid__container'>
                {projects.map((project) => (
                    <div className='projects-grid__card' key={project.id}>
                        <div className='projects-card-image__container'>
                            <p className='project-tag'>{project.projectCategory}</p>
                            <img src={project.projectImage} alt={project.projectName} className='project-image' />
                        </div>
                        <div className='projects-card-text__container'>
                            <div className='project-text__top'>
                                <h3 className='project-card__heading'>{project.projectName}</h3>
                                <p className='project-card__description'>{project.projectDescription}</p>
                            </div>
                            <div className='project-text__bottom'>
                                <p className='technology-used'>
                                    {project.projectTechnologiesUsed.join(" / ")}
                                </p>
                                <a href={project.projectLink} target="_blank" rel="noopener" className='project-link'>View Project<FaArrowUpRightFromSquare /></a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                
                <CtaBlock/>
            </div>
        </section>
    );
}