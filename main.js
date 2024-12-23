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

// Example usage:
const passwordLength = 12;
let newPassword = generatePassword(passwordLength);
while (!validatePassword(newPassword)) {
    newPassword = generatePassword(passwordLength);
}
console.log("Generated Password:", newPassword);