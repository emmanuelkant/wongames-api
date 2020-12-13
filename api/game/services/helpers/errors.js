function handleError(e) {
  return { e, data: e.data && e.data.errors && e.data.errors };
};

module.exports = {
  handleError
};