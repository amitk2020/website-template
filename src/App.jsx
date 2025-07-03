import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./assets/Components/ContactForm.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 mb-0">My Company</h1>
          <nav>
            <a href="#" className="text-white me-3 text-decoration-none">Home</a>
            <a href="#contact" className="text-white text-decoration-none">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container text-center py-5">
        <h1 className="text-primary">Welcome to My Bootstrap + React App</h1>
        <p className="lead">We provide awesome services and solutions tailored for you.</p>
        <button className="btn btn-success mt-3">Click Me</button>
      </div>

      {/* Contact Section */}
      <main className="container my-5" id="contact">
        <h2 className="mb-4">Get in Touch</h2>
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;