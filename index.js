// IMPORTING
const data = require('./data');
const functions = require('./modules')


functions.AppendJSON("./json.json", data.genres);
functions.AppendJSON("./json.json", data.singers);
functions.AppendJSON("./json.json", data.bands);
functions.AppendJSON("./json.json", data.bandsArray);
functions.AppendJSON("./json.json", data.moreSingers);