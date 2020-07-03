const connection = require('../database/connection');

module.exports={
    async create(req, res){
        const {id} = req.body;

        const traveler = await connection('traveler')
        .where('id', id)
        .select('user_name')
        .first();

        if(!traveler){
            return res.status(400).json({ error: 'No user found'});
        }

        return res.json(traveler);
    }
}