import React from 'react'
import "./plan_sleep.sass"
import { connect } from 'react-redux';

const PlanSleepResult = props => {
    const calculateMinutes = (hour, minute) => {
        return Math.floor(hour) + ":" + +(minute + 30)
    }

    const calculateHours = (hour, plus) => {
        if (hour >= 18) {
            if ((hour + plus) >= 24) {
                return -(24 - (hour + plus))
            }
        }
        return hour + plus
    }

    return (
        <div id="plan_sleep_result">
            <div className="cont">
                <h1 className="wake_up_title">You can wake up at: </h1>
                {/* 1.5 */}
                <h1>{calculateMinutes(calculateHours(+props.hour, 1.5), props.minute)}</h1> 
                {/* 3 */}
                <h1>{calculateHours(+props.hour, 3)}:{props.minute}</h1>
                {/* 4.5 */}
                <h1>{calculateMinutes(calculateHours(+props.hour, 4.5), props.minute)}</h1>
                {/* 6 */}
                <h1>{calculateHours(+props.hour, 6)}:{props.minute}</h1>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      hour: state.root.hourDropdown,
      minute: state.root.minuteDropdown,
    };
  };
  
export default connect(mapStateToProps, null)(PlanSleepResult);
  