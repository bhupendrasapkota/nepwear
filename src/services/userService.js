import fs from "fs";

const data = fs.readFileSync("./src/data/users.json", "utf8");
const parseddata = JSON.parse(data);

const getUserData = () => {
  const data = parseddata.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  });
  return data;
};

const getUserById = (id) => {
  const founduser = parseddata.find((user) => user._id === parseInt(id));
  if (!founduser) {
    return null;
  }
  return {
    id: founduser._id,
    name: founduser.name,
    email: founduser.email,
    phone: founduser.phone,
  };
};

const createuser = (data) => {
  parseddata.push(data);

  fs.writeFileSync("./src/data/users.json", JSON.stringify(parseddata));
};

export default { getUserData, getUserById, createuser };
