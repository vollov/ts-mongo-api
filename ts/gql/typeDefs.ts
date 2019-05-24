const schema = `

type Address {
  city: String
  province: String
  country: String
}

type User {
  id: ID!
  username: String!
  address: Address
}

type Query {
  info: String
  user(id: ID!): User!
  users: [User]
}

type Mutation {
  createUser(input: UserInput!): User             # Corresponds to POST /api/users
  updateUser(id: ID!, input: UserInput!): User    # Corresponds to PATCH /api/users
  removeUser(id: ID!): User                       # Corresponds to DELETE /api/users
}

input UserInput {
  username: String
  email: String
}

schema {
    query: Query
    mutation: Mutation
}
`;

export default schema;
