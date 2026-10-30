const validateSignupSteps = (step, formData) => {
  const errors = {};

  // Email Validation
  if (step === 1) {
    if (!formData.email.trim()) {
      errors.email = "Please enter an email address.";
    } else if (!formData.email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  // OTP Validation
  if (step === 2) {
    if (!formData.otp.trim()) {
      errors.otp = "Please enter the OTP.";
    } else if (!/^\d{6}$/.test(formData.otp)) {
      errors.otp = "OTP must be exactly 6 digits.";
    }
  }

  // Full Name & Password Validation
  if (step === 3) {
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    } else if (formData.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters.";
    }

    if (!formData.password.trim()) {
      errors.password = "Please enter a password.";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(formData.password)) {
      errors.password = "Password must contain at least one number.";
    } else if (!/[@$!%*?&]/.test(formData.password)) {
      errors.password =
        "Password must contain at least one special character (@, $, !, %, *, ?, &).";
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Please enter your confirm password.";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match.";
    }
  }

  return errors;
};

export default validateSignupSteps;
