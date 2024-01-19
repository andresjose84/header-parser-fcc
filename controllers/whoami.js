const { response } = require( 'express' );


const getWhoami = ( req, res = response ) => {
    console.log( req.headers );

    const {
        ipaddress,
        language,
        software
    } = req.headers;

    res.status( 200 ).json( {
        'name': 'Whoami',
        ipaddress,
        language,
        software
    } );
};

module.exports = {
    getWhoami
}