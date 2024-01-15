import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface ConversationsProps {
    topics: string[];
}
 
//TODO: Center this card in the parent
const Conversations = ({ topics } : ConversationsProps) => {
    return (
    <Card>
        
        <CardContent>
        <Typography variant="h6">Conversations</Typography>
            {topics.map((topic, index) => {
                return <Typography key={index}>{topic}</Typography>
            })}
        </CardContent>
    </Card>)
}

export default Conversations;