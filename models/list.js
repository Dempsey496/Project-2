module.exports = function(sequelize, DataTypes) {
    const List = sequelize.define("List", {
        listName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        listCreator: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    List.associate = function(models) {
        List.hasMany(models.Gift, {
            foreignKey: "ListId",
        });
    };

    return List;
    
};