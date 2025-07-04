import { useState } from "react";

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert("Oops! Something went wrong. Try again later."));
    };

    return (
        <>
            {!submitted ? (
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    onSubmit={handleSubmit}
                    className="row g-3"
                >
                    {/* Required for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />

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

                    {/* reCAPTCHA support (optional but recommended) */}
                    <div className="col-12" data-netlify-recaptcha="true"></div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </div>
                </form>
            ) : (
                <div className="alert alert-success mt-3" role="alert">
                    ✅ Message sent successfully! We'll get back to you soon.
                </div>
            )}
        </>
    );
}

export default ContactForm;