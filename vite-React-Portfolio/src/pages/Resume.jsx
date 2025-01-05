import '../styles/pages/resume.css';

export default function Resume() {
    return (
        <div className="content-section">
            <h2>Resume</h2>
            <p>
                It's important to know who you want to work with. Download my resume here and take a look!
            </p>
            <div className='resume-link-container'>
                <a href="https://docs.google.com/document/d/1lVXtTj2VvZO5hBZav0dI20Gu58boaEBrBxorxWOQVfU/edit?usp=sharing" target="_blank" rel="noreferrer" className='resume-link'>Download Resume</a>
            </div>
            <ul>
                <span>Developer experience and skills in...</span>
                <li>Front end HTML, CSS, Bootstrap, JS</li>
                <li>Framework developer flow using React and Vite build tools</li>
                <li>Back end Postgres database usage</li>
            </ul>
        </div>)
}