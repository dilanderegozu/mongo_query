const md5 = require("md5");

exports.hashToPassword = (password) => {
  return md5(password);
};


// const bcrypt = require('bcrypt');
// exports.hashToPassword = async (password) => {
//     const saltRounds = 10; // Güvenlik seviyesi
//     return await bcrypt.hash(password, saltRounds);
// };
// exports.comparePassword = async (password, hashedPassword) => {
//     return await bcrypt.compare(password, hashedPassword);
// };