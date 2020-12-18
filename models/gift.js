module.exports = function (sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    giftName: DataTypes.STRING,
    giftFor: DataTypes.STRING,
    giftMaxPrice: DataTypes.STRING,
    listId: DataTypes.INTEGER,
  });

  Gift.associate = function (models) {
    Gift.belongsTo(models.List, {
      foreignKey: "listId",
    });
  };

  return Gift;
};
