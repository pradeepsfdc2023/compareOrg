// Validation utility functions

export const isEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isPhone = (phone) => {
  const re = /^\d{10}$/;
  return re.test(phone.replace(/\D/g, ''));
};

export const isPassword = (password) => {
  return password && password.length >= 8;
};

export const isValidName = (name) => {
  return name && name.trim().length >= 2;
};

export const isURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isEmpty = (value) => {
  return value === null || value === undefined || value.toString().trim() === '';
};

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const validateForm = (data, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const validators = rules[field];
    const value = data[field];

    validators.forEach((validator) => {
      if (!validator.validate(value)) {
        errors[field] = validator.message;
      }
    });
  });

  return errors;
};
