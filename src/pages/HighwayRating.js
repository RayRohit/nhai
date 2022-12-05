import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
    Preferences,
    Actions,
    Analytics,
    Contacts,
    MyCalender,
    MyCard,
    MyTeam,
    solidadd,
    SidebarAdd,
    grayLogo,
    license,
    BillingManagement,
    NavajnaLogo
} from "./../Assests";

import InsightsIcon from '@mui/icons-material/Insights';

const HighwayRating = () => {
    return (
        <div className='container mt-5' style={{ marginTop: "55px" }}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Highway Rating
            </Typography>

            <Stack direction="horizontal">
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Highway Efficiency
                        </Typography>
                        <InsightsIcon fontSize="large" />

                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Highway Efficiency
                        </Typography>
                        <InsightsIcon fontSize="large" />

                    </CardContent>
                </Card>
            </Stack>

        </div>
    )
}

export default HighwayRating