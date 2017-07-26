import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';

import models from './models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

var port = process.env.PORT || 3000;
var app = express();


app.use(morgan('dev'));

app.use(express.static('src/client'));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

models.sequelize.sync().then(() => app.listen(port));



