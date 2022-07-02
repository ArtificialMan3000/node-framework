const User = require('./user-model');

const getUsers = async (req, res) => {
  const userIdParam = req.parsedUrl.searchParams.get('id');

  if (userIdParam) {
    const user = await User.findById(userIdParam);
    console.log('user', user);
    if (user) {
      res.sendJson(user);
    } else {
      res.write('Have not user with that id');
    }
  } else {
    const users = await User.find();
    res.sendJson(users);
  }
};

const createUser = async (req, res) => {
  const user = await User.create(req.bodyParsed);
  res.sendJson(user);
};

module.exports = { getUsers, createUser };
