module.exports = function (sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    giftName: DataTypes.STRING,
    giftFor: DataTypes.STRING,
    giftMaxPrice: DataTypes.STRING
  });

  Gift.associate = function (models) {
    Gift.belongsTo(models.List, {
      // through: "Lists",
      foreignKey: "GiftId",
    });
  };

  return Gift;
};