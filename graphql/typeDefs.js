import { gql } from 'apollo-server';

module.exports = gql`
  type Cat {
    id: ID
    name: String
  }

  type Query {
    getCats: [Cat],
    getCatById(catId: ID): Cat,
  }

  type Mutation {
    createCat(name: String): Cat,
    removeCatById(catId: ID): String
  }
`;