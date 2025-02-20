//* ObjectType - Query (Get) - Mutation (Put - Delete - Post - ...)

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const CourseModel = require("./../models/Course");
const TeacherModel = require("./../models/Teacher");

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    teacher: {
      type: TeacherType,
      resolve: (source) => {
        const teacher = teachers.find(
          (teacher) => teacher.id === source.teacherID
        );
        return teacher;
      },
    },
  }),
});

const TeacherType = new GraphQLObjectType({
  name: "Teacher",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    courses: {
      type: new GraphQLList(CourseType),
      resolve: (source) => {
        const teacherCourses = courses.filter(
          (course) => course.teacherID === source.id
        );
        return teacherCourses;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    courses: {
      type: new GraphQLList(CourseType),
      resolve: async () => {
        return await CourseModel.find({});
      },
    },

    teachers: {
      type: new GraphQLList(TeacherType),
      resolve: async () => {
        return await TeacherModel.find({});
      },
    },

    course: {
      type: CourseType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (source, args) => {
        const course = courses.find((course) => course.id === args.id);
        return course;
      },
    },

    teacher: {
      type: TeacherType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (source, args) => {
        const teacher = teachers.find((teacher) => teacher.id === args.id);
        return teacher;
      },
    },
  },
});

// const RootMutation = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//     addTeacher: {
//       type: TeacherType,
//       args: {
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt },
//       },
//       resolve: async (obj, args) => {
//         const { name, age } = args;
//         const teacher = { name, age };
//         return await TeacherModel.create(teacher);
//       },
//     },

//     addCourse: {
//       // Data
//     },
//   },
// });

// const schema = new GraphQLSchema({
//   query: RootQuery,
//   mutation: RootMutation,
// });

// module.exports = schema;