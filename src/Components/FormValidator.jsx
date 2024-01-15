import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationMessage, setValidationMessage] = useState("");

  const findFormErrors = () => {
    const formErrors = [];

    if (!email || !password || !confirmPassword) {
      formErrors.push("All fields are required");
    }

    if ([...email].filter((char) => char === "@").length !== 1) {
      formErrors.push("Email must contain only one @ sign");
    }

    if (password.length < 8) {
      formErrors.push("Password must be 8 characters or longer");
    }

    if (password !== confirmPassword) {
      formErrors.push("Passwords must match");
    }

    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = findFormErrors();
    setValidationMessage(
      errors.length ? errors.join(", ") : "Account created successfully!"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up!</h2>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type="password"
        name="confirm-password"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <p>{validationMessage}</p>

      <input type="submit" value="Submit" />
    </form>
  );
}
