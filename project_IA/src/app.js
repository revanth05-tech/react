import React, { useState } from 'react';

const Appjs = () => {
  const pages = {
    home: {
      title: "Why Choose IngredientAnalyzer?",
      text: "Our AI engine scans product ingredients in real-time using advanced OCR. Instantly identify harmful, moderate, or safe substances and get clarity about what goes into your product. Built for precision, powered by intelligence."
    },
    features: {
      title: "Powerful Features for Smarter Analysis",
      text: "Experience the fusion of AI and data science. IngredientAnalyzer offers OCR-based ingredient scanning, detailed compound breakdown, real-time risk classification, and integrated health scoring — all wrapped in one seamless platform."
    },
    analyze: {
      title: "Upload & Analyze with Confidence",
      text: "Simply upload your product image — our AI analyzes it within seconds. Receive insights on safety levels, allergen presence, and harmful chemical detection. Save time, stay informed, and trust your products."
    }
  };

  const [activePage, setActivePage] = useState('home');

  return (
    <div className="main">
      <nav className="navsection">
        <a
          href="#home"
          className={activePage === 'home' ? 'active' : ''}
          onClick={() => setActivePage('home')}
        >
          Home
        </a>
        <a
          href="#features"
          className={activePage === 'features' ? 'active' : ''}
          onClick={() => setActivePage('features')}
        >
          Features
        </a>
        <a
          href="#analyze"
          className={activePage === 'analyze' ? 'active' : ''}
          onClick={() => setActivePage('analyze')}
        >
          Analyze
        </a>
      </nav>

      <div id="singleCard" className="card show">
        <h2>{pages[activePage].title}</h2>
        <p>{pages[activePage].text}</p>
      </div>
    </div>
  );
};

export default Appjs;
