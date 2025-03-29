const Main = async (app, express) => {
  try {
    app.use('/', await require('./web.js')(app, express));
    app.use('/api', await require('./api.js')(app, express));
  } catch ($err) {
    console.error(`Router server Error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;