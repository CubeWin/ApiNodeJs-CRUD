/**
 * @description Variables de entorno
 */
require('dotenv').config();

const app = require('./sever');
require('./database');

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});