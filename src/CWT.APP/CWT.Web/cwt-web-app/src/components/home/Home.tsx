import { Fab } from "@mui/material";
import InviteSummaryProps from "../../Interfaces/InviteSummaryProps"
import InviteSummary from "../pages/InviteSummary"
import AddIcon from '@mui/icons-material/Add';

//useEffect will pull these on mount
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

const Home = () => {

  return (
  <div className="App CenterDiv">
    {inviteSummaries.map((inviteSummary, index) => (
      <InviteSummary
        key={index}
        foodName={inviteSummary.foodName}
        inviteeName={inviteSummary.inviteeName}
        summaryText={inviteSummary.summaryText}
      />))
    }
    <Fab sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <AddIcon />
    </Fab>
  </div>)
}

export default Home