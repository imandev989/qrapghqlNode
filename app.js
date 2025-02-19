//? Rest
//* /api/courses/graphql -> GraphQL Course Info
//* /api/teacher/12 -> Teacher Info
//* /api/teacher/12/courses -> Teacher Courses

//? GraphQL
{
    courses(name: "graphql") {
        id,
        title,
            price,    
            teacher {
            courses
            }
    }
}