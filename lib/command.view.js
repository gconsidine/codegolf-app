function command (action) {
  let promise;

  switch (action) {
    case 'course':
      promise = course();
      break;
    case 'courses':
      promise = courses();
      break;
    case 'player':
      promise = player();
      break;
    case 'players':
      promise = players();
      break;
    case 'org':
      promise = org();
      break;
    case 'orgs':
      promise = orgs();
      break;
    case 'rank':
      promise = rank();
      break;
    default:
      throw new Error('No course specified');
  }

  return promise;
}

function course () {

}

function courses () {

}

function player () {

}

function players () {

}

function org () {

}

function orgs () {

}

function rank () {

}

module.exports = command;
