import gql from 'graphql-tag'

// 2
export const ALL_CATS_QUERY = gql`
  query getCats {
    getCats {
        id name
  }
}`
