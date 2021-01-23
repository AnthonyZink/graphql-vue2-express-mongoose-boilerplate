import { AuthenticationError, UserInputError } from 'apollo-server';

const Cat = require('../../models/catModel');

module.exports = {
  Query: {
    async getCats() {
      try {
        const cats = await Cat.find();
        return cats;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCatById(_, {catId}) {
      try {
        const cat = await Cat.findById(catId);
        return cat;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation : {
    async createCat(_, {name}) {
      const cat = new Cat()
      cat.name = name
      cat.save()
      return cat;
    },

    async removeCatById(_, {catId}) {
      const cat = await Cat.findById(catId);
      cat.remove()
      return "You just killed a cat!";
    }
  }
};
