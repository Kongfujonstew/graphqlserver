export default `
  type User {
    id: Int!
    username: String!
    createdAt: String!

  }

  type Query {
    getUser(username: String!): User
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(username: String!): [Int!]
    deleteUser(username: String!): Int!
  }

`;

