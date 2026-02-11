const md5 = require("md5");

exports.hashToPassword = (password) => {
  return md5(password);
};

exports.calculateZodiac = (day, month) => {
  const d = Number(day);
  const m = Number(month);

  switch (m) {
    case 1: // Ocak
      return d >= 20 ? "Kova" : "Oğlak";
    case 2: // Şubat
      return d >= 19 ? "Balık" : "Kova";
    case 3: // Mart
      return d >= 21 ? "Koç" : "Balık";
    case 4: // Nisan
      return d >= 20 ? "Boğa" : "Koç";
    case 5: // Mayıs
      return d >= 21 ? "İkizler" : "Boğa";
    case 6: // Haziran
      return d >= 21 ? "Yengeç" : "İkizler";
    case 7: // Temmuz
      return d >= 23 ? "Aslan" : "Yengeç";
    case 8: // Ağustos
      return d >= 23 ? "Başak" : "Aslan";
    case 9: // Eylül
      return d >= 23 ? "Terazi" : "Başak";
    case 10: // Ekim
      return d >= 23 ? "Akrep" : "Terazi";
    case 11: // Kasım
      return d >= 22 ? "Yay" : "Akrep";
    case 12: // Aralık
      return d >= 22 ? "Oğlak" : "Yay";
    default:
      throw new Error("Geçersiz ay bilgisi");
  }
};

// const bcrypt = require('bcrypt');
// exports.hashToPassword = async (password) => {
//     const timeout = 10; 
//     return await bcrypt.hash(password, timeout);
// };
// exports.comparePassword = async (password, hashedPassword) => {
//     return await bcrypt.compare(password, hashedPassword);
// };