const user = {
  name: "jack",
  location: "mars",
  occupations: ["pilot", "gamer", "firefighter"],
  hobbies: [
    {
      name: "skiing",
      type: "sport"
    },
    {
      name: "biking",
      type: "sport"
    },
    {
      name: "reading",
      type: "indoor"
    }
  ],
  family: [
    {
      name: "jill",
      relation: "wife",
      gender: "female"
    },
    {
      name: "john",
      relation: "son",
      gender: "male"
    },{
      name: "cash",
      relation: "pet",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "taco bell",
      type: "mexican",
      rating: 4
    },
    {
      name: "dominos",
      type: "pizza",
      rating: 3
    },
    {
      name: "moes",
      type: "mexican",
      rating: 5
    }
  ]
}

module.exports = user
