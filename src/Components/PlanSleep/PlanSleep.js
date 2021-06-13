import React from 'react'
import "./plan_sleep.sass"
import Dropdown from "../Dropdows/Dropdowns";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const PlanSleep = () => {
    return (
        <div id="plan_sleep">
            <div className="cont">
                <h1 className="plan_sleep__title">I plan to fall asleep at...</h1>
                <Dropdown />
                <button className="btn"><NavLink to="/plan_sleep/result">Calculate</NavLink></button>
            
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
  
export default connect(mapStateToProps, null)(PlanSleep);
  