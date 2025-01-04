import { NavLink } from 'react-router-dom';

const ProjectLinks = (props) => {
    return (
        <div className="project-links">
            <NavLink to={props.githubLink} className="links">GitHub Repo</NavLink>
            <NavLink to={props.appLink} className="links">Application</NavLink>
        </div>
    )
}

export default ProjectLinks;