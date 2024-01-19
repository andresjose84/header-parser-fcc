const { Router } = require( "express" );
const { getWhoami } = require( "../controllers/whoami" );

const router = Router();

router.get( '/whoami', getWhoami );


module.exports = router;