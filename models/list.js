module.exports = function(sequelize, DataTypes) {
    const List = sequelize.define("List", {
        listName: {
            type: DataTypes.STRING,
            notNull: true,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter list name'
            //     }
            // }
        },
        listCreator: {
            type: DataTypes.STRING,
            notNull: true,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter creator name'
            //     }
            // }
        }
    });

    List.associate = function(models) {
        List.hasMany(models.Gift, {
            foreignKey: "listId",
        });
    };

    return List;
};