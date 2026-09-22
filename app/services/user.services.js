import User from "../models/userModel.js";

export const createUserService = async (user) => {
  try {
    const newUser = new User(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const findUserByEmailService = async (googleId) => {
  try {
    const user = await User.findOne({ googleId });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUsersService = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserByIdService = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
