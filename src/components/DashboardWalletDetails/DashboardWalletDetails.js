import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardWalletDetails.style'
import copyIcon from '../../assets/Menu Icon/Payment Pages Icon.svg'

const DashboardWalletDetails = ({description, number, bank}) => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography variant='paragraph' className={classes.child1}>
        {description}
      </Typography>
      <Typography variant='paragraph' className={classes.child2}>
        {number} 
        <span className={classes.icon}>
          <img className={classes.iconChild} src={copyIcon} alt=""/>
        </span>
      </Typography>
      <Typography variant='paragraph' className={classes.child3}>
        {bank}
      </Typography>
    </Box>
  )
}

export default DashboardWalletDetails
