import User from "../models/user.model.js";

export async function createdUser(req, res) {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  await newUser.save();

  res.json(newUser);
}

export async function login(req, res) {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (!userFound)
    return res.status(404).json({ message: "The email does not exist" });

  console.log(userFound);

  res.send("recibido");
}
