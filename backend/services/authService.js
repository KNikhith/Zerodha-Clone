import User from "../models/User.js";

export const createUser = async (userData) => {
  const { fullName, email, password } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  return user;
};

export const getUserById = async (userId) => {
  return await User.findById(userId);
};