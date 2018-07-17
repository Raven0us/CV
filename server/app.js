require('module-alias/register');
const fs = require('fs');
const mergeJSON = require("merge-json");

const configMain = require("./config");

const pathToLocal = "./config-local.json";

// todo move this to a one-time action/come up with smarter local config cause it's unnecessary overhead here
if (!fs.existsSync(pathToLocal)) {
	fs.writeFileSync(pathToLocal, "{}", (e) => {
		return `Couldn't create local configuration file due to ${e.message}`;
	});

	console.log("Configuration file successfully created");
}
const configLocal = require(pathToLocal);

const config = mergeJSON.merge(configMain, configLocal);

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.set("debug", true);
mongoose.connect(`${config.db.protocol}://${config.db.host}:${config.db.port}/${config.db.name}`)
	.then(() => {
		console.log('Established connection to database');
	}).catch((e) => {
	console.log(`Could not establish connection to database due to ${e.message}`);
});

app.set('salt', config.jwt.salt);

app.use((req, res, next) => {
	res.append('Content-Type', 'application/json');
	res.append('Access-Control-Allow-Origin', 'http://localhost:667');
	res.append('Access-Control-Allow-Headers', 'X-Access-Token');
	next();
});

app.use(require("./routes/shared"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	console.log(err.stack);
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.contentType('application/json');
	res.send({
		error: "Not found"
	});
});

module.exports = app;
