import React, { useState } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  View,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface MovieEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc: string;
}

interface MovieCalendarProps {
  events: MovieEvent[];
  onSelectEvent: (event: MovieEvent) => void;
}

export const MovieCalendar: React.FC<MovieCalendarProps> = ({
  events,
  onSelectEvent,
}) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      date={date}
      onNavigate={handleNavigate}
      view={view as View | undefined}
      onView={handleViewChange}
      style={{
        height: 600,
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: "#42a5f5",
          color: "white",
          borderRadius: "4px",
          padding: "2px 6px",
          fontSize: "14px",
        },
      })}
      onSelectEvent={onSelectEvent}
    />
  );
};
