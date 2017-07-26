export default {
  Query: {
    allUsers: (p, a, { models }) => models.User.findAll(),
    getUserByName: (p, { username }, { models }) => 
      models.User.findOne({
        where: {
          username,
        },
      }),
      
    getUserById: (p, { id }, { models }) =>
      models.User.findOne({
        where: {
          id,
        }
      }),
    findUsersByRoom: (p, a, { models }) =>
      models.User.findAll({
        where: {
          room,
        }
      }),

    findPostsByRoom: (p, a, { models }) =>
      models.Post.findAll({
        where: {
          room,
        }
      })
  },

  Mutation: {
    createUser: (p, a, { models }) => models.User.create(a),
    findOrCreateUser: (p, a, { models }) => models.User.findOrCreate(a),
    updateUser: (p, a, { models }) => models.User.update(a),
    deleteUser: (p, a, { models }) => models.User.destroy({ where: a}),

    createPost: (p, { userId, title, text, room }, { models }) =>
      models.Post.create({
        where: {
          userId,
          title,
          text,
          room,
        }
      }),

    deletePostByPostId: (p, { id }, { models }) => models.Post.destroy({ where: a}),

    deleteAllPostsByUserId: (p, { userId }, { models }) => 
      models.Post.findAll({
        where: {
          userId,
        }
      }).then((users) => {
        users.forEach((user) => {
          user.destroy();
        })
      }),

    enterRoom: (p, { userId, room }, { models }) => 
      models.User.findOne({
        where: {
          userId,
        }
      }).then((user) => {
        user.update({
          where: {
            room,
          }
        })
      })
  },

};


