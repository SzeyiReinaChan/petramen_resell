import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Reina Chan",
        email: "reinachan@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Wayne Chan",
        email: "waynechan@example.com",
        password: bcrypt.hashSync("123456", 10),
    }
]

export default users