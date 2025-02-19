//* ObjectType - Query (Get) - Mutation (Put - Delete - Post - ...)

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require("graphql");

const courses = [
    { id: 1, title: "React.js", price: 4_800_000 },
    { id: 2, title: "Node.js", price: 3_300_000 },
    { id: 3, title: "Vue.js", price: 0 },
    { id: 4, title: "GraphQL", price: 970_000 },
];



const CourseType = new GraphQLObjectType({
    name: "Course",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { GraphQLString }
    })
})


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        courses: {
            type: new GraphQLList(CourseType),
            resolve: () => {
                return courses;
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQuery
})


module.exports = schema;