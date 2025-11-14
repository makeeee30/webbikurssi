
// Author: Maria Halla-aho
// Date: 2025-11-14


document.addEventListener("DOMContentLoaded", () => {
  const CHECK = '✅';
  const CROSS = '❌';
  const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const form = document.getElementById("addCourseForm");
  const table = document.getElementById("timetable").querySelector("tbody");
  const courseInput = document.getElementById("courseName");
  const errorDiv = document.getElementById("errorMessages");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const courseName = courseInput.value.trim();
    if (!courseName) return;

    // Input values
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const BirthDate = form.BirthDate.value.trim();
    const termsAccepted = form.terms.checked;
    const timestamp = new Date().toISOString();

    // Validation
    const errors = [];
    if (fullName.length < 3) errors.push("Enter full name (at least 3 characters)");
    if (!email.includes("@")) errors.push("Enter a valid email address");
    if (!/^\d{7,15}$/.test(phone)) errors.push("Invalid phone number (7–15 digits)");
    if (!BirthDate) errors.push("Birth Date is required");
    if (!termsAccepted) errors.push("You must accept the terms and conditions");

    if (errors.length > 0) {
      // Show errors in the form
      errorDiv.innerHTML = errors.map(e => `<p class="mb-1">${e}</p>`).join("");
      return;
    } else {
      // Clear error messages
      errorDiv.innerHTML = "";
    }

    // Collect checked days
    const checkedDays = new Set(
      Array.from(form.querySelectorAll('input[name="day"]:checked'))
        .map((cb) => cb.value)
    );

    // Create new table row
    const row = document.createElement("tr");

    // Timestamp cell
    const timeCell = document.createElement("td");
    timeCell.textContent = timestamp;
    row.appendChild(timeCell);

    // Course cell
    const nameCell = document.createElement("td");
    nameCell.textContent = courseName;
    row.appendChild(nameCell);

    // Day cells
    dayOrder.forEach((day) => {
      const cell = document.createElement("td");
      cell.textContent = checkedDays.has(day) ? CHECK : CROSS;
      cell.dataset.day = day;
      cell.className = "day-cell";
      row.appendChild(cell);
    });

    // Add row to table
    table.appendChild(row);

    // Reset form and focus
    form.reset();
    courseInput.focus();
  });
});
