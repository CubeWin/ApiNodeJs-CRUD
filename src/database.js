const mongoose = require('mongoose');

const {NOTE_APP_MONGODB_HOST, NOTE_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTE_APP_MONGODB_HOST}/${NOTE_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));