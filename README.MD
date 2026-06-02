# Hennge Frontend Assignment

![Hennge Challenge](https://img.shields.io/badge/Hennge%20Challenge-Frontend%20Assignment-brightgreen)

Welcome to the Hennge Frontend Assignment repository! This project showcases a React TypeScript application developed for HENNGE's Password Validation Challenge. The application focuses on user registration, dynamic password validation, API integration, and robust error handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

- **User Registration**: Users can create accounts with an easy-to-use registration form.
- **Dynamic Password Validation**: The app checks password strength in real-time, ensuring users meet security requirements.
- **API Integration**: Connects with a backend service for user data management.
- **Error Handling**: Provides clear feedback for input errors, enhancing user experience.
- **Accessibility**: Designed with accessibility in mind to ensure all users can interact with the app.

## Technologies Used

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Hooks**: For managing state and lifecycle methods in functional components.
- **CSS Modules**: For modular and reusable styles.
- **Axios**: For making HTTP requests to the API.
- **Jest**: For unit testing the application components.

## Getting Started

To get started with the Hennge Frontend Assignment, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bobbygun123/Hennge_Frontend_Assignment_Japan.git
   cd Hennge_Frontend_Assignment_Japan
   ```

2. **Install Dependencies**:
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server with:
   ```bash
   npm start
   ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

The application allows users to register by filling out a form. The form validates user input in real-time, providing feedback on password strength and other fields. 

### Dynamic Password Validation

The password field includes criteria such as:

- Minimum length
- Inclusion of uppercase letters
- Inclusion of numbers
- Inclusion of special characters

As users type, they receive immediate feedback on whether their password meets the requirements.

### API Integration

The app communicates with a backend API to manage user registration. It sends user data and handles responses to ensure smooth operation.

## Folder Structure

Here’s an overview of the project’s folder structure:

```
Hennge_Frontend_Assignment_Japan/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── RegistrationForm.tsx
│   │   └── PasswordStrengthIndicator.tsx
│   ├── hooks/
│   │   └── usePasswordValidation.ts
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   └── App.module.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

- **components/**: Contains reusable components such as the registration form and password strength indicator.
- **hooks/**: Custom hooks for managing password validation logic.
- **services/**: API service for handling HTTP requests.
- **styles/**: CSS modules for styling components.

## Contributing

We welcome contributions to improve this project. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch and submit a pull request.

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

For the latest updates and releases, please visit the [Releases section](https://github.com/bobbygun123/Hennge_Frontend_Assignment_Japan/releases). You can download the latest version of the application from there.

Feel free to explore the code and contribute to this project. Your feedback is valuable!

## Acknowledgments

Thank you to HENNGE for this challenge and the opportunity to showcase my skills in React and TypeScript. 

---

This README provides a comprehensive overview of the Hennge Frontend Assignment project. If you have any questions or suggestions, feel free to reach out through the repository.