import './techSection.css';
import technologies from "../data/technologies.json";

export function TechSection () {
    return(
        <section id="techSection">
            <div className="techSection__container">
                <div className="techSection-heading__container">
                    <p className="techSection-pretitle pretitle">Technologies</p>
                    <div className="techSection-titles__container">
                        <h2 className="techSection-title title">Tools I trust.</h2>
                        <p className="techSection-subtitle subtitle">A modern toolkit selected to create dependable, scalable products without unnecessary complexity.</p>
                    </div>
                </div>
                
                <div className='techSection-technologies__container'>
                    {technologies.map((tech) => (
                        <div 
                            key={tech.id}
                            className='techSection__technology hollow'
                        >
                        {tech.technology}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}