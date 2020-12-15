module.exports = function(sequelize, DataTypes) {
    const Gift = sequelize.define("Gift", {
        giftName: {
            type: DataTypes.STRING,
            notNull: true,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter the name of the gift'
            //     }
            // }
        },
        giftFor: {
            type: DataTypes.String,
            notNull: true,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter the name of the receiver'
            //     }
            // }
        },
        giftMaxPrice: {
            type: DataTypes.INTEGER,
            notNull: true,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter the max price of the gift'
            //     }
            // }
        }
    });

    Gift.associate = function(models) {
        Gift.belongsTo(models.Gift, {
            foreignKey: "GiftId",
        });
    };

    return Gift;
};