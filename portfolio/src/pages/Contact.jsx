import Footer from "./Footer";
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        document.title = "Contect | Shreyansh";
    }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1> Contact Me</h1>
      <section className="bg-primary text-white p-4 rounded mb-5">
        <h2 className="mb-3">Contact Me</h2>
        <p>📧 Email: <a href="mailto:shreyansh@example.com" className="text-white text-decoration-underline">shreyansh@example.com</a></p>
        <p>🔗 GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-white text-decoration-underline">github.com/yourgithub</a></p>
        <p>🔗 LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-white text-decoration-underline">linkedin.com/in/yourprofile</a></p>
      </section>
    </div>
  );
}

export default Contact;