module.exports = function (sequelize, DataTypes) {
    const List = sequelize.define("List", {
      listName: DataTypes.STRING,
      listCreator: DataTypes.STRING
    });
  
    List.associate = function (models) {
      List.hasMany(models.Gift, {
        // through: "Gifts",
        foreignKey: "ListId",
      });
    };
  
    return List;
  };