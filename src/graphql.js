const { gql } = require('apollo-server');
const axios = require('axios');

const typeDefs = gql`
  type Joke {
    id: Int
    joke: String
    categories: [String]
  }

  type Result {
    type: String
    value: Joke
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    joke: Result
  }
`;

const resolvers = {
  Query: {
    joke: async () => {
      const joke = await axios.get('http://api.icndb.com/jokes/random');
      return joke.data;
    },
  },
};

module.exports = { typeDefs, resolvers };
