console.log(1, 2, 3);
console.log('hello', 'world');
console.log(__filename, __dirname);
console.log(module);
console.log(exports);

const path = require('path');
console.log(path.join(__filename, 'test', 'sample.html'));

const os = require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(process);