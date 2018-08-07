import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import cors from 'cors';

// Config
const APP_PORT = 3000;

// Start
const app = Express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, ()=> {
  console.log(`App listening on port ${APP_PORT}`);
});
