const moment = require('moment-timezone');

const region = process.argv[2];
if (!region) {
  console.error('usage: aunja <region>');
  console.error('example: aunja Asia/Tehran');
  process.exit(1);
}

const time = moment.tz(region.trim());
console.log(time.format(moment.HTML5_FMT.TIME_SECONDS));
