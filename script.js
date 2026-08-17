// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// ===============================
// Order Buttons
// ===============================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const foodName = button.dataset.food;

        alert(
            `Great choice! 🍽️\n\n${foodName} has been added to your order.`
        );

    });

});


// ===============================
// Reservation Form
// ===============================

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");

reservationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    formMessage.textContent =
        `Thank you, ${name}! Your table for ${guests} guest(s) has been requested for ${date} at ${time}.`;

    formMessage.style.color = "#2a9d8f";

    reservationForm.reset();

});


// ===============================
// Set Minimum Reservation Date
// ===============================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// ===============================
// Footer Year
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();