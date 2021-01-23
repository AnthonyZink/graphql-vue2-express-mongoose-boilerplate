import catResolvers from './catResolvers';

module.exports = {
  Query: {
    ...catResolvers.Query,
  },

  Mutation: {
    ...catResolvers.Mutation,
  }
  
};