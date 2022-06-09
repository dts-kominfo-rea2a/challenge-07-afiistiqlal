const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let jumlahYangEmosi = 0;
    const arrEmosi = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    arrEmosi.forEach(element => {(element.hasil === emosi) ? jumlahYangEmosi++ : ''});
    return jumlahYangEmosi;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
