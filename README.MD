# 🧑‍💻 HENNGE Frontend Challenge – User Creation Form with Password Validation

## 📌 Overview

This project implements a user creation form built with React and TypeScript, fulfilling the requirements of the HENNGE Frontend Challenge. The form includes:

- **Username and Password Fields**: Users can input their desired username and password.
- **Password Validation**: Client-side validation ensures the password meets specific criteria.
- **API Integration**: Upon submission, the form sends a POST request to the HENNGE API to create the user.
- **Error Handling**: Displays appropriate error messages based on API responses.

---

## 🛠️ Technologies Used

- React (with Hooks)
- TypeScript
- CSS for styling
- Fetch API for HTTP requests

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hennge-frontend-challenge.git
cd hennge-frontend-challenge
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

```bash
pnpm run dev
```

## 📝 Features

- **Real-time Password Validation**: Provides immediate feedback on password strength.red username and password.
- **Responsive Design**: Ensures usability across various devices.
- **Error Handling**:  Displays user-friendly error messages for various scenarios.

## 🔐 Security Note

For this assignment, the API key is hardcoded within the application. In a production environment, it's crucial to:

- Store sensitive keys in environment variables.

- Use secure methods to handle authentication credentials.

## 🧪 Testing

To test the application:

1. Ensure the development server is running.

2. Open the application in your browser.

3. Try creating a user with valid and invalid credentials to observe the form's behavior.

## 📄 License

This project is licensed under the MIT License.