'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    avatar: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post);
  };
  return User;
};
