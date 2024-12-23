import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav-links'>
            <li>
                <Link to='/'>About me</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Me</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>
    )
}