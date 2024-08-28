// server/index.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
const root = {
    hello: () => {
        return 'Hello world!';
    },
};

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
