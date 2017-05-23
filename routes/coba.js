var crypto = require('crypto');
var password = "halo"
var sha256 = crypto.createHash('sha256').update(password).digest("hex");
console.log(sha256);