import ProjectTitle from "./Project-Card/ProjectTitle";
import ProjectLinks from "./Project-Card/ProjectLinks";

const Project = (props) => {
    return (
        <div className="project-card">
            <ProjectTitle
                title={props.title}
                bgImg={props.bgImg}
            />
            <ProjectLinks
                githubLink={props.githubLink}
                appLink={props.appLink}
            />
        </div>
    )
}

export default Project;