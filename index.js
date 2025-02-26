document.addEventListener("DOMContentLoaded", function () {
    // Medicine Notification Alert
    setInterval(() => {
        alert("Reminder: It's time to take your medicine!");
    }, 60000); // Alert every 60 seconds

    // Multi-Language Support
    const languageSwitcher = document.getElementById("languageSwitcher");
    const elements = {
        title: document.querySelector("h1"),
        medicineAlert: document.getElementById("medicineAlert"),
        dietAlert: document.getElementById("dietAlert"),
        registrationTitle: document.querySelector("#registration h2"),
        criteriaTitle: document.querySelector("#criteria h2")
    };

    const translations = {
        en: {
            title: "Hospital Management System",
            medicineAlert: "Time to take your medicine!",
            dietAlert: "Follow your diet plan for better health.",
            registrationTitle: "Hospital Registration",
            criteriaTitle: "Hospital Management Criteria"
        },
        hi: {
            title: "अस्पताल प्रबंधन प्रणाली",
            medicineAlert: "दवा लेने का समय हो गया है!",
            dietAlert: "बेहतर स्वास्थ्य के लिए अपने आहार योजना का पालन करें।",
            registrationTitle: "अस्पताल पंजीकरण",
            criteriaTitle: "अस्पताल प्रबंधन मानदंड"
        }
    };

    languageSwitcher.addEventListener("change", function () {
        const lang = this.value;
        elements.title.textContent = translations[lang].title;
        elements.medicineAlert.textContent = translations[lang].medicineAlert;
        elements.dietAlert.textContent = translations[lang].dietAlert;
        elements.registrationTitle.textContent = translations[lang].registrationTitle;
        elements.criteriaTitle.textContent = translations[lang].criteriaTitle;
    });

    // Doctor List
    const doctorList = [
        { name: "Dr. A. Sharma", specialty: "Cardiologist" },
        { name: "Dr. R. Verma", specialty: "Neurologist" },
        { name: "Dr. K. Gupta", specialty: "Orthopedic" },
        { name: "Dr. S. Mehta", specialty: "Pediatrician" }
    ];

    const doctorContainer = document.getElementById("doctorList");
    doctorList.forEach((doctor) => {
        const doctorCard = document.createElement("div");
        doctorCard.classList.add("doctor-card");
        doctorCard.innerHTML = `<h3>${doctor.name}</h3><p>${doctor.specialty}</p>`;
        doctorContainer.appendChild(doctorCard);
    });

    // Registration Form
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name && email) {
            alert(`Thank you, ${name}! You have successfully registered.`);
            this.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dietButton = document.getElementById("showDietPlan");
    const dietList = document.getElementById("dietList");

    dietButton.addEventListener("click", function () {
        if (dietList.style.display === "none" || dietList.style.display === "") {
            dietList.style.display = "block";
            dietButton.textContent = "Hide Diet Plan"; 
        } else {
            dietList.style.display = "none";
            dietButton.textContent = "View Diet Plan";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hospitals = [
        { name: "Apollo Hospital", location: "New Delhi, India", contact: "+91 1234567890" },
        { name: "Fortis Hospital", location: "Mumbai, India", contact: "+91 9876543210" },
        { name: "AIIMS", location: "Delhi, India", contact: "+91 1122334455" },
        { name: "Max Super Specialty Hospital", location: "Bangalore, India", contact: "+91 9988776655" },
        { name: "Medanta - The Medicity", location: "Gurgaon, India", contact: "+91 8877665544" }
    ];

    const hospitalTable = document.getElementById("hospitalList");

    hospitals.forEach(hospital => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hospital.name}</td>
            <td>${hospital.location}</td>
            <td>${hospital.contact}</td>
        `;
        hospitalTable.appendChild(row);
    });
});


document.querySelector(".register-btn").addEventListener("click", function () {
    alert("You have successfully registered!");
});



document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Login button clicked! Redirecting to login page...");
    // You can replace this with `window.location.href = "login.html";`
});

document.getElementById("signupBtn").addEventListener("click", function () {
    alert("Signup button clicked! Redirecting to signup page...");
    // You can replace this with `window.location.href = "signup.html";`
});


document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.querySelector(".navbar");

    mobileMenu.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });
});
