module.exports = function (sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    giftName: DataTypes.STRING,
    giftFor: DataTypes.STRING,
    giftMaxPrice: DataTypes.STRING,
    listId: DataTypes.STRING
  });

  Gift.associate = function (models) {
    Gift.belongsTo(models.List, {
      // through: "Lists",
      foreignKey: "listId",
    });
  };

  return Gift;
};