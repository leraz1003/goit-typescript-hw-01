enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true;
//   } else return false;
// };

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
