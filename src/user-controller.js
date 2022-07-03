const users = [
  {
    id: 1,
    name: 'Petya',
  },
  {
    id: 2,
    name: 'Vasia',
  },
];

const getUsers = (req, res) => {
  const userIdParam = req.parsedUrl.searchParams.get('id');
  if (userIdParam) {
    const user = users.find((currUser) => currUser.id === Number(userIdParam));

    if (user) {
      res.sendJson(user);
    } else {
      res.write('Have not user with that id');
    }
  } else {
    res.sendJson(users);
  }
};

const createUser = (req, res) => {
  const user = req.bodyParsed;
  users.push(user);
  res.sendJson(users);
};

module.exports = { getUsers, createUser };
