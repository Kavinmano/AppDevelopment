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
          <p>Welcome to our Hogward's Library Management System. We Have a unique expirence in Library Management System and even if you say any spell name according to the spell we will give some disounts and gifts to our users</p></div>
          <div>
          <p>
          In the realm of technology, our Hogwarts Library Management System website effortlessly marries the wizarding world's charm with the convenience of the Muggle realm. It is a digital haven where the pursuit of knowledge is not just a task but an enchanting adventure, an ode to the timeless allure of the written word. Explore, learn, and embrace the magic of organization and literature in one bewitching place.
          </p>
          </div>
          <div>
          <p>
          The typography, an elegant script that seems to have been penned by the quill of Professor Dumbledore himself, guides visitors through the magical labyrinth of our library's offerings. Spellbinding icons, adorned with swirling stars and ethereal sparkles, unveil the secrets to easily managing the vast repository of literary treasures.
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
