import '../styles/pages/portfolio.css';
import Project from '../components/Project'

export default function Portfolio() {
    return (
        <div className="content-section">
            <h2>Portfolio</h2>
            <div className="card-container">
                <Project
                    title="Water tank controller"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
                <Project
                    title="Place 2"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
                <Project
                    title="Place 3"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
                <Project
                    title="Place 4"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
                <Project
                    title="Place 5"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
                <Project
                    title="Place 6"
                    bgImg=""
                    githubLink=""
                    appLink=""
                />
            </div>
        </div>
    )
}