import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: Datatypes.STRING,
    room: {
      type: Datatypes.STRING,
      defaultValue: "Front Page"
    }

  });

  // User.associate = (models) {
  //   User.hasMany(models.Post);
  // }

  return User;
};
