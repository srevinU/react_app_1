import { Sequelize } from 'sequelize';

export class Sqlz {
    public db: Sequelize = new Sequelize(
        'db_react_app_1', 'postgres', '', {
            host: 'localhost',
            dialect: 'postgres'
        }
    );

    async register(): Promise<void> {
        this.db.authenticate()
            .then(() => console.log('Connection has been established successfully.'))
            .catch((err: Error) => console.log('Unable to connect to the database:', err))
    }

    async disconnect(): Promise<void> {
        this.db.close()
            .then(() => console.log('Disconnection has been established successfully.'))
            .catch((err) => console.log('Unable to disconnect to the database:', err))
    }
}
