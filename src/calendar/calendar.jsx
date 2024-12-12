import React, { useState } from 'react';
import './calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (newEvent.trim() && selectedDate) {
      setEvents({
        ...events,
        [selectedDate]: [...(events[selectedDate] || []), newEvent],
      });
      setNewEvent('');
    }
  };

  const renderCalendar = () => {
    const daysInMonth = new Date().getDate();
    const daysArray = Array.from({ length: daysInMonth }, (v, k) => k + 1);

    return daysArray.map((day) => {
      const date = `2024-12-${day < 10 ? `0${day}` : day}`;
      return (
        <div
          key={day}
          className="calendar-day"
          onClick={() => handleDateClick(date)}
        >
          {day}
          <div className="event-list">
            {(events[date] || []).map((event, idx) => (
              <div key={idx} className="event">
                {event}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="calendar-container">
      <h2>Event Calendar</h2>
      <div className="calendar">{renderCalendar()}</div>
      <form onSubmit={handleEventSubmit} className="event-form">
        <h3>Add Event</h3>
        <div className="form-group">
          <label htmlFor="event">Event:</label>
          <input
            type="text"
            id="event"
            className="form-control"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            className="form-control"
            value={selectedDate}
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Calendar;
