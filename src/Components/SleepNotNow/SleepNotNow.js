import React from "react";
import { connect } from "react-redux";
import "./sleep-not-now.sass"

const SleepNotNow = (props) => {
    const checkHours = (hour, minus) => {
        if (hour < 6) {
            if ((minus - hour) <= 0) {
                return -(minus - hour)
            } else {
                return 24 - (minus - hour)
            }
        }
        return hour - minus
    }


  const calculateHours = (hour, minute) => {
    // debugger
    return Math.floor(hour) + ":" + (parseInt(minute) + 30);
  };
  return (
    <div id="not_now">
        
      <h1>Wakeup time: {props.hour}:{props.minute}</h1>
      <h1>
        {checkHours(props.hour, 6)}:{props.minute}
        
      </h1>
      <h1>
        {calculateHours(checkHours(props.hour, 4.5), props.minute)}
      </h1>
      <h1>
        {checkHours(props.hour, 3)}:{props.minute}
      </h1>
      <h1>
        {calculateHours(checkHours(props.hour, 1.5), props.minute)}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hour: state.root.hourDropdown,
    minute: state.root.minuteDropdown,
  };
};

export default connect(mapStateToProps, null)(SleepNotNow);
