export default {
  Query: {
    getUser: (p, a, { models }) => models.User.findOne()
  }
};


