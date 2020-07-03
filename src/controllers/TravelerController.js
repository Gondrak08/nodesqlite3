const connection = require('../database/connection');
const crypto = require('crypto');

module.exports={
    async index(req, res){
        const traveler = await connection('traveler').select('*');
        
        return res.json(traveler);
   },

    async create(req, res){
        const {first_name, second_name, user_name, password, email, phone, cpf} =  req.body;
   
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('traveler').insert({
            id,
            first_name,
            second_name,
            user_name,
            password,
            email,
            phone,
            cpf
        })
    
        return res.json({id});
    }
}