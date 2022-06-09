const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let jumlahYangEmosi = 0;
  const arrEmosi = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
  arrEmosi.forEach(element => {(element.hasil === emosi) ? jumlahYangEmosi++ : ''});
  return jumlahYangEmosi;
};

module.exports = {
  promiseOutput,
};
