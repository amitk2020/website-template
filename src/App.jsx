import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./assets/Components/ContactForm.jsx";
import Header from './assets/Components/Header.jsx';
import Banner from './assets/Components/Banner.jsx';
import ImageSlider from './assets/Components/ImageSlider.jsx';
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />
      <ImageSlider />
      {/* Contact Section */}
      <main className="container my-5" id="contact">
        <ContactForm />
      </main>
      {/* Hero Section */}
      <Banner />
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="container p-4 my-5 border rounded bg-light"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Your Role
          </label>
          <select
            name="role[]"
            id="role"
            multiple
            className="form-select"
            required
          >
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
          <small className="form-text text-muted">
            Hold Ctrl (Windows) or ⌘ (Mac) to select multiple
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="form-control"
            required
          ></textarea>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>



      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;