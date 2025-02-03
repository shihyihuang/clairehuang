export const EMAIL_VALIDATION = {
  emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
  // only letters, spaces, and hyphens, prevent < or >
  namePattern: /^[a-zA-Zs-]+$/,
  // only alphanumeric, some punctuation, prevent < or >
  contentPattern: /^[a-zA-Z0-9\s.,!?()'";\-:]+$/,
  // Pattern to check for potentially dangerous strings
  dangerousPattern:
    /<|>|javascript:|data:|file:|vbscript:|onload=|onerror=|eval\(|expression\(|url\(|alert\(|document\.cookie|document\.write|window\.location/i,
  nameErrorMessage: "Please enter a valid name (letters, hyphens)",
  emailErrorMessage: "Please enter a valid email address",
  contentErrorMessage:
    "Please include alphanumeric characters and punctuation only",
};
