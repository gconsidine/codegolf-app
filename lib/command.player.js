function command (action) {
  let promise;

  switch (action) {
    case 'register':
      promise = register();
      break;
    case 'update':
      promise = update();
      break;
    case 'disable':
      promise = disable();
      break;
    case 'info':
      promise = info();
      break;
    case 'review':
      promise = review();
      break;
    default:
      throw new Error('No course specified');
  }

  return promise;
}

//TODO: Interactive mode for player
function register () {

}

function update () {

}

function disable () {

}

function info () {

}

// Review courses
function review () {

}

module.exports = command;
