const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// fs.mkdir(path.resolve(__dirname, 'dir/dir1/dir2/dir3'), (err) => {
//   throw new Error(err);
// });

// fs.writeFile(path.join(__dirname, 'file.txt'), '123 file content', (err) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('File created');
//   }

//   fs.appendFile(path.join(__dirname, 'file.txt'), 'Добавили в конец', (err) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       console.log('File appended');
//     }
//   });
// });

const writeFilePromised = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const appendFilePromised = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const readFilePromised = (path, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const rmPromised = (path, options) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// writeFilePromised(path.join(__dirname, 'file.txt'), '123 file content')
//   .then(() => console.log('File created'))
//   .then(() =>
//     appendFilePromised(path.join(__dirname, 'file.txt'), 'Добавили в конец')
//   )
//   .then(() =>
//     appendFilePromised(path.join(__dirname, 'file.txt'), ' Ещё добавили')
//   )
//   .then(() =>
//     appendFilePromised(path.join(__dirname, 'file.txt'), ' И ещё добавили')
//   )
//   .then(() => console.log('File appended'))
//   .then(() => readFilePromised(path.join(__dirname, 'file.txt'), 'utf-8'))
//   .then((data) => console.log(data))
//   .then(() => rmPromised(path.join(__dirname, 'file.txt')))
//   .then(() => console.log('File deleted'))
//   .catch((err) => {
//     throw new Error(err);
//   });

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

const filePath = path.join(__dirname, 'file.txt');
const file2Path = path.join(__dirname, 'file2.txt');

writeFilePromised(filePath, (process.env.STRING = ''))
  .then(() => readFilePromised(filePath, 'utf-8'))
  .then((data) => data.split(' ').length)
  .then((count) => writeFilePromised(file2Path, `${count}`))
  .then(() => rmPromised(filePath));

console.log('END');
