import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about">
      <h1 className={`about-title ${showContent ? 'slide-in' : 'slide-out'}`}>
        About Us
      </h1>
      <p className={`about-text ${showContent ? 'slide-in' : 'slide-out'}`}>
      We are a team of professionals dedicated to providing high-quality healthcare to our patients. Our team consists of experienced and highly skilled doctors who work diligently to meet the needs of our patients.
      </p>
      <p className={`about-text ${showContent ? 'slide-in' : 'slide-out'}`}>
      We believe in the importance of effective communication with our patients, striving to create a safe and supportive environment that fosters healing. Our goal is to deliver exceptional medical services using the latest techniques and medical practices.
      </p>
    </div>
  );
}

export default About;

