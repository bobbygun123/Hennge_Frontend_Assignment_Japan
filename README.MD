# 🧑‍💻 HENNGE Frontend Challenge – User Creation Form with Password Validation

![License](https://img.shields.io/badge/license-MIT-blue.svg)
## 📌 Overview

This project is a solution to the HENNGE Frontend Challenge. It features a user creation form with real-time password validation and API integration, built using React and TypeScript.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Validation Rules](#validation-rules)
- [Error Handling](#error-handling)
- [Accessibility](#accessibility)
- [Project Structure](#project-structure)
- [License](#license)

---

## ✨ Features

- **Username and Password Fields**: Users can input their desired username and password.
- **Password Validation**: Client-side validation ensures the password meets specific criteria.
- **API Integration**: Upon submission, the form sends a POST request to the HENNGE API to create the user.
- **Error Handling**: Displays user-friendly error messages based on API responses.
- **Responsive Design**: Ensures usability across various devices.

---

## 🛠️ Technologies Used

- React (with Hooks)
- TypeScript
- CSS for styling
- Fetch API for HTTP requests

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js >= 14
- pnpm >= 6

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/hennge-frontend-challenge.git
cd hennge-frontend-challenge
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run the Development Server

```bash
pnpm run dev
```

Navigate to http://localhost:3000 in your browser to view the application.

## 🧪 Usage

1. Enter a Username.

2. Enter a Password that meets all validation criteria.

3. Click Submit to create a new user.


## 🔗 API Integration

- Endpoint: /challenge-signup

- Method: POST

- Headers:

  - Authorization: Bearer token provided in the challenge details.

  - Content-Type: application/json

- Body:

```bash
{
  "username": "your_username",
  "password": "your_password"
}
```

## ✅ Validation Rules

- Password must be at least 10 characters long

- Password must be at most 24 characters long

- Password cannot contain spaces

- Password must contain at least one number

- Password must contain at least one uppercase letter

- Password must contain at least one lowercase letter

## ⚠️ Error Handling

- 500 Internal Server Error: "Something went wrong, please try again."

- Common Password Error: "Sorry, the entered password is not allowed, please try a different one."

- 401/403 Unauthorized: "Not authenticated to access this resource."

## ♿ Accessibility

Implemented aria-invalid attributes on input fields to enhance accessibility for users relying on assistive technologies.

## 🔐 Security Note

For this assignment, the API key is hardcoded within the application. In a production environment, it's crucial to:

- Store sensitive keys in environment variables.

- Use secure methods to handle authentication credentials.

## 🧪 Testing

To test the application:

1. Ensure the development server is running.

2. Open the application in your browser.

3. Try creating a user with valid and invalid credentials to observe the form's behavior.

## 🗂️ Project Structure

hennge-frontend-challenge/
├── public/
├── src/
│   ├── app.tsx
│   ├── create-user-form.tsx
│   ├── main.tsx
│   ├── style.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── README.md


## 📄 License

This project is licensed under the MIT License.
