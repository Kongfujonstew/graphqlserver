export default `
  type User {
    id: Int!
    username: String!
    room: String!
  }

  type Post {
    id: Int!
    time: String!
    userId: Int!
    title: String!
    text: String!
    room: String!
  }

  type Query {
    allUsers: [User!]!
    getUserByName(username: String!): User
    getUserById(id: Int!): User
    findUsersByRoom(room: String!): [User]
    findPostsByRoom(room: String!): [Post]
  }

  type Mutation {
    createUser(username: String!): User
    findOrCreateUser(username: String!): User
    updateUser(username: String!): [Int!]
    deleteUser(username: String!): Int!

    deletePostByPostId(id: Int!): Post
    deleteAllPostsByUserId(id: Int!): [Post]

    createPost(id: Int!): Post

    enterRoom(id: Int!): String!
  }

`;

