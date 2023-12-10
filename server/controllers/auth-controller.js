const home = (req, res) => {
  try {
    res.status(200).send("Welcome to thapa technical Mern Series Updated");
  } catch (error) {
    res.status(400).send({ msg: "page not found", error: error });
  }
};
const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to thapa technical Mern Series Updated");
  } catch (error) {
    res.status(400).send({ msg: "page not found", error: error });
  }
};

module.exports = { home, register };
