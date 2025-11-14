// index.js
// Author: Maria Halla-aho
// Date: 2025-11-07
// Handles adding new course rows with day marks (✅/❌)

document.addEventListener("DOMContentLoaded", () => {
  const CHECK = '✅';
  const CROSS = '❌';
  const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const form = document.getElementById("addCourseForm");
  const table = document.getElementById("timetable").querySelector("tbody");
  const courseInput = document.getElementById("courseName");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const courseName = courseInput.value.trim();
    if (!courseName) return;



    //virheet ja niiden koodit
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const BirthDate = form.BirthDate.value.trim();
    const termsAccepted = form.terms.checked;
    const timestamp = new Date().toISOString();

    //virheilmoitukset
    const errors = [];
    if (fullName.length < 3) errors.push("Enter full name");
    if (!email.includes("@")) errors.push("Enter valid email");
    if (!/^\d{7,15}$/.test(phone)) errors.push("Invalid phone number");
    if (!BirthDate) errors.push("Birth Date is required");
    if (!termsAccepted) errors.push("You must accept terms");

    if (errors.length > 0) {
      alert("Please fix the following errors: \n\n" + errors.join("\n"));
      return;
    }
    document.getElementById("studentName").textContent = fullName;
    document.getElementById("studentGroup").textContent = "Group 1";




    // Collect checked days into a Set
    const checkedDays = new Set(
      Array.from(form.querySelectorAll('input[name="day"]:checked'))
        .map((cb) => cb.value)
    );

    // Create new table row
    const row = document.createElement("tr");

    //timestamp
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

    table.appendChild(row);

    // Reset form and focus
    form.reset();
    courseInput.focus();
  });
});
