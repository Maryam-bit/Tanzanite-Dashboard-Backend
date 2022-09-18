import config from './config/config.js'
import server from "./config/server.js";
import ('./config/database.js')

const PORT = config.PORT || 8080;

console.log( '✔ Bootstrapping Application' );
console.log( '✔ Sanitizing Application' );

server.listen( PORT ).on( 'error', ( err ) => {
    console.log('\x1b[31m%s\x1b[0m', '✘ Application failed to start' );
    console.error('\x1b[31m%s\x1b[0m', `✘ ${err.message}` );
    process.exit( 0 );
}).on( 'listening', () => {
    console.log( '✔ Application Started' );
    console.table([
        { key: "MODE", value: config.MODE},
        { key: "URL", value: `http://localhost:${config.PORT}`},
    ])
});