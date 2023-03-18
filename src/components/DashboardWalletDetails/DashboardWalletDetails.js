import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardWalletDetails.style'

const DashboardWalletDetails = ({description, number, bank}) => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography variant='paragraph' className={classes.child}>
        {description}
      </Typography>
      <Typography variant='paragraph' className={classes.child}>
        {number}
      </Typography>
      <Typography variant='paragraph' className={classes.child}>
        {bank}
      </Typography>
    </Box>
  )
}

export default DashboardWalletDetails
