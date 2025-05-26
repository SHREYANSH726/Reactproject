import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.title = "Home | Shreyansh";
      }, []);    

  return (
   <div className="container my-5 text-center">

      
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to My Website</h1>
        <p className="lead text-secondary mt-3">
          Hi! I'm <span className="fw-bold text-dark">Shreyansh</span>, a passionate web developer crafting clean, responsive websites.
        </p>
        <img
          src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png"
          alt="Coding"
          className="img-fluid rounded shadow mt-4"
          style={{ maxHeight: '400px' }}
        />
      </section>

     
      <section className="bg-light p-4 rounded shadow mb-5">
        <h2 className="text-success mb-3">About Me</h2>
        <p>
          I'm a self-taught developer who loves to turn ideas into reality through code.
          I specialize in building fast, mobile-first websites using React, Bootstrap, and modern web tools.
        </p>
      </section>

     
      <section className="p-4 rounded bg-white border mb-5">
        <h2 className="text-primary mb-3">Skills & Technologies</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>✅ HTML5, CSS3, JavaScript</li>
              <li>✅ React.js, Vite, Bootstrap</li>
              <li>✅ Redux, REST APIs, Axios</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>✅ Git, GitHub, NPM</li>
              <li>✅ Firebase, JSON Server</li>
              <li>✅ Responsive & Mobile-first Design</li>
            </ul>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

export default Home;