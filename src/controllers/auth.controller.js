import User from "../models/user.model.js";

export async function createdUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({ message: "the email is already in use" });

    const newUser = new User({
      username,
      email,
      password,
    });

    const userSaved = await newUser.save();

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.statusText });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(404).json({ message: "The email does not exist" });

    console.log(userFound);

    res.json(userFound);
  } catch (error) {}
}
