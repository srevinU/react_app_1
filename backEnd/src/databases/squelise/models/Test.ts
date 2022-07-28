import { Sequelize, DataTypes, Model } from 'sequelize';
const SequelizeUid = require('sequelize');

export const Test = (sequelize: Sequelize) => {
    class TestModel extends Model { }

    TestModel.init({
    // Model attributes are defined here
        sys_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: SequelizeUid.UUIDV4
        },
        u_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 't_test',
        modelName: 'Test',
        freezeTableName: true,
        timestamps: false
    });
    return TestModel;
}
