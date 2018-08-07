import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import Db from './db';

const Surfer = new GraphQLObjectType({
  name: 'Surfer',
  description: 'This represents a surfer',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (person) {
          return person.id;
        }
      },
      username: {
        type: GraphQLString,
        resolve (person) {
          return person.username;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve (person) {
          return person.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve (person) {
          return person.lastName;
        }
      },
      job: {
        type: GraphQLString,
        resolve (person) {
          return person.job;
        }
      },
      email: {
        type: GraphQLString,
        resolve (person) {
          return person.email;
        }
      },
      /*description: {
        type: GraphQLString,
        resolve (person) {
          return person.description;
        }
      },*/
       image: {
        type: GraphQLString,
        resolve (person) {
          return person.image;
        }
      }
    }
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      surfers:{
        type: new GraphQLList(Surfer),
        args: {
          id: {
            type:  GraphQLInt // int!
          },
          username: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Db.models.surfer.findAll({ where: args });
        }
      }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      addSurfer: {
        type: Surfer,
        args: {
          username: {
            type: new GraphQLNonNull(GraphQLString) // String!
          },
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString) 
          },
          job: {
            type: GraphQLString // String
          },
          email: {
            type: GraphQLString
          },
          image: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(source, args) {
          return Db.models.surfer.create({
            username: args.username,
            firstName: args.firstName,
            lastName: args.lastName,
            job: args.job,
            email: args.email.toLowerCase(),
            image: args.image
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
