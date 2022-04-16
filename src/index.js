import {
  ApolloServer
} from 'apollo-server';
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";






//const typeDefs = [Query, volunteerDef]
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Launch the server

server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});