function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const length = 16;
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

function getPasswordLength() {
    let length = parseInt(prompt("Enter the desired password length:"));
    while (isNaN(length) || length < 1) {
        length = parseInt(prompt("Invalid input. Please enter a valid number for the password length:"));
    }
    return length;
}

// Example usage:
const newPassword = generatePassword();
console.log("Generated Password:", newPassword);