let id = 0;
getId = () => ++id;

const users = [
  {
    id: getId(),
    username: "oguzhan",
    password: 1234,
  },
  {
    id: getId(),
    username: "alper",
    password: 1234,
  },
  {
    id: getId(),
    username: "ayşe",
    password: 1234,
  },
  {
    id: getId(),
    username: "fatma",
    password: 1234,
  },
];

module.exports = users;
