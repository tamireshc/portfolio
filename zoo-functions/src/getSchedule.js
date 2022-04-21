const data = require('../data/zoo_data');

const { hours, species } = data;

const specieName = species.map((item) => item.name);
const daysOfWeek = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
];
// console.log(specieName);

function animalForDay(day) {
  const animalPerDay = species.filter((item) =>
    item.availability.includes(day));
  const animalDay = animalPerDay.map((item) => item.name);
  return animalDay;
}
// console.log(animalForDay('Tuesday'));

function daysForAnimal(animal) {
  const animalObject = species.filter((item) => item.name === animal);
  return animalObject[0].availability;
}

// console.log(daysForAnimal('giraffes'));
const keysHours = Object.keys(hours);
const valuesHours = Object.values(hours);
const openClose = Object.values(valuesHours);

function scheduleTargetUndefinedOrWrong() {
  const obj = {};
  keysHours.forEach((item, index) => {
    if (item === 'Monday') {
      obj[item] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    if (item !== 'Monday') {
      obj[item] = {
        officeHour: `Open from ${openClose[index].open}am until ${openClose[index].close}pm`,
        exhibition: animalForDay(item),
      };
    }
  });
  return obj;
}

// console.log(scheduleTargetUndefinedOrWrong());

function getScheduleForDay(day) {
  const resultTotal = scheduleTargetUndefinedOrWrong();
  return { [day]: resultTotal[day] };
}

// console.log(getScheduleForDay('Wednesday'));

function getSchedule(scheduleTarget) {
  if (daysOfWeek.includes(scheduleTarget)) {
    return getScheduleForDay(scheduleTarget);
  }
  if (specieName.includes(scheduleTarget)) {
    return daysForAnimal(scheduleTarget);
  }

  return scheduleTargetUndefinedOrWrong();
}

console.log(getSchedule('giraffes'));

// Recusado por erro de lint:

// if (daysOfWeek.includes(scheduleTarget)) {
//   return getScheduleForDay(scheduleTarget);
// }
// if (specieName.includes(scheduleTarget)) {
//   return daysForAnimal(scheduleTarget);
// }
// if (
//   typeof scheduleTarget === 'undefined' ||
//   specieName.includes(scheduleTarget) ||
//   daysOfWeek.includes(scheduleTarget) === false
// ) {
//   return scheduleTargetUndefinedOrWrong();
// }

// console.log(specieName.includes('giraffes'));

module.exports = getSchedule;
