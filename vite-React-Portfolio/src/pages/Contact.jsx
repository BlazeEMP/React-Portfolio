import '../styles/pages/contact.css';

export default function Contact() {
    return (
        <div className="content-section">
            <h2>Contact Info</h2>
            <form className='contact-form'>
                <label htmlFor="fname" className='form-label'>First Name:</label>
                <input name="fname" className='form-input'/>
                <label htmlFor="lname" className='form-label'>Last Name:</label>
                <input name="lname" className='form-input'/>
                <label htmlFor="email" className='form-label'>Contact E-mail:</label>
                <input name="email" type="email" className='form-input'/>
                <label htmlFor="message" className='form-label'>Message:</label>
                <textarea name="message" className='form-input form-message'/>
                <button type="submit" className='contact-button'>Reach out!</button>
            </form>
        </div>)
}