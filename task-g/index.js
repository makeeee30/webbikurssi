// Author: Maria Halla-aho
// Date: 2025-11-07

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const tsInput = document.getElementById('timestamp');
  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const birthdate = document.getElementById('birthdate');
  const terms = document.getElementById('terms');
  const tbody = document.querySelector('#timetable tbody');

  // Error spans
  const errFullname = document.getElementById('err-fullname');
  const errEmail = document.getElementById('err-email');
  const errPhone = document.getElementById('err-phone');
  const errBirthdate = document.getElementById('err-birthdate');
  const errTerms = document.getElementById('err-terms');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    [errFullname, errEmail, errPhone, errBirthdate, errTerms].forEach(span => span.textContent = "");

    let valid = true;

    // Fullname validation: at least 2 words
    if (!fullname.value.trim() || fullname.value.trim().split(" ").length < 2) {
      errFullname.textContent = "Please enter your full name (first and last).";
      valid = false;
    }

    // Email validation: simple regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      errEmail.textContent = "Please enter a valid email address";
      valid = false;
    }

    // Phone validation: digits and +, min length
    const phonePattern = /^(?=.*\d)[+0-9\s-]{7,}$/;
    if (!phonePattern.test(phone.value.trim())) {
      errPhone.textContent = "Phone number must be at least 7 digits and may include +";
      valid = false;
    }

    // Birthdate validation: must not be in the future
    const today = new Date();
    const birth = new Date(birthdate.value);
    if (!birthdate.value || birth > today) {
      errBirthdate.textContent = "Birth date cannot be in the future.";
      valid = false;
    }

    // Terms validation
    if (!terms.checked) {
      errTerms.textContent = "You must accept the terms.";
      valid = false;
    }

    if (!valid) return;

    // Fill timestamp automatically
    tsInput.value = new Date().toISOString();

    // Add row to table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tsInput.value}</td>
      <td>${fullname.value}</td>
      <td>${email.value}</td>
      <td>${phone.value}</td>
      <td>${birthdate.value}</td>
      <td>${terms.checked ? "Yes" : "No"}</td>
    `;
    tbody.appendChild(row);

    // Reset form
    form.reset();
  });
});
