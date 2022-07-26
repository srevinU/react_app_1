import { Sequelize, DataTypes, Model } from 'sequelize';
const SequelizeUid = require('sequelize');

export const Test = (sequelize: Sequelize) => {

    class TestModel extends Model {}

    TestModel.init({
        // Model attributes are defined here
        sys_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: SequelizeUid.UUIDV4,
        },
        u_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'test',
        modelName: 'Test',
        freezeTableName: true,
        timestamps: false
    })
}



/*
const myTest = Test.create({
    u_name: 'Tptp'
}); 
console.log('Toto was saved to the database!');
*/

/*

const records = Test.findAll()
                    .then((rows:any) => console.log(rows))
                    .catch((err:Error) => console.error(err))
*/