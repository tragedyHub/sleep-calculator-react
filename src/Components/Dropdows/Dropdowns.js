import { React, useRef } from "react";
import { connect } from "react-redux";
import { setDropdown } from "../../redux/root-reducer";
import "./dropdowns.sass";

const Dropdowns = (props) => {
  const hourDropdown = useRef();
  const minuteDropdown = useRef();

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 0
  ];
  return (
    <div className="dropdown_row">
      <select
        onChange={() => props.setDropdown("hour", hourDropdown.current.value)}
        ref={hourDropdown}
        className="dropdown_row__dropdown"
      >
        <option className="dropdown__option">(hour)</option>
        {
          numbers.map((number, index) => (
            <option key={index} className="dropdown__option">{number}</option>
          ))
        }
      </select>
      <select
        onChange={() =>
          props.setDropdown("minute", minuteDropdown.current.value)
        }
        ref={minuteDropdown}
        className="dropdown_row__dropdown"
      >
        <option className="dropdown__option">(minute)</option>
        <option className="dropdown__option">00</option>
        <option className="dropdown__option">05</option>
        <option className="dropdown__option">10</option>
        <option className="dropdown__option">15</option>
        <option className="dropdown__option">20</option>
        <option className="dropdown__option">25</option>
        <option className="dropdown__option">30</option>
        <option className="dropdown__option">35</option>
        <option className="dropdown__option">40</option>
        <option className="dropdown__option">45</option>
        <option className="dropdown__option">50</option>
        <option className="dropdown__option">55</option>
      </select>
    </div>
  );
}

export default connect(null, { setDropdown })(Dropdowns);
