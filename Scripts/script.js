// File: script.js
// Description: This script is part of a web application that displays and processes data in a table format.    
// It includes functions to manipulate the DOM, calculate values based on the data, and toggle between two tables.

// Function to toggle the visibility of the contact menu
  function toggleMenu() {
    const menu = document.getElementById("contactMenu");
    menu.classList.toggle("active");
  }


  // table1-card
const table1Body = document.getElementById("table1-body");
const alpha = document.getElementById("alpha-value");
const beta = document.getElementById("beta-value");
const charlie = document.getElementById("charlie-value");

const tableData = [
  { index: "A1", value: 41 },
  { index: "A2", value: 18 },
  { index: "A3", value: 21 },
  { index: "A4", value: 63 },
  { index: "A5", value: 2 },
  { index: "A6", value: 53 },
  { index: "A7", value: 5 },
  { index: "A8", value: 57 },
  { index: "A9", value: 60 },
  { index: "A10", value: 93 },
  { index: "A11", value: 28 },
  { index: "A12", value: 3 },
  { index: "A13", value: 90 },
  { index: "A14", value: 39 },
  { index: "A15", value: 80 },
  { index: "A16", value: 88 },
  { index: "A17", value: 49 },
  { index: "A18", value: 60 },
  { index: "A19", value: 26 },
  { index: "A20", value: 28 },
];

// Fill Table 1 with original data
tableData.forEach((data, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${data.index}</td><td>${data.value}</td>`;
  table1Body.appendChild(row);
});

// Process values from specific positions
const A = (i) => tableData[i - 1].value;
alpha.textContent = A(5) + A(20);
beta.textContent = (A(15) / A(7)).toFixed(2);
charlie.textContent = A(13) * A(12);

// Toggle between tables button
// Table 1: Original Data Table 
// Table 2: Processed Data Table
const table1Card = document.getElementById("table1-card");
const table2Card = document.getElementById("table2-card");
const toggleBtn = document.getElementById("toggleBtn");

function toggleTables() {
  const showingTable1 = table1Card.style.display !== "none";

  table1Card.style.display = showingTable1 ? "none" : "block";
  table2Card.style.display = showingTable1 ? "block" : "none";
  toggleBtn.textContent = showingTable1 ? "Show Original Data Table" : "Show Processed Data Table";
}

// end of script.js