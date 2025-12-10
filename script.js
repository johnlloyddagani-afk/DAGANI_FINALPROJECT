function goTo(url) {
    const loader = document.getElementById("loading-screen");
    loader.classList.add("active");

    setTimeout(() => {
        loader.classList.remove("active");
        window.location.href = url;
    }, 900);
}



/* LOGIN */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "dagani" && pass === "12345") {
        localStorage.setItem("logged", "yes");
        goTo("home.html");
    } else {
        document.getElementById("error-msg").innerHTML = "Wrong username or password!";
    }
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("logged");
    goTo("index.html");
}

if (restricted.includes(current)) {
    if (localStorage.getItem("logged") !== "yes") {
        window.location.href = "index.html";
    }
}

function openProject(n) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");
    const desc = document.getElementById("modal-desc");

    modal.style.display = "flex";

    if (n === 1) {
        img.src = "python factorial.png";
        desc.innerHTML = "A simple Python program that calculates the factorial of a number using two types of functions: a return type function that computes and returns the factorial, a non-return type function that prints the result directly. The user inputs a number, and the program shows the factorial step-by-step result."
    }
    if (n === 2) {
        img.src = "java class.png";
        desc.innerHTML = "A Java program that creates a Product class containing attributes like name, category, price, and quantity. Using a constructor and a display method, the program stores 10 products in an array and prints their details one by one.";
    }
    if (n === 3) {
        img.src = "java factorial.png";
        desc.innerHTML = "A Java program that computes the factorial of a number using two methods: a static return method that calculates the factorial, a non-return method that prints the output. The user enters a number, and the program outputs the factorial result.";
    }
}

function closeProject() {
    document.getElementById("modal").style.display = "none";
}