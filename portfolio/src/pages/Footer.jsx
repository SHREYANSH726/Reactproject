import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px',}}>
      <p>&copy; {new Date().getFullYear()} Shreyansh Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;