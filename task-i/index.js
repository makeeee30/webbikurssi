// index.js
// Author: Maria Halla-aho
// Date: 2025-11-20

function showPage(pageId) {
  // Piilota kaikki osiot
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });

  // Näytä vain haluttu osio
  const page = document.getElementById(pageId);
  if (page) {
    page.style.display = "block";
  }
}

// Kun sivu latautuu, näytetään etusivu

window.onload = function() {
  showPage("etusivu"); 
};
