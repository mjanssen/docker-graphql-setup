const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen({ port: 3004 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
