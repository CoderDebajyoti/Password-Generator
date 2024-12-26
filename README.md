# Password-Generator

A simple and efficient tool for generating secure and customizable passwords. Supports options for length, inclusion of uppercase, lowercase, numbers, and special characters to ensure strong and reliable password security.

## Features

- Generate passwords with customizable length
- Ensure passwords contain at least one lowercase letter, one uppercase letter, one digit, and one special character
- Simple and easy-to-use interface

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Password-Generator.git
    cd Password-Generator
    ```

2. Run the password generator:
    ```sh
    node main.js
    ```

3. Follow the prompts to generate a secure password.

## Example

```javascript
const passwordLength = getPasswordLength();
let newPassword = generatePassword(passwordLength);
while (!validatePassword(newPassword)) {
    newPassword = generatePassword(passwordLength);
}
console.log("Generated Password:", newPassword);
```

## Testing

To run the tests, execute the following command:
```sh
node test.js
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---