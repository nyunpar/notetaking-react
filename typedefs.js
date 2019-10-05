import { gql } from 'apollo-server-express';

export const typeDefs = gql`
type Note {
  _id: ID!
  title: String!
  date: Date
  content: String!
}

scalar Date

type Query {
  getNote(_id: ID!): Note
  allNotes: [Note]
}
input NoteInput {
  title: String!
  content: String!
}
input NoteUpdateInput {
  title: String
  content: String
}
type Mutation {
 createNote(input: NoteInput) : Note
 updateNote(_id: ID!, input: NoteUpdateInput): Note
 deleteNote(_id: ID!) : Note
}

`;


