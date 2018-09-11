const { ApolloServer, gql } = require('apollo-server-express');

const AuthorModel = require('../models/author_model');
const BookModel = require('../models/book_model');

const typeDefs = gql `
  type Book {
    _id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    _id: ID
    name: String
    age: Int 
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook: Book
  }
`;

const resolvers = {
  Book: {
    author: async (root, args) => {
      return AuthorModel.findById(root.authorId);
    }
  },

  Author: {
    books: async (root, args) => {
      return BookModel.find({ authorId: root.id });
    }
  },

  Query: {
    books: async () => {
      const books = await BookModel.find({ });
      return books;
    },
    authors: async () => {
      const authors = await AuthorModel.find({ });
      return authors;
    },
  },

  Mutation: {
    addBook: async(root, args) => {
      const { name, genre, author } = args;
      const newBook = new BookModel({ name, genre, author });
      await newBook.save();
      return newBook;
    },
  },
};

const schema = new ApolloServer({ 
  typeDefs, resolvers,
  engine: {
    apiKey: "service:vinhlee95-2446:K0i_jMHCuPwARoAAAQ0WkA"
  }
});
module.exports = schema;


