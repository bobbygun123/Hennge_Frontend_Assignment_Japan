import React, { useState } from "react";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

interface CreateUserFormProps {
  setUserWasCreated: Dispatch<SetStateAction<boolean>>;
}

function CreateUserForm({ setUserWasCreated }: CreateUserFormProps) {
  //Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [apiError, setApiError] = useState("");

  //password rules
  function validatePassword(pw: string): string[] {
    const errors: string[] = [];
    if (pw.length < 10)
      errors.push("Password must be at least 10 characters long");
    if (pw.length > 24)
      errors.push("Password must be at most 24 characters long");
    if (/\s/.test(pw)) errors.push("Password cannot contain spaces");
    if (!/\d/.test(pw))
      errors.push("Password must contain at least one number");
    if (!/[A-Z]/.test(pw))
      errors.push("Password must contain at least one uppercase letter");
    if (!/[a-z]/.test(pw))
      errors.push("Password must contain at least one lowercase letter");
    return errors;
  }

  //update password rules
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const pw = e.target.value;
    setPassword(pw);
    setValidationErrors(validatePassword(pw));
  }

  //Submit form
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");

    //Reset validaton errors
    const errors = validatePassword(password);
    setValidationErrors(errors);

    //stop if username is empty
    if (!username) {
      setApiError("Please enter both username and password");
      return;
    }

    //stop if password is empty
    if (errors.length > 0) {
      return;
    }

    try {
      const response = await fetch(
        "https://api.challenge.hennge.com/password-validation-challenge-api/001/challenge-signup", // CHANGED: use local proxy path
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJhc2hhbnQuc2FpbmkuMzE1MEBnbWFpbC5jb20iXSwiaXNzIjoiaGVubmdlLWFkbWlzc2lvbi1jaGFsbGVuZ2UiLCJzdWIiOiJjaGFsbGVuZ2UifQ.cQxbc01wUGA5EEVEspQaiShYIudlw6X_p-oEZOfMP3E",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      if (response.ok) {
        //Success: show created state
        setUserWasCreated(true);
      } else if (response.status === 500) {
        setApiError("Something went wrong. Please try again.");
      } else if (response.status === 400) {
        setApiError(
          "Sorry, the entered password is not allowed, please try a different one."
        );
      } else if (response.status === 401 || response.status === 403) {
        setApiError("Not authenticated to access this resource.");
      } else {
        setApiError("Something went wrong, please try again.");
      }
    } catch {
      setApiError("Something went wrong, please try again.");
    }
  }

  return (
    <div style={formWrapper}>
      <form style={form} onSubmit={handleSubmit} noValidate>
        {/* Server/API Error */}
        {apiError && (
          <div role="alert" style={{ color: "red" }}>
            {apiError}
          </div>
        )}

        {/* make sure the username and password are submitted */}
        {/* make sure the inputs have the accessible names of their labels */}

        {/* Username input */}
        <label htmlFor="username" style={formLabel}>
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-invalid={!!apiError}
          required
          style={formInput}
        />

        <label htmlFor="password" style={formLabel}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          aria-label="Password"
          value={password}
          onChange={handlePasswordChange}
          aria-invalid={validationErrors.length > 0}
          required
          style={formInput}
        />

        {/* Client-side validation errors */}
        {validationErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {validationErrors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <button type="submit" style={formButton}>
          Create User
        </button>
      </form>
    </div>
  );
}

export { CreateUserForm };

const formWrapper: CSSProperties = {
  maxWidth: "500px",
  width: "80%",
  backgroundColor: "#efeef5",
  padding: "24px",
  borderRadius: "8px",
};

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const formLabel: CSSProperties = {
  fontWeight: 700,
};

const formInput: CSSProperties = {
  outline: "none",
  padding: "8px 16px",
  height: "40px",
  fontSize: "14px",
  backgroundColor: "#f8f7fa",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
};

const formButton: CSSProperties = {
  outline: "none",
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  backgroundColor: "#7135d2",
  color: "white",
  fontSize: "16px",
  fontWeight: 500,
  height: "40px",
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
  alignSelf: "flex-end",
  cursor: "pointer",
};
