import React from 'react'

import {Box, Button, Stack, Typography} from '@mui/material';
//Typography- https://mui.com/material-ui/react-typography/


const HeroBanner = () => {
  return (
    <Box>
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px" mb={5}>
            Fitness
        </Typography>
        <Typography 
        fontWeight="600" fontSize="26px" mb={5}>
            It's your workout, take control
        </Typography>
        <Button variant="contained" color="error" href="/exercises">Explore Exercises</Button>
    </Box>
  )
}

export default HeroBanner