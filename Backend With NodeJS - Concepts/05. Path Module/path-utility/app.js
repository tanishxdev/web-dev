// ===========================
// Mini Project: Path Analyzer
// ===========================

const analyzeFilePath = require('./utils/pathAnalyzer');
const samplePath = 'C:/Users/Tanish/Desktop/NodeJS/path-demo/index.js';

const result = analyzeFilePath(samplePath);

console.log("File Path Details:\n", result);