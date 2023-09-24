import React from 'react';
import Footer from '../components/Footer';
import bg from "../assets/css/pic3.jpg";

const AboutUs = () => {
  return (
    <div className='wrapper'>
    <div className='auth-container' style={{backgroundImage: `url(${bg})`,backgroundPosition: "center", backgroundSize: "cover"}}>
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center " style={{height:"80vh"}}>
          <div className='align-items-center' >    
           <h2 className="mb-4">About Us</h2>
           </div>
           <div>
          <p>Welcome to our Library Management System. We are dedicated to providing you with the best library experience.</p></div>
          <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            consectetur ligula. Duis ac turpis in lacus maximus pulvinar a at
            sapien.
          </p>
          </div>
          <div>
          <p>
            Fusce auctor erat id ex iaculis, ut rhoncus nulla tincidunt. Integer
            volutpat arcu in ante cursus tincidunt.
          </p>
          </div>
        
        </div>

      
      </div>
    </div>
    </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
