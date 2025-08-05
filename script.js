
// Simple local admin authentication (for demo purposes only)
const adminPassword = "Cyberadmin123";

let isAdmin = false;

function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (msg) {
        const chatWindow = document.getElementById("chatWindow");
        const p = document.createElement("p");
        p.textContent = "You: " + msg;
        chatWindow.appendChild(p);
        input.value = "";
    }
}

function loginAdmin() {
    const pwdInput = document.getElementById("adminPassword");
    const msgBox = document.getElementById("loginMsg");
    if (pwdInput.value === adminPassword) {
        isAdmin = true;
        msgBox.textContent = "Login successful.";
        document.getElementById("rate-edit-box").style.display = "block";
        document.getElementById("rateEditor").value = document.getElementById("rate-list").innerText;
    } else {
        msgBox.textContent = "Incorrect password.";
    }
}

function saveRateList() {
    const newRates = document.getElementById("rateEditor").value;
    const rateListDiv = document.getElementById("rate-list");
    rateListDiv.innerHTML = "<ul>" + newRates.split("\n").map(r => "<li>" + r + "</li>").join("") + "</ul>";
    alert("Rate list updated.");
}
