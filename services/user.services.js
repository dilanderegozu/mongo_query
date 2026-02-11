const User = require("../models/user.model");
const utils = require("../utils/helper");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Email zaten kullanımda");
    }
    const _password = utils.hashToPassword(password);
    const user = new User({
      name,
      surname,
      password: _password,
      email,
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
