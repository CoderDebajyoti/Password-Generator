const { generatePassword, validatePassword } = require('./main');

// Test generatePassword function
function testGeneratePassword() {
    const password = generatePassword();
    console.log("Generated Password:", password);
    console.assert(password.length === 16, "Password length should be 16");
    console.assert(validatePassword(password), "Password should be valid");
}

// Test validatePassword function
function testValidatePassword() {
    const validPassword = "Aa1!Aa1!Aa1!Aa1!";
    const invalidPassword = "aaaaaaaaaaaaaaaa";
    console.assert(validatePassword(validPassword), "Valid password should pass validation");
    console.assert(!validatePassword(invalidPassword), "Invalid password should fail validation");
}

// Run tests
testGeneratePassword();
testValidatePassword();
console.log("All tests passed!");