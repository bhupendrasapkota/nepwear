import userService from "../services/userService.js";

const getUserData = (req, res) => {
  const data = userService.getUserData();

  if (!data) {
    res.status(404).send("No user data found");
  }
  res.json(data);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = userService.getUserById(id);

  res.json(user);
};

const createusers = (req, res) => {
  if (req.body) {
    userService.createuser(req.body);
    res.send("User was created sucessfully");
  } else {
    res.send("there was an error");
  }
};

export default { getUserData, getUserById, createusers };
