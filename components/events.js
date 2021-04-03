import ReactMarkdown from 'react-markdown'

export default function EventsComponent({ events }) {

  return <>
  <h1>Upcoming Events</h1>
  {events && !events.statusCode && events.map((event, i) => (
    <div key={i}>
    <h2>🎉 {event.Purpose}</h2>
    <h3>For who?</h3>
    <ReactMarkdown>{event.Invitee}</ReactMarkdown>
    <h3>Details</h3>
    <ReactMarkdown>{event.Primer}</ReactMarkdown>
    <h3>Rules</h3>
    <ReactMarkdown>{event.Rules}</ReactMarkdown>
    <h3>When?</h3>
    {
      new Date(`${event.Date} ${event.Time}`).toString()
    }
    <h3>Where?</h3>
    <p>{event.Venue}</p>
    ---
    </div>
    ))
  }
  </>
};
