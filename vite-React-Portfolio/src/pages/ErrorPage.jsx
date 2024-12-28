export default function ErrorPage() {
    return (
        <div className="content-section">
            <h2>Uh oh!</h2>
            <p>You aren't supposed to be here...</p>
            <Link to='/'>About me</Link>
        </div>)
}