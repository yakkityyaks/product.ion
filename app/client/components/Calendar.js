import React from 'react';
import { Link } from 'react-router';
import DayPicker, { DateUtils } from "react-day-picker";


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null
    }
  }

  handleDayClick(e, day, { selected }) {
    this.setState({
      selectedDay: selected ? null : day,
    });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
          onDayClick={ this.handleDayClick }
        />
        <p>
          { selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }
        </p>
        <div>
           <button className="form__submit-btn">
             <Link to={`/pitch`}>
               Back
             </Link>
           </button>
        </div>
      </div>
    );
  }
}

export default Calendar;

