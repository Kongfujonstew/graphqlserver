{
  allUsers {
    username
  }
}


{
  getUser(username: "bob") {
    username
  }
}

//Aliases

{
  bob: getUser(username: "bob") {
    username
  }
  alice: getUser(username: "alice") {
    username
  }
}

//here's some javascript:
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
xhr.send(JSON.stringify({
  query: query,
  variables: { dice: dice, sides: sides },
}));