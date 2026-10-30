const validateLogin = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!formData.email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.password.trim()) {
    errors.password = "Please enter your password.";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
};

export default validateLogin;
