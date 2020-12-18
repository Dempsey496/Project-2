module.exports = function (sequelize, DataTypes) {
  const List = sequelize.define("List", {
    listName: {
      type: DataTypes.STRING,
      notNull: true,
    },
    listCreator: {
      type: DataTypes.STRING,
      notNull: true,
    },
  });

  List.associate = function (models) {
    List.hasMany(models.Gift, {
      foreignKey: "listId",
    });
  };

  return List;
};
