import '../styles/pages/contact.css';

export default function Contact() {
    return (
        <div className="content-section">
            <h2>Contact Info</h2>
            <form className='contact-form'>
                <label for="fname" className='form-label'>First Name:</label>
                <input name="fname" className='input-label'/>
                <label for="lname" className='form-label'>Last Name:</label>
                <input name="lname" className='input-label'/>
                <label for="email" className='form-label'>Contact E-mail:</label>
                <input name="email" className='input-label'/>
                <label for="message" className='form-label'>Message:</label>
                <input name="message" className='input-label'/>
                <button type="submit" className='contact-button'>Reach out!</button>
            </form>
        </div>)
}