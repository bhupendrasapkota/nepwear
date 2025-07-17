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

export default { getUserData, getUserById };
