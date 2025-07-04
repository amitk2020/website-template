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


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;