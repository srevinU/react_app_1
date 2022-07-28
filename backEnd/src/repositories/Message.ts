import { Repository } from './Repository';
import { Message } from '../databases/squelise/models/Message';

export class MessageRepo extends Repository {
    model = Message(super.Sqlz.db);
}

try {
    const test = new MessageRepo();
    // test.getAll();
    test.insert({
        u_content: 'This is a test mate !'
    });
} catch (err) {
    console.log(err);
}
