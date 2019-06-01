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
  email: String
  roles: [Role]
}

type Role {
  id: ID!
  name: String!
  reportTo: String!
}

type Query {
  info: String
  user(id: ID!): User!
  users: [User]
  getChildren(name: String!): [Role]
  getDescendants(name: String!): [Role]
}

type Mutation {
  createUser(input: UserInput!): User             # Corresponds to POST /api/users
  updateUser(id: ID!, input: UserInput!): User    # Corresponds to PATCH /api/users
  removeUser(id: ID!): User                       # Corresponds to DELETE /api/users

  addAdmin(input: RoleInput!): Role
  createRole(input: RoleInput!): Role
  updateRole(id: ID!, input: RoleInput!): Role
  removeRole(id: ID!): Role

  #moveUp()
  #moveDown()
  #getAncestorPath()
  #getDescendants()
}

input UserInput {
  username: String
  email: String
  roles: [ID]
}

input RoleInput {
  name: String!
  parentName: String!
}

schema {
    query: Query
    mutation: Mutation
}
`;

export default schema;
