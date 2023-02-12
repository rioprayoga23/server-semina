const notFound = (req, res) => {
  res.status(404).send({ msg: "Route doesnot exist" });
};

module.exports = notFound;
