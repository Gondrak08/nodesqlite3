const express = require('express');

const TravelerController = require('./controllers/TravelerController');
const TrackerController = require('./controllers/TrackerController');
const TracksController = require('./controllers/TracksController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');




const routes = express.Router();


// routes.get('/', (req, res)=>{
//     const params = req.params;
//     console.log(params);

//     return res.send('Hello World!');
// })


//Login
routes.post('/session', SessionController.create);


//users
routes.get('/user',  TravelerController.index)
routes.post('/user', TravelerController.create);
 
//admin
routes.get('/tracker', TrackerController.index);
routes.post('/tracker', TrackerController.create);

//tracks
routes.get('/tracks', TracksController.index)
routes.post('/tracks', TracksController.create)
routes.delete('/tracks/:id', TracksController.delete)
//track profile
routes.get('/profile/', ProfileController.index);

module.exports = routes;
