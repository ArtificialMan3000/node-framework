const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname, 'test.txt'), (err, data) => {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(data);
// });

const stream = fs.createReadStream(path.join(__dirname, 'test.txt'));

stream.on('data', (chunk) => {
  console.log(`Прочитано`);
  console.log(chunk);
});
stream.on('end', () => {
  console.log(`Чтение завершено`);
});
stream.on('open', () => {
  console.log(`Чтение начато`);
});
stream.on('error', (err) => {
  console.log(err);
});
