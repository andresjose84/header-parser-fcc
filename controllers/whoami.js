const { response } = require( 'express' );


const getWhoami = ( req, res = response ) => {
    console.log( req.headers );

    const language = req.headers[ 'user-agent' ];
    const software = req.headers[ 'accept-language' ];
    const [ ipaddress ] = req.headers[ 'x-forwarded-for' ].split( ',' );

    res.status( 200 ).json( {
        ipaddress,
        language,
        software
    } );
};

module.exports = {
    getWhoami
}