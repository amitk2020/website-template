// src/ContactForm.jsx
function ContactForm() {
    return (
        <form
            action="https://formsubmit.co/amit.k2012@me.com"
            method="POST"
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "400px",
                margin: "2rem auto",
                gap: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff"
            }}
        >
            <h3>Contact Us</h3>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required />
            <button type="submit">Send Message</button>

            {/* Optional hidden fields */}
            <input type="hidden" name="_subject" value="New message from your website" />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    );
}


export default ContactForm;
