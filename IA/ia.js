const navLinks = document.querySelectorAll('.navsection a');
const singleCard = document.getElementById('singleCard');
const maintag = document.getElementById('maintag');

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

function showCard(page) {
  maintag.style.display = "none";
  singleCard.classList.remove('show');
  setTimeout(() => {
    singleCard.innerHTML = `
      <h2>${pages[page].title}</h2>
      <p>${pages[page].text}</p>
    `;
    singleCard.classList.add('show');
  }, 200);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const page = link.dataset.page;
    showCard(page);
  });
});

showCard('home');
