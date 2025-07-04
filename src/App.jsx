import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./assets/Components/ContactForm.jsx";
import Header from './assets/Components/Header.jsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />
      {/* Hero Section */}
      <div className="container text-center py-5">
        <h1 className="text-primary">Hero Title</h1>
        <p className="lead">We provide awesome services and solutions tailored for you.</p>
        <button className="btn btn-success mt-3">Click Me</button>
      </div>

      {/* Contact Section */}
      <main className="container my-5" id="contact">
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