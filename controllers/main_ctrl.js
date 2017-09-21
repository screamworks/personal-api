const user = require('../users');
const skills = require('../skills');

const getName = (req, res, next) => {
  res.status(200).json({name: user.name});
}

const getLocation = (req, res, next) => {
  res.status(200).json({location: user.location});
}

const getOccupation = (req, res, next) => {
if(req.query.order === "asc"){
  var order = user.occupations.sort();
  res.status(200).json(order);
}if(req.query.order === "desc") {
  var order = user.occupations.reverse();
    res.status(200).json(order);
} else {
      res.status(200).json({occupation: user.occupations});
}
}
const getOccupationLatest = (req, res, next) => {
  res.status(200).json({occupation: user.occupations.pop()})
}

const getHobbies = (req, res, next) => {
  res.status(200).json({hobbies: user.hobbies});
}
const getHobbyType = (req, res, next) => {
  if (req.params.type){
     res.json(user.hobbies.filter( hobby => hobby.type === req.params.type));
  } else {
    res.json(user.hobbies);
  }
}

const getFamily = (req, res, next) => {
  res.status(200).json({family: user.family});
}

const getFamilyGender = (req, res, next) => {
  if (req.params.type){
    res.json(user.family.filter(family => family.gender === req.params.type));
  } else {
    res.json(user.family)
  }
}

const getResturants = (req, res, next) => {
  res.status(200).json({restaurant: user.restaurants});
}

const getResturantsName = (req, res, next) => {
  if(req.params.name){
    res.json(user.restaurants.filter(restaurant => restaurant.name === req.params.name));
  } else {
    res.json(user.restaurants)
  }
}

const changeName = (req, res, next) => {
  res.status(200).json({user: user.name = req.params.id}); // // could also be user.name
}

const changeLocation = (req, res, next) => {
  user.location = (req.body.location);
  res.status(200).json({location: user.location = req.params.id});
}

const postHobbies = (req, res, next) => {
  user.hobbies.push(req.body)
  res.json(user).hobbies;
}

const postOcc = (req, res, next) => {
  user.occupations.push(req.body)
  res.json(user).occupations;
}

const postFamily = (req, res, next) => {
  user.family.push(req.body)
  res.json(user).family;
}

const postRest = (req, res, next) => {
  user.restaurants.push(req.body)
  res.json(user).restaurants;
}





const getSkills = (req, res, next) => {
  if(req.query.experience){
  res.status(200).json({skills: skills.filter(skills => skills.experience === req.query.experience)});
}
  res.json({skills: skills});
}

const postSkills = (req, res, next) => {
  let id = skills.length + 1;
  req.body.id = id;
skills.push(req.body);
res.json(skills);
}

module.exports = {
  getName,
  getLocation,
  getOccupation,
  getOccupationLatest,
  getHobbies,
  getHobbyType,
  getFamily,
  getFamilyGender,
  getResturants,
  getResturantsName,
  changeName,
  changeLocation,
  postHobbies,
  postOcc,
  postFamily,
  postRest,
  getSkills,
  postSkills

}
