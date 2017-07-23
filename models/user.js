import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    username: Datatypes.STRING
  });

  // User.associate = (models) {
  //   User.hasMany(models.Hobby);
  // }

  return User;
}