import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import InviteSummaryProps from '../../Interfaces/InviteSummaryProps';
import noPicture from '../../static/no-picture.jpg';
import { useNavigate } from 'react-router-dom';

const actionsStyle = {
    maxWidth: 500,
    margin: '10px',
    width: '75%'
}

const cardStyles = {
    width: '100%',
    height: '100%',
    maxWidth: 500,
}

const InviteSummary: React.FC<InviteSummaryProps> = (inviteSummary: InviteSummaryProps) => {
    const navigate = useNavigate();

    return (
        <CardActionArea onClick={() => navigate(`overview/${inviteSummary.id}`)} sx={actionsStyle}>
            <Card sx={cardStyles}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {inviteSummary.foodName[0].toUpperCase() ?? 'F'}
                    </Avatar>
                }
                title={inviteSummary.foodName}
                titleTypographyProps={{ sx: { textAlign: 'left' } }}
            />
            <CardMedia
                component="img"
                height="250"
                image={noPicture}
            />
            <CardContent>
                <Typography variant='h5'>
                    {`Cooking With: ${inviteSummary.inviteeName}`}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {inviteSummary.summaryText}
                </Typography>
            </CardContent>
        </Card>
        </CardActionArea>
    );
};

export default InviteSummary;
