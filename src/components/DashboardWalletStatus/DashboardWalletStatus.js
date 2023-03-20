import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardWalletStatus.style'
import EyeIconShow from '../../assets/Mobile App/eye-password-show.svg'
import EyeIconHide from '../../assets/Mobile App/eye-password-hide.svg'
import DashboardWalletButtons from '../DashboardWalletButtons'

const DashboardWalletStatus = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <Box className={classes.header}>
          <Typography variant='body1' className={classes.h1}>
            ngn wallet
          </Typography>
          <span>|</span>
          <Typography variant='body1' className={classes.h1}>
            usd wallet
          </Typography>
        </Box>
        <Box  className={classes.main}>
        <Typography variant='paragraph' className={classes.figures}>
          $5,000,00 
          <span className={classes.figureIconShow}>
              <img src={EyeIconShow} alt='' />
          </span>
          <span className={classes.figureIconHide}>
              <img src={EyeIconHide} alt='' />
          </span>
        </Typography>
        <Typography variant='paragraph' className={classes.walletMangt}>
          manage wallet
        </Typography>
        <DashboardWalletButtons />
      </Box>
      </Box>
      
  )
}

export default DashboardWalletStatus