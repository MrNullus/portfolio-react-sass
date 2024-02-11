import './style.sass';

export const ProjectArticle = ({ title, description, link /* optional details */ }) => {
    return (
        <article className="project-article">
            <h3>{title}</h3>
            <p>{description}</p>
            <br />
            {link && <a className='btn' target='_blank' href={link}>View Project</a>}
            {/*iframe && <iframe src={iframe} title={title} />}
            {/* Add links, screenshots, or other details if provided */}
        </article>
    );
};
