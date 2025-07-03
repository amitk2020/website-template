// src/ContactForm.jsx

function ContactForm() {
    return (
        <form
            action="https://formsubmit.co/amit.k2012@me.com"
            method="POST"
            className="row g-3"
        >
            <h3 className="mb-4">Contact Us</h3>

            <div className="col-md-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-control"
                />
            </div>

            <div className="col-md-6">
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-control"
                />
            </div>

            <div className="col-12">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="form-control"
                ></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </div>

            {/* Hidden fields for Formsubmit */}
            <input type="hidden" name="_subject" value="New message from your website" />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    );
}

export default ContactForm;