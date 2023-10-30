import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import InviteSummaryProps from '../../Interfaces/InviteSummaryProps';
import noPicture from './../../static/no-picture.jpg';

const InviteSummary: React.FC<InviteSummaryProps> = (inviteSummary: InviteSummaryProps) => {
    return (
        <Card sx={{ maxWidth: 500, margin: '10px', width: '75%' }}>
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
    );
};

export default InviteSummary;
