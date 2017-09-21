const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const main_ctrl = require('./controllers/main_ctrl.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('req body', req.body);
  console.log('req query', req.query);
  console.log('req params', req.params);
  next()
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})

app.get('/api/name', main_ctrl.getName);
app.get('/api/location', main_ctrl.getLocation);
app.get('/api/occupations', main_ctrl.getOccupation);
app.get('/api/occupations/latest', main_ctrl.getOccupationLatest);
app.get('/api/hobbies', main_ctrl.getHobbies);
app.get('/api/hobbies/:type', main_ctrl.getHobbyType);
app.get('/api/family', main_ctrl.getFamily);
app.get('/api/family/:gender', main_ctrl.getFamilyGender);
app.get('/api/restaurants', main_ctrl.getResturants);
app.get('/api/restaurants/:name', main_ctrl.getResturantsName);
app.put('/api/name/:id', main_ctrl.changeName);
app.put('/api/location/:id', main_ctrl.changeLocation);
app.post('/api/occupations', main_ctrl.postOcc);
app.post('/api/hobbies', main_ctrl.postHobbies);
app.post('/api/family', main_ctrl.postFamily);
app.post('/api/restaurants', main_ctrl.postRest);

app.get('/api/skills', main_ctrl.getSkills);

app.post('/api/skills', main_ctrl.postSkills);
