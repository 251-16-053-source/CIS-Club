/* ===== Contact Form Submission ===== */
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();

```
let name = document.getElementById("cname").value.trim();
let email = document.getElementById("cemail").value.trim();
let message = document.getElementById("cmessage").value.trim();

if (name === "" || email === "" || message === "") {
    alert("Please fill all required fields!");
    return;
}

document.getElementById("cSuccess").textContent =
    "Your message has been sent! We will contact you soon.";

document.getElementById("contactForm").reset();
```

});

/* ===== Event Filtering ===== */
function filterEvents() {
const category = document.getElementById("categoryFilter").value;
const cards = document.querySelectorAll(".event-card");

```
cards.forEach(card => {
    card.style.display =
        category === "all" || card.dataset.category === category
            ? "block"
            : "none";
});
```

}

/* ===== Gallery Modal ===== */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-img");
const closeBtn = document.getElementsByClassName("close")[0];

images.forEach(img => {
img.onclick = () => {
modal.style.display = "block";
modalImg.src = img.src;
captionText.innerHTML = img.alt;
};
});

closeBtn.onclick = () => {
modal.style.display = "none";
};

modal.onclick = (e) => {
if (e.target === modal) modal.style.display = "none";
};

/* ===== Join Form Submission ===== */
document.getElementById("joinForm").addEventListener("submit", function(e) {
e.preventDefault();

```
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let studentId = document.getElementById("studentId").value.trim();
let department = document.getElementById("department").value;

if (name === "" || email === "" || studentId === "" || department === "") {
    alert("Please fill all required fields!");
    return;
}

// Success message
document.getElementById("successMsg").textContent =
    "Your registration has been received! Welcome to the CIS Club 🎉";

// Clear form
document.getElementById("joinForm").reset();
```

});
