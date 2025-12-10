// ===========================
// Utility: Path Analyzer
// ===========================

const path = require('path');

function analyzeFilePath(filePath) {
  const details = {
    base: path.basename(filePath),
    dir: path.dirname(filePath),
    ext: path.extname(filePath),
    isAbsolute: path.isAbsolute(filePath),
    parsed: path.parse(filePath),
  };

  return details;
}

module.exports = analyzeFilePath;