import mongoose from 'mongoose';
import config from './config.js';

class Connection {
    constructor() {
        const url = config.MONGO_URL;
        mongoose.Promise = global.Promise;
        this.connect(url, { useNewUrlParser:true, useUnifiedTopology:true }).then(() => {
            console.log('\x1b[30m%s\x1b[0m', '......................................................................................' );
            console.log('\x1b[30m%s\x1b[0m', '...................... ' , '\x1b[32m', 'D A T A B A S E  C O N N E C T E D', '\x1b[30m', ' ........................');
            console.log('\x1b[30m%s\x1b[0m', '......................................................................................' );
        }).catch((err) => {
            console.log('\x1b[30m%s\x1b[0m', '......................................................................................' );
            console.log('\x1b[30m%s\x1b[0m', '.......................... ' , '\x1b[31m', 'D A T A B A S E  E R R O R', '\x1b[30m', ' ............................');
            console.log('\x1b[30m%s\x1b[0m', '......................................................................................' );
            console.log('\x1b[34m%s\x1b[0m', err.message );
        })
    }
    
    async connect(url) {
        try {
            await mongoose.connect( url )
        } catch (err) {
            throw err
        }
    }
}
export default new Connection()