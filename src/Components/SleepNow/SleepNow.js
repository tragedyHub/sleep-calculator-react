import React from "react";
import "./sleep-now.sass";

const SleepNow = () => {
  let date = new Date();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  const checkTime = (hour, minutes, plusMinutes, plusHour) => {
    if (minutes + plusMinutes > 59) {
      minutes = 0;
      hour += plusHour;
    }
    return hour + ":" + minutes;
  };

  return (
    <div id="sleep_now">
      <h1>
        Go to bed at: {hour}:{minutes}
      </h1>
      <div className="wakeup_row">
        <h1 className="wakeup_row__title">Wake up: </h1>
        <div>
          {hour + 1}:{minutes + 30}
        </div>
        <div>
          {hour + 3}:{minutes}
        </div>
        <div>{checkTime(hour, minutes, 30, 4)}</div>
        <div>
          {hour + 6}:{minutes}
        </div>
      </div>
    </div>
  );
};

export default SleepNow;
