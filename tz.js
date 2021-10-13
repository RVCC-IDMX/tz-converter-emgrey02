/* eslint-disable prefer-destructuring */
const moment = require('moment-timezone');
const yargs = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: node tz [timezone] [--options]')
  // eslint-disable-next-line no-shadow
  .check((yargs) => {
    if (Object.keys(yargs).length === 2 && !yargs._[0]) {
      throw new Error('ERROR: Needs a command or option');
    } else if (yargs.format && !yargs._[0]) {
      throw new Error('ERROR: --format option needs a command [timezone]');
    } else {
      return true;
    }
  })
  .command({
    command: '[timezone]',
    desc: 'Set a timezone to convert to',
  })
  .options({
    format: {
      describe: 'formats current time in specified timezone',
    },
    all: {
      describe: 'display all timezone options',
    },
    country: {
      describe: 'display timezone options for specified country',
      type: 'string',
      nargs: 1,
    },
  })
  .help()
  .version()
  .epilog('copyright 2021').argv;

moment.tz.setDefault();

let targetTimezone;
const allTimeZones = moment.tz.names();

if (yargs._[0]) {
  if (allTimeZones.some((place) => place === yargs._[0])) {
    targetTimezone = yargs._[0];
  } else {
    console.log(`${yargs._[0]} is not a timezone.`);
    process.exit(2);
  }

  const regex = /\/\w+_?\w*/;
  const place = targetTimezone.match(regex)[0].slice(1).split('_').join(' ');

  if (yargs.format) {
    console.log(
      `In ${place} it is ${moment()
        .tz(targetTimezone)
        .format('dddd, MMMM Do, YYYY')} at ${moment()
        .tz(targetTimezone)
        .format('LTS')}`
    );
  } else {
    console.log(
      `The time in ${place} is ${moment.tz(targetTimezone).format()}`
    );
  }
}

if (yargs.all) {
  console.table(allTimeZones);
}

if (yargs.country) {
  console.table(moment.tz.zonesForCountry(yargs.country));
}
