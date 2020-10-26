const crypto = require('crypto');

crypto.randomBytes(63, (err, buf) => {
  const salt = buf.toString('base64');
  console.log(`salt : ${salt}`);
  crypto.pbkdf2('pw', salt, 10000, 64, 'sha512', (err, key) => {
    console.log(`password : ${key.toString('base64')}`);
  });
});