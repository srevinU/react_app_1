import { Sqlz } from "../databases/squelise/Sqlz"
import { Test } from "../databases/squelise/models/Test"

export class Repository {
    Sqlz = new Sqlz();
    model = Test;

    

    async getAll() {
        this.Sqlz.register();
        // There should be my query
        this.Sqlz.disconect();
    }
 
}

try {
    const test = new Repository();
    test.getAll();
} catch (err) {
    console.log(err)
}