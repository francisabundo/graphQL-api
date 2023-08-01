const {UserList, MovieList} = require('../FakeData');
const _ = require('lodash');


const resolvers = {
    Query: {
        //USER RESOLVERS
        users: ()=>{
            return UserList;
        },

        user: (parent, args)=>{
            const id = args.id
            const user = _.find(UserList, { id: Number(id) });
            return user
        },

        //MOVIE RESOLVERS
        movies: ()=>{
            return MovieList;
        },

        movie: (parent, args)=>{
            const id = args.name
            const movie = _.find(MovieList, {name})
            return movie
        },
    },
    
}

module.exports = { resolvers }