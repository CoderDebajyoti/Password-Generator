function generatePassword(length, options) {
    let charset = "";
    if (options.includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.includeNumbers) charset += "0123456789";
    if (options.includeSpecialChars) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function validatePassword(password, options) {
    const hasLowercase = options.includeLowercase ? /[a-z]/.test(password) : true;
    const hasUppercase = options.includeUppercase ? /[A-Z]/.test(password) : true;
    const hasDigit = options.includeNumbers ? /\d/.test(password) : true;
    const hasSpecialChar = options.includeSpecialChars ? /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password) : true;
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
    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked
    };
    let newPassword = generatePassword(DEFAULT_PASSWORD_LENGTH, options);
    while (!validatePassword(newPassword, options)) {
        newPassword = generatePassword(DEFAULT_PASSWORD_LENGTH, options);
    }
    updatePasswordDisplay(newPassword);
});

document.getElementById("copyButton").addEventListener("click", copyPasswordToClipboard);

// Example usage:
const newPassword = generatePassword(16, {
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSpecialChars: true
});
console.log("Generated Password:", newPassword);