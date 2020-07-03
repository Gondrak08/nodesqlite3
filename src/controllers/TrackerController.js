const connection = require('../database/connection');
const crypto = require('crypto');

module.exports={
    async index(req, res){
        const tracker = await connection('tracker').select('*');

        return res.json(tracker);
    },

    async create(req, res){
        const {name, password, email} = req.body

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('tracker').insert({
            id,
            name, 
            password,
            email
        })

        return res.json({id})
    }
}