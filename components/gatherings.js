import ReactMarkdown from 'react-markdown'

export default function GatheringsComponent({ invites }) {
  console.log('invites: ', invites);

  return <>
  <h1>Upcoming Gatherings</h1>
  {invites && !invites.statusCode && invites.map((invite, i) => (
    <div key={i}>
    <h2>🎉 {invite.Purpose}</h2>
    <h3>For who?</h3>
    <ReactMarkdown>{invite.Invitee}</ReactMarkdown>
    <h3>Details</h3>
    <ReactMarkdown>{invite.Primer}</ReactMarkdown>
    <h3>Rules</h3>
    <ReactMarkdown>{invite.Rules}</ReactMarkdown>
    <h3>When?</h3>
    {
      new Date(`${invite.Date} ${invite.Time}`).toString()
    }
    <h3>Where?</h3>
    <p>{invite.Venue}</p>
    ---
    </div>
    ))
  }
  </>
};
