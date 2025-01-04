import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/'>About me</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Me</NavLink>
            </li>
            <li>
                <NavLink to='/resume'>Resume</NavLink>
            </li>
        </ul>
    )
}