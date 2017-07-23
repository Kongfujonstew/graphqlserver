import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';

import models from './models';



// var env = process.env.NODE_ENV || "development"
// var config = require(path(__dirname, '..', 'config', 'config.json'))[env];  

// if (process.env.DATABASE_URL) {
//   var sequelize = new Sequelize(process.env.DATABASE_URL, config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// };

// var sequelize = new(Sequelize(process.env.DATABASE_URL, config));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

var port = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

models.sequelize.sync().then(() => app.listen(port));

app.get('/', (req, res) => {
  res.send('hello world');
});

