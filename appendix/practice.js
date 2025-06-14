const dayStart = "07:30";
const dayEnd = "17:45";
function formatTime(time) {
  [hours, minutes] = time.split(":");
  return `${hours.padStart(2, "0")}: ${minutes.padStart(2, "0")}`;
}

function calculateMeetingEndTime(time, duration) {
  [hours, minutes] = time.split(":");

  let hoursToNumber = Number(hours);
  let minutesToNumber = Number(minutes);
  const resultingMinutes = duration + minutesToNumber;
  if (resultingMinutes >= 60) {
    hoursToNumber += 1;
    minutesToNumber = resultingMinutes - 60;
  } else {
    minutesToNumber += duration;
  }
  return formatTime(`${String(hoursToNumber)}:${String(minutesToNumber)}`);
}
function scheduleMeeting(startTime, durationMinutes) {
  //calculates whether the meeting will fit in the work day or not

  const validStartTime = formatTime(startTime) >= formatTime(dayStart);
  const meetingEndTime = calculateMeetingEndTime(
    formatTime(startTime),
    durationMinutes
  );
  const validDuration = meetingEndTime <= formatTime(dayEnd);

  //passing conditions = if startTime is >= dayStart and startTime + durationMinutes < dayEnd
  if (validStartTime && validDuration) {
    return true;
  }
  return false;
}

// scheduleMeeting("7:00", 15); //false
// scheduleMeeting("07:15", 30); // false
// scheduleMeeting("7:30", 30); // true

const input = [
  ["7:00", 15],
  ["07:15", 30],
  ["7:30", 30],
  ["11:30", 60],
  ["17:00", 45],
  ["17:30", 30],
  ["18:00", 15],
];

for (let [startTime, durationMinutes] of input) {
  console.log(scheduleMeeting(startTime, durationMinutes));
}
