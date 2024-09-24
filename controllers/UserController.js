import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
    try {
      const response = await User.findOne({ 
          where: { 
              id: req.params.id 
          } 
      });  // Hapus tanda ()
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };

export const createUser = async (req, res) => {
    const user = req.body;
    try {
      await User.create(user);
      res.status(201).json({ msg: "User Created" });
    } catch (error) {
      console.log(error.message);
    }
  };


export const updateUser = async (req, res) => {
    const user = req.body;
    const id = req.params.id;
    try {
      await User.update(user, {
        where: { id: id },
      });
      res.status(200).json({ msg: "User Updated" });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteUser = async (req, res) => {     
    const id = req.params.id;
    try {
      await User.destroy({
        where: { id: id },
      });
      res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
      console.log(error.message);
    }   
  };
  
