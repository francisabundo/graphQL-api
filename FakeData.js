const UserList = [
    {
        id: 1,
        name: "John",
        username: "John",
        age: 20,
        nationality: "CANADA",
        friends:[
            {
                id: 2,
                name: "Pedro",
                username: "Pedro",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: "Kels",
                age: 31,
                nationality: "CHILE",
            },
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 20,
        nationality: "GERMANY",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        username: "Raff",
        age: 30,
        nationality: "CHILE",
    },
    {
        id: 5,
        name: "Kelly",
        username: "Kels",
        age: 31,
        nationality: "CHILE",
    },

]

const MovieList = [
    {
        id: 1,
        name: 'Endgame',
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name:' Black Widow',
        yearOfPublication: 2019,
        isInTheaters: true
    },
]

module.exports = {UserList, MovieList}