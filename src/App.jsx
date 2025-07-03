import ContactForm from "./assets/Components/ContactForm.jsx";


function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "100%", margin: 0, padding: 0 }}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>My Company</h1>
        <nav>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main style={styles.hero}>
        <h2>Welcome to Our Website</h2>
        <p>We provide awesome services and solutions tailored for you.</p>
      </main>

      <section id="contact">
        <ContactForm />
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    color: "#fff",
    marginLeft: "1rem",
    textDecoration: "none",
    fontWeight: "bold",
  },
  hero: {
    padding: "4rem 2rem",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  }
};

export default App;
