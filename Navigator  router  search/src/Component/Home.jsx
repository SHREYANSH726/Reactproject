import React from 'react'
import './home.css'
import img from '../assets/myimg/shope.jpg'

const countries = [
  { code: 'id', name: 'Indonesia', link: '#' },
  { code: 'tw', name: 'Taiwan', link: '#' },
  { code: 'vn', name: 'Vietnam', link: '#' },
  { code: 'th', name: 'Thailand', link: '#' },
  { code: 'ph', name: 'Philippines', link: '#' },
  { code: 'my', name: 'Malaysia', link: '#' },
  { code: 'sg', name: 'Singapore', link: '#' },
  { code: 'br', name: 'Brazil', link: '#' },
  { code: 'mx', name: 'Mexico', link: '#' },
  { code: 'co', name: 'Colombia', link: '#' },
  { code: 'cl', name: 'Chile', link: '#' }
];

const Home = () => {
  return (
    <>
      <img className="full-width-image" src={img} alt="shope product" />

      <div className="content">
        <div className="container">
          <h2 className="content__title">Welcome to Shopee</h2>
          <h3 className="content__subtitle">
            Your preferred online shopping platform. Shopee offers a seamless, fun and reliable shopping experience to millions of users worldwide.
            <br />
            Choose a country or region.
          </h3>

          <ul className="content__countries">
            {countries.map((country) => (
              <li className="content__country" key={country.code}>
                <a className="content__country-mall-link" href={country.link} target="_blank" rel="noopener noreferrer">
                  <span className={`flag-icon flag-icon-${country.code}`}></span>
                  <div className="content__country-name">{country.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> 

     

        <div className="container">
          <div className="footer__bottom">
            <div className="footer__bottom-copyright">
              © 2025 Shopee. All Rights Reserved
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Home;
