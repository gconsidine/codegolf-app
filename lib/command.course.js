function command (action, program) {
  let path = program.path;
  let promise;

  switch (action) {
    case 'register':
      promise = register(path);
      break;
    case 'validate':
      promise = validate(path);
      break;
    default:
      throw new Error('No course specified');
  }

  return promise;
}

function register (path) {
  // validate package exists on npm
  // npm install
  // validate structure
  // validate interface
  // register course

  console.log(path);
}

function validate (path) {
  console.log(path);
}

module.exports = command;
