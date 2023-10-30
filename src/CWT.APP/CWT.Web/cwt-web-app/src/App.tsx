import React from 'react';
import logo from './logo.svg';
import './App.css';
import InviteSummaryProps from './Interfaces/InviteSummaryProps';
import InviteSummary from './components/landingpage/InviteSummary';

function App() {

  const inviteSummaries: InviteSummaryProps[] = [
    {
      foodName: 'Pizza',
      inviteeName: 'John',
      summaryText: 'This is a summary'
    },
    {
      foodName: 'Burgers',
      inviteeName: 'Jane',
      summaryText: 'This is another summary'
    },
    {
      foodName: 'Tacos',
      inviteeName: 'Bob',
      summaryText: 'This is yet another summary'
    }
  ];

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {inviteSummaries.map((inviteSummary, index) => (
        <InviteSummary
          key={index}
          foodName={inviteSummary.foodName}
          inviteeName={inviteSummary.inviteeName}
          summaryText={inviteSummary.summaryText}
        />
      ))}
    </div>
  );
}

export default App;
