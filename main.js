function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function validatePassword(password) {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password);
    return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
}

function updatePasswordDisplay(password) {
    const passwordDisplay = document.getElementById("passwordDisplay");
    passwordDisplay.textContent = password;
}

function copyPasswordToClipboard() {
    const passwordDisplay = document.getElementById("passwordDisplay");
    const password = passwordDisplay.textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy password: ", err);
    });
}

const DEFAULT_PASSWORD_LENGTH = 16;

document.getElementById("generateButton").addEventListener("click", () => {
    let newPassword = generatePassword(DEFAULT_PASSWORD_LENGTH);
    while (!validatePassword(newPassword)) {
        newPassword = generatePassword(DEFAULT_PASSWORD_LENGTH);
    }
    updatePasswordDisplay(newPassword);
});

document.getElementById("copyButton").addEventListener("click", copyPasswordToClipboard);

// Example usage:
const newPassword = generatePassword(16);
console.log("Generated Password:", newPassword);