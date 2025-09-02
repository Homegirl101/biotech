import './services.css';
import { Cloudinary } from "@cloudinary/url-gen/index";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

function Services(){
    //my cloudinary instance
    const cld = new Cloudinary({
        cloud: {
            cloudName: "dh3lvsgkd"
        }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'lab_img_6_ryshox'.
    const myImage = cld.image('lab4');
    const myImage2 = cld.image('lab2');
    const myImage3 = cld.image('lab3');

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width('250').height('250'));
    myImage2.resize(fill().width('250').height('250'));
    myImage3.resize(fill().width('250').height('250'));

    // Render the image in a React component.
    return (
        <div>
            <h2>Comprehensive Testing Services</h2>
            <div className='serviceDetailsContainer'>
                <div className='serviceDetails'>
                    <h3 className='serviceTitle'>Clinical Chemistry Testing</h3>
                    <p className='serviceDescription'>Comprehensive testing for various biochemical markers.</p>
                    <AdvancedImage cldImg={myImage} /*
                        style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2%'
                      }}*/ className='cldImgStyle'
                    />
                
                </div>
                <div className='serviceDetails'>
                    <h3 className='serviceTitle'>Hematology Testing</h3>
                    <p className='serviceDescription'>Complete blood counts and analysis.</p>
                    <AdvancedImage cldImg={myImage2} 
                        className='cldImgStyle'
                    />
                </div>
                <div className='serviceDetails'>
                    <h3 className='serviceTitle'>Microbiology Testing</h3>
                    <p className='serviceDescription'>Pathogen identification and sensitivity testing.</p>
                    <AdvancedImage cldImg={myImage3} 
                        className ='cldImgStyle'                   
                    />
                </div>
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>
                    Clinical Chemistry Testing
                </h2>
                <div className='clinicalTestingDetails'>
                    <div className='clinicalTestingItem'>
                        <h3 >Blood Chemistry Panels</h3>
                        <p>Our blood chemistry panels provide crucial insights into organ function and metabolic processes. We analyze various parameters including electrolytes, enzymes, and hormones, enabling healthcare providers to make informed decisions on patient care. Fast turnaround times ensure that critical information is readily available.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Lipid Profiles</h3>
                        <p>Lipid profiles are essential for assessing cardiovascular risk. We accurately measure cholesterol levels, triglycerides, and other lipids, allowing healthcare providers to evaluate and manage patient health effectively. Our commitment to quality ensures reliable results every time.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Diabetes Testing</h3>
                        <p>Our diabetes testing services include measuring glucose levels and assessing HbA1c to monitor long-term glucose control. These tests are vital for diagnosing and managing diabetes, helping patients and providers to take timely actions. We prioritize accuracy and efficiency in all our testing.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Thyroid Function Tests</h3>
                        <p>Thyroid function tests are essential for evaluating thyroid health. We measure key hormones such as TSH, T3, and T4 to diagnose conditions like hypothyroidism and hyperthyroidism. Our comprehensive approach ensures that patients receive accurate and timely results.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Vitamin and Mineral Testing</h3>
                        <p>Our vitamin and mineral testing services help identify deficiencies and imbalances. We assess levels of essential nutrients, enabling healthcare providers to recommend appropriate interventions. Our commitment to quality ensures reliable results for optimal patient care.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>
                    Hematology Testing
                </h2>
                <div className='clinicalTestingDetails'>
                    <div className='clinicalTestingItem'>
                        <h3 >Complete Blood Counts</h3>
                        <p>Complete blood counts (CBC) are essential for evaluating overall health and detecting a variety of disorders, such as anemia and infection. We provide accurate and timely CBC results to help healthcare providers make informed decisions about patient care.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Coagulation Studies</h3>
                        <p>Coagulation studies are vital for evaluating the blood's ability to clot properly. Our tests measure factors that contribute to clotting, helping to identify risks for bleeding disorders or thrombotic events. Accurate results are critical for effective patient management and treatment.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Hemoglobin Electrophoresis</h3>
                        <p>Hemoglobin electrophoresis is a specialized test used to identify different types of hemoglobin in the blood. This test is crucial for diagnosing conditions such as sickle cell disease and thalassemia. We ensure accurate and timely results to support effective patient management.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>
                    Microbiology Testing Services
                </h2>
                <div className='clinicalTestingDetails'>
                    <div className='clinicalTestingItem'>
                        <h3 >Bacteria Cultures</h3>
                        <p>Our bacterial culture services allow for the identification of pathogenic bacteria in clinical samples. By isolating and characterizing these organisms, we support effective treatment decisions for infections. Our precise techniques and rapid processing times ensure timely results for optimal patient care.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Antibiotic Sensitivity Testing</h3>
                        <p>Antibiotic sensitivity testing determines the effectiveness of specific antibiotics against identified bacteria. This is crucial for guiding targeted therapy and combating antibiotic resistance. Our laboratory utilizes rigorous methodologies to ensure reliable and actionable results.</p>
                    </div>
                    <div className='clinicalTestingItem'>
                        <h3>Fungal and Viral Testing</h3>
                        <p>In addition to bacterial testing, we offer comprehensive fungal and viral testing services. These tests are essential for diagnosing infections caused by fungi and viruses, which require different treatment approaches. Our commitment to quality ensures that healthcare providers receive accurate and timely information.</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Other Testing Services Available include:</h3>
                <div className='otherTests'>
                    <div style={{ backgroundImage: `url(https://res.cloudinary.com/dh3lvsgkd/image/upload/v1756632338/lab6.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        borderRadius: '2%'
                    }}>

                    </div>
                    <div>
                        <h4>PCR Testing</h4>
                        <p>Polymerase Chain Reaction (PCR) testing is a powerful tool for detecting genetic material from pathogens. Our PCR services enable rapid identification of infectious diseases, including viral and bacterial infections, ensuring timely treatment decisions. We pride ourselves on our high accuracy and fast turnaround times.</p>
                    </div>
                </div>
                <div className='otherTests'>
                    <div style={{ backgroundImage: `url(https://res.cloudinary.com/dh3lvsgkd/image/upload/v1756632338/lab7.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        borderRadius: '2%'
                    }}>

                    </div>
                    <div>
                        <h4>Next Generation Sequencing</h4>
                        <p>Next-Generation Sequencing (NGS) allows for comprehensive genomic analysis, facilitating the detection of mutations and genetic variations associated with various diseases. This advanced testing is essential for personalized medicine approaches, ensuring that treatment is tailored to each patient's unique genetic profile.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Services;