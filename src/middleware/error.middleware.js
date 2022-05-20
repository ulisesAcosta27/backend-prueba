const handleErrors = (err, req, res, next) => {
  return res.status(400).json({msg: err.message})
};

module.exports = {
  handleErrors
}