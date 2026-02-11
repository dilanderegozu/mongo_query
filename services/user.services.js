const User = require("../models/user.model");
const utils = require("../utils/index");

exports.register = async (req) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      throw new Error("Email zaten kullanımda");
    }
    const _password = utils.hashToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _password = utils.hashToPassword(password);
    const existUser = await User.findOne({ email: email, password: _password });
    if (!existUser) {
      throw new Error("Kullanıcı bilgileri yanlış");
    }
    return "Giriş başarılı";
  } catch (error) {
    throw new Error(error);
  }
};
exports.updateUser = async (req) => {
  try {
    const { userId } = req.params;
    const { name, surname } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: name, surname: surname },
      { new: true },
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteUser = async (req) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    await User.findByIdAndDelete(userId);
    return "Kullanıcı başarılı şekilde silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu1 = async (req) => {
  try {
    const { gender, zodiac } = req.params;

    return await User.find({
      gender: gender,
      zodiac: zodiac,
      age: { $exists: false }
    });
  } catch (error) { throw error; }
};

exports.sorgu2 = async (req) => {
  try {
    const { zodiac } = req.params;
    return await User.find({
      gender: "Kadın",
      zodiac: zodiac, 
      age: { $gte: 18, $lte: 40 }
    });
  } catch (error) { throw error; }
};

exports.sorgu3 = async (req) => {
  try {
    return await User.find({
      $or: [
        { gender: { $exists: false } },
        { birthDate: { $exists: false } },
        { age: { $exists: false } },
      ]
    });
  } catch (error) { throw error; }
};

exports.sorgu4 = async (req) => {
  try {
    const { zodiac } = req.params;

    return await User.find({
      $or: [
        { gender: "Erkek" },
        { zodiac: zodiac }
      ]
    });
  } catch (error) { throw error; }
};


/*
sorgu1- cinsiyeti gender*  olan, burcu zodiac* olan ve age bilgisi bulunmayan kullanıcılar
sorgu2- cinsiyeti Kadın olan, burcu zodiac* olan age aralığı 18-40 olan kullanıcılar
sorgu3- cinsiyeti bulunmayan veya doğum tarihi bulunmayan veya yaş bilgisi bulunmayan kullanıcılar
sorgu4- cinsiyeti Erkek olan veya burcu zodiac* olan (or)
*/
