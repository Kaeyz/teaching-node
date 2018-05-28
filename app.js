var { add } = require('./day1.js')

// import moduleName from 'module';
// import { originalName as alias } from 'module';
// import * as alias from 'module';
// import {  } from "module";

console.log(typeof Number(process.argv[2]))
console.log(typeof Number(process.argv[3]))


add(+process.argv[2], +process.argv[3])