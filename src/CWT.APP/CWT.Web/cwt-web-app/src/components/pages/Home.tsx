import { Fab } from "@mui/material";
import InviteSummaryProps from "../../Interfaces/InviteSummaryProps"
import InviteSummary from "../home/InviteSummary"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

//useEffect will pull these on mount
const inviteSummaries: InviteSummaryProps[] = [
  {
    id: '1',
    foodName: 'Pizza',
    inviteeName: 'John',
    summaryText: 'This is a summary'
  },
  {
    id: '2',
    foodName: 'Burgers',
    inviteeName: 'Jane',
    summaryText: 'This is another summary'
  },
  {
    id: '3',
    foodName: 'Tacos',
    inviteeName: 'Bob',
    summaryText: 'This is yet another summary'
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleInviteClick = (inviteId: string) => {
    navigate(`/overview/${inviteId}`);
  }

  return (
  <div className="App CenterDiv">
    {inviteSummaries.map((inviteSummary, index) => (
        <InviteSummary
        key={index}
        foodName={inviteSummary.foodName}
        inviteeName={inviteSummary.inviteeName}
        summaryText={inviteSummary.summaryText}
        id={inviteSummary.id}
        />
      ))
    }
    <Fab sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <AddIcon />
    </Fab>
  </div>)
}

export default Home