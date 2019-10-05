import express from "express";
import  {ApolloServer, gql} from 'apollo-server-express';
import mongoose from "mongoose";
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
});


const PORT = 4300;

const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1"
  });
});

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4300${server.graphqlPath}`)
)
