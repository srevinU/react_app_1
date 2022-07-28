import { Sqlz } from '../databases/squelise/Sqlz';
import { Test } from '../databases/squelise/models/Test';

export class Repository {
    Sqlz = new Sqlz();
    model = Test(this.Sqlz.db);

    async getAll(): Promise<void> {
        await this.Sqlz.register();
        // There should be my query
        this.model.findAll()
            .then((rows:any) => console.log(rows))
            .catch((err:Error) => console.error(err))
            .finally(() => {
                this.Sqlz.disconnect()
            })
    }

    async insert(json: any): Promise<void> {
        await this.Sqlz.register();
        // There should be my query
        this.model.create(json)
            .then((rows:any) => console.log(rows))
            .catch((err:Error) => console.error(err))
            .finally(() => {
                this.Sqlz.disconnect()
            })
    }
}

/*
try {
    const test = new Repository();
    test.getAll();
} catch (err) {
    console.log(err);
}
 */
