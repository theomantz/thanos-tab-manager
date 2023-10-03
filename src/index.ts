import { UAParser } from "ua-parser-js";

const parser = new UAParser();  
console.log(parser.getResult());