const express = require( 'express' );
require( 'dotenv' ).config();
const app = express();
const port = process.env.PORT;
const path = require( 'path' );
const cors = require( 'cors' );

//console.log( process.env );

//CORS
app.use( cors() );

//Directorio Publico
app.use( express.static( path.join( __dirname, 'public' ) ) );

//Lectura y parseo del body
app.use( express.json() );

//Rutas:
app.use( '/api', require( './routes/whoami' ) );


app.listen( port, () => console.log( `Header parser app listening on port ${ port }!` ) );
