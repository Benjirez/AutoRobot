import background from './background.js';

background();

process.on('uncaughtException', function (er) {
  console.error(er.stack)
  process.exit(1)
});