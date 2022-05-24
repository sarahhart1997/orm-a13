const express = require('express');
// import sequelize connection

const app = express();
const routes = require('./develop/routes');
const sequelize = require('./develop/config/connection');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });
});
