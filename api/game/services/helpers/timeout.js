// Use this in case you have some problem while uploading your gallery images
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
  timeout
};