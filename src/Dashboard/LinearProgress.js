import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearProgres() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress sx={{py:0.6,borderRadius:'20px'}}/>
    </Box>
  );
}