const db = require('../config/connection');
const { User, Search } = require('../models');

db.once('open', async () =>{

    await User.deleteMany();

    await User.create({
        email: 'test@gmail.com',
        password: 'password123'
    })

    await User.create({
        email: 'test1@gmail.com',
        password: 'password123'
    })

    await User.create({
        email: 'test12@gmail.com',
        password: 'password123'
    })
})