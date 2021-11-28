<<<<<<< HEAD
import setPostgresDefaultsOnHeroku from './util/setPostgresDefaultsOnHeroku';
=======
const setPostgresDefaultsOnHeroku = require('./util/setPostgresDefaultsOnHeroku');
>>>>>>> ce598f139c0f71b46b9e2640439c47505406e6c7

setPostgresDefaultsOnHeroku();

const options = {};

if (process.env.NODE_ENV === 'production') {
  options.ssl = { rejectUnauthorized: false };
}

module.exports = options;
