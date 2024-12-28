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
    ```

2. Navigate to the project directory:
    ```sh
    cd Password-Generator
    ```

3. Open `index.html` in your web browser to use the password generator with a graphical interface.

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