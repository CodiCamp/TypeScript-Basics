// Object literal improvements
const path = './dist';
const filename = 'app.js';

const getFullPath = function() {
  console.log(this);
  return this.path + this.filename;
};

const config = { path, filename, getFullPath };

console.log(config.getFullPath());
