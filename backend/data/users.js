import bcrypt from "bcryptjs"

const user = [
    {
        name: 'Super Admin',
        email: 'superAdmin@yopmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Denish Doe',
        email: 'denishDoe@yopmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Hexter Smith',
        email: 'hexterSmith@yopmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default user