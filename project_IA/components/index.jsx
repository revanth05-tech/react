import React from 'react';

const Index = () => {
  return (
    <>
      <div className="ocean"></div>
      <div className="clouds"></div>

      <div className="container">
        <nav className="navbar">
          <h1>IngredientAnalyzer</h1>
          <div className="navsection">
            <a href="#" data-page="home" className="active">Home</a>
            <a href="#" data-page="features">Features</a>
            <a href="#" data-page="analyze">Analyze</a>
          </div>
          <button className="btn">Get Started</button>
        </nav>

        <main className="content">
          <section className="maintag" id="maintag">
            <h1>
              Analyze Ingredients with <strong>AI Precision</strong>
            </h1>
            <p>Upload your product label & instantly detect harmful, moderate, or safe</p>
            <p>ingredients — powered by AI and OCR</p>
            <button className="btn">Start Analyzing</button>
          </section>


          <label className="uploadsection" htmlFor="fileUpload" id="uploadLabel">
            <input
              type="file"
              id="fileUpload"
              accept="image/png, image/jpeg, image/bmp"
              hidden
            />
            <div className="upload-inner">
              <div className="upload-icon">+</div>
              <h1>Upload Product Image</h1>
              <p>Drag & Drop or Click to Upload</p>
              <p>JPG, PNG, BMP — Max 10MB</p>
            </div>
          </label>

          <section className="single-card" id="singleCard"></section>
        </main>
      </div>
    </>
  );
};

export default Index;
