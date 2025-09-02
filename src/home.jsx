import { AdvancedImage } from '@cloudinary/react';
import './Home.css';
import img1 from './genetic.jpg';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen/index";


function Home() {

  const cld = new Cloudinary({
        cloud: {
            cloudName: "dh3lvsgkd"
        }
    });

  const whyChooseUsImg = cld.image("lab3.jpg");
  const whyChooseUsImg1 = cld.image("lab1.jpg");
  const whyChooseUsImg2 = cld.image("lab2.jpg");


  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/findus')
  }

  return (
        <div className="App">
            
            <div className='body'
              style={{
                backgroundImage: `url(${img1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '80vh',
              }}
            >
              <div className='bodyContent'>
                  <p className='bodyParagraph'>
                    Your trusted partner in accurate and timely medical diagnostics, dedicated to supporting healthcare providers and patients with high quality testing services.
                  </p><br />
              </div>
              <div className='bodyHeading'>
                <h2>Welcome to BioTech Laboratory</h2>
                <button 
                  onClick={changeRoute}
                >
                  Contact Us
                </button>
              </div>

            </div>
            <div>
                <div className='ourMission'>
                    <div style={{ backgroundImage: `url(https://res.cloudinary.com/dh3lvsgkd/image/upload/v1756632338/lab5.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        borderRadius: '2%',
                    }}>

                    </div>
                    <div className='ourMissionText'>
                        <h2>Our Mission</h2>
                        <p>At BioTech Laboratory, our mission is to provide high-quality, accurate, and timely medical testing services. We are dedicated to supporting healthcare providers and patients with comprehensive diagnostic solutions that enhance patient care and improve health outcomes.</p>
                    </div>
                </div>
            </div>
            <h2>Why Choose Us?</h2>
            <div className='whyChooseUsContainer'>
                <div className='whyChooseUs'>
                  <div>
                    <AdvancedImage
                      cldImg={whyChooseUsImg}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2%'
                      }}
                    />
                  </div>
                  <div>
                      <h4>Fast Turnaround Times</h4>
                      <p>We understand the importance of timely results in healthcare. Our laboratory is equipped with advanced technology and a dedicated team to ensure quick processing and reporting of test results.</p>
                  </div>
                </div>
                <div className='whyChooseUs'>
                  <div>
                    <AdvancedImage
                      cldImg={whyChooseUsImg1}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2%'
                      }}
                    />
                  </div>
                  <div>
                      <h4>Unmatched Accuracy</h4>
                      <p>We pride ourselves on delivering highly accurate test results. Our state-of-the-art technology and expert personnel ensure that healthcare providers can trust the data they receive.</p>
                  </div>
                </div>
                <div className='whyChooseUs'>
                  <div>
                    <AdvancedImage
                      cldImg={whyChooseUsImg2}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2%'
                      }}
                    />
                  </div>
                  <div>
                      <h4>Expert Support</h4>
                      <p>Our team of experienced professionals is always ready to assist healthcare providers with any questions or concerns. We believe that collaboration and communication are key to delivering the best possible patient care.</p>
                  </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <footer>
                <div className='footerDiv'>
                  <p className='footerParagraph, footerfontdesign' >Quality and Affordable Testing<br></br>Dedicated to serving the community</p> 
                </div>

                <div className='footerDiv' style={{display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-start',
                  fontSize: '2vmin',

                }}>
                  <p className='footerParagraph'>thebiotechnologylaboratory@gmail.com<br></br></p>
                  <p className='footerParagraph'>  08053018140</p> <br></br>
                  <p className='footerParagraph'>  Tasia New Cemetery Road Onitsha Anambra State</p>
                </div>
                <div>
                  <p style={{fontSize: '2.5vmin',
                    fontStyle: 'italic'
                  }}>Subscribe to our newsletter</p>
                  <form action="" >
                    <input type="text" placeholder='Name'/><br />
                    <input type="text" placeholder='Email' /><br />
                    <button>Subscribe</button>
                  </form>
                </div>
            </footer>
        </div>
  );
}
 export default Home;
