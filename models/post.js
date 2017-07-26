import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: sequelize.NOW,
    userId: Datatypes.STRING,
    title: Datatypes.STRING,
    text: Datatypes.STRING,
    room: Datatypes.STRING

  });

  // Post.associate = (models) {
  //   Post.hasMany(models.Hobby);
  // }

  return Post;
};
