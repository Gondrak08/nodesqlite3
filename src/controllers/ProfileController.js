const connection = require('../database/connection');

module.exports={
    async index(req, res ){
        const tracker_id = req.headers.authorization;

        const track = await connection('tracks')
        .where('tracker_id', tracker_id)
        .select('*');

        return res.json(track);
    }
}