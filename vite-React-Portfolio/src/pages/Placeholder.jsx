import { NavLink } from 'react-router-dom';

export default function Placeholder() {
    return (
        <div className="content-section">
            <h2>Uh oh!</h2>
            <p>There isn't a deployed version of this application...  Check back for a demonstration video on YouTube or Google Drive another time.</p>
            <NavLink to='/Portfolio'>Back to portfolio page</NavLink>
        </div>)
}