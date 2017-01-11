function command (action, program) {
  let course = program.course;
  let round = program.round;
  let promise;

  switch (action) {
    case 'submit':
      promise = submit(round, course);
      break;
    case 'validate':
      promise = validate(round, course);
      break;
    default:
      throw new Error('No action specified');
  }

  return promise;
}

function submit (round, course) {
  console.log(round, course);
}

function validate (round, course) {
  console.log(round, course);
}

module.exports = command;
