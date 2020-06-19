const  bcrypt = require('bcrypt');
let pwrd = bcrypt.hashSync('1234',9);
console.log(pwrd);