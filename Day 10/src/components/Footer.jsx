import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-mzhoWlMZP5F70VUGxCdR5m8/M8BjI/t3S48i/X6R9Jj1j6KxMT56I5k0MC9TezY1v" crossorigin="anonymous"/>

       
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="https://Facebook.com"
            role="button"
            title="Visit Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

    
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="https://X.com"
            role="button"
            title="Visit X"
          >
            <i className="fab fa-twitter"></i>
          </a>

          
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="https://Youtube.com"
            role="button"
            title="Visit Youtube"
          >
            <i className="fab fa-google"></i>
          </a>

        
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="https://Instagram.com"
            role="button"
            title="Visit Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

      
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="https://Linkedin.com"
            role="button"
            title="Visit LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>


          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="https://Github.com"
            role="button"
            title="Visit Github"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
    
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Howards Management.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;