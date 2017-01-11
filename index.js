const program = require('commander');

const course = require('./lib/command.course');
const play  = require('./lib/command.play');
const view = require('./lib/command.view');
const player = require('./lib/command.player');
const organization = require('./lib/command.organization');

program
  .version('0.0.1');

program
  .command('course <action>')
  .alias('c')
  .option('-p, --path <path>', 'Path to the root of a CGA course project')
  .description(`
    Perform actions related to courses from a course designer 
    perspective (e.g. upload, validate design)
  `)
  .action(course);

program
  .command('view <item>')
  .alias('v')
  .description(`
    View CGA-related items (e.g. courses, players, rank, orgs) in 
    human-readable or pogrammatically useful formats
  `)
  .action(view);

program
  .command('play <item>')
  .alias('p')
  .option('-r, --round <round>', 'Path to the root of your round submission')
  .option('-c, --course <course>', 'Name of the CGA course to play against')
  .description(`
    Play a round by submitting your solution to a particular course
  `)
  .action(play);

program
  .command('player <item>')
  .alias('l')
  .description('Register or update an existing user profile')
  .action(player);

program
  .command('organization <item>')
  .alias('o')
  .description('Register or update an existing organization profile')
  .action(organization);

if (process.argv.length < 3) {
  program.outputHelp();
} else {
  program
    .command('*')
    .action(() => program.outputHelp());
}

program.parse(process.argv);
