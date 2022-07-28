import { Sequelize, DataTypes, Model } from 'sequelize';
const SequelizeUid = require('sequelize');

export const Message = (sequelize: Sequelize) => {
    class MessageModel extends Model { }

    MessageModel.init({
        // Model attributes are defined here
        sys_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: SequelizeUid.UUIDV4
        },
        u_content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 't_message',
        modelName: 'Message',
        freezeTableName: true,
        timestamps: false
    });
    return MessageModel;
}
