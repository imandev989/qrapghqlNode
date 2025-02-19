//* ObjectType - Query (Get) - Mutation (Put - Delete - Post - ...)

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
  } = require("graphql");
  
  const courses = [
    { id: 1, title: "React.js", price: 4_800_000 },
    { id: 2, title: "Node.js", price: 3_300_000 },
    { id: 3, title: "Vue.js", price: 0 },
    { id: 4, title: "GraphQL", price: 970_000 },
  ];
  
  const teachers = [
    { id: 1, name: "Amin", age: 24 },
    { id: 2, name: "Qadir", age: 22 },
    { id: 3, name: "Ashkan", age: 28 },
    { id: 4, name: "Moein", age: 22 },
  ];
  
  const CourseType = new GraphQLObjectType({
    name: "Course",
    fields: () => ({
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      price: { type: GraphQLString },
    }),
  });
  
  const TeacherType = new GraphQLObjectType({
    name: "Teacher",
    fields: () => ({
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    }),
  });
  
  const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      courses: {
        type: new GraphQLList(CourseType),
        resolve: () => {
          return courses;
        },
      },
  
      teachers: {
        type: new GraphQLList(TeacherType),
        resolve: () => {
          return teachers;
        },
      },
    },
  });
  
  const schema = new GraphQLSchema({
    query: RootQuery,
  });
  
  module.exports = schema;