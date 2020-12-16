module.exports = function (sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    giftName: DataTypes.STRING,
    giftFor: DataTypes.STRING,
    giftMaxPrice: DataTypes.STRING,
    listId: DataTypes.STRING
    // giftName: {
    //     type: DataTypes.STRING,
    //     notNull: true,
    // },
    // giftFor: {
    //     type: DataTypes.STRING,
    //     notNull: true,
    // },
    // giftMaxPrice: {
    //     type: DataTypes.INTEGER,
    //     notNull: true,
    // },
  });

  Gift.associate = function (models) {
    Gift.belongsTo(models.List, {
      // through: "Lists",
      foreignKey: "listId",
    });
  };

  return Gift;
};