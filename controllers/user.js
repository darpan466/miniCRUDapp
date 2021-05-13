import User from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch(error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const existingUser = await User.findById(id);
    if(!existingUser) return res.status(404).send("No user with given Id found in database");
    const newData = req.body;
    Object.assign(existingUser, newData);
    await existingUser.save();
    return res.status(200).json(existingUser);
  } catch(error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const existingUser = await User.findById(id);
    if(!existingUser) return res.status(404).send("No user with given Id found in database");
    return res.status(200).json(existingUser);
  } catch(error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch(error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const existingUser = await User.findById(id);
    if(!existingUser) return res.status(404).send("No user with given Id found in database");
    await existingUser.delete();
    return res.status(200).send(`User with id: ${id} deleted successfully`);
  } catch(error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

