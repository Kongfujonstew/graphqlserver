import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';

const newSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

var port = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: newSchema }));

app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

