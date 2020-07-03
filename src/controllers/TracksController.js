const connection = require('../database/connection'); 

module.exports={
    async index(req, res){
        const {page = 1} = req.query;
        const [count] = await connection('tracks').count();
       
        const tracks = await connection('tracks')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        res.header('X-Total-Count', count['count(*)'])

        return res.json(tracks)
    },

    async create(req, res){
        const {title, description, value, image} = req.body;

        const tracker_id = req.headers.authorization;

        const [id] =  await connection('tracks').insert({
            title,
            description,
            value,
            image,
            tracker_id
        });

        return res.json({id});
    },

    async delete(req, res){
        const {id} = req.params;
        const tracker_id = req.headers.authorization;

        const track = await connection('tracks')
            .where('id', id)
            .select('tracker_id')
            .first();

        if(track.tracker_id !== tracker_id){
            return res.status(401).json({error: 'Operation not permitted'});
        }

        await connection('tracks').where('id', id).delete();
    
        return res.status(204).send();
    }
};