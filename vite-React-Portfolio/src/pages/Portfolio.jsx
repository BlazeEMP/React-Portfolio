import '../styles/pages/portfolio.css';
import Project from '../components/Project'

export default function Portfolio() {
    return (
        <div className="content-section">
            <h2>Portfolio</h2>
            <div className="card-container">
                <Project
                    title="Water tank controller"
                    bgImg="./pump.jpg"
                    githubLink="https://github.com/BlazeEMP/Septic_Pump_Control_V2/tree/main"
                    appLink="/Placeholder"
                />
                <Project
                    title="Rossum Runners Movie Reviews"
                    bgImg="./tickets.png"
                    githubLink="https://github.com/BlazeEMP/rossum-runners"
                    appLink="https://blazeemp.github.io/rossum-runners/"
                />
                <Project
                    title="README Generator"
                    bgImg="./rmgencode.png"
                    githubLink="https://github.com/BlazeEMP/README-Generator"
                    appLink="https://drive.google.com/file/d/18R9nySBP2uzZaZT4POpGhVXiQEzZPobD/view?usp=sharing"
                />
                <Project
                    title="Company Manager"
                    bgImg="./IMG_1955.jpg"
                    githubLink="https://github.com/BlazeEMP/Company-manager"
                    appLink="https://drive.google.com/file/d/1UNVgWh7Y6sR_xXMGqQEcjBL98poF-25I/view?usp=sharing"
                />
                <Project
                    title="Study Guide Website"
                    bgImg="./bridge.JPG"
                    githubLink="https://github.com/BlazeEMP/prework-study-guide"
                    appLink="https://blazeemp.github.io/prework-study-guide/"
                />
                <Project
                    title="Vehicle Builder"
                    bgImg="./racineDock.JPG"
                    githubLink="https://github.com/BlazeEMP/Vehicle-Builder"
                    appLink="https://drive.google.com/file/d/19gf1-3ixdLCeDe35j-T_b7WZNJTIIUno/view?usp=sharing"
                />
            </div>
        </div>
    )
}